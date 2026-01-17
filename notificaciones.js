// ========================================
// SISTEMA DE NOTIFICACIONES DE NUEVOS EPISODIOS
// ========================================

/**
 * Verifica si hay episodios nuevos (publicados en los últimos 7 días)
 * y muestra una notificación si no se ha visto antes
 */
function verificarNuevosEpisodios() {
    // Si acabas de venir de una notificación, no mostrar otra inmediatamente
    if (sessionStorage.getItem('lvn_desde_notificacion') === 'true') {
        // Limpiar el flag para que en la próxima página sí se muestren
        sessionStorage.removeItem('lvn_desde_notificacion');
        return;
    }

    // Obtener la fecha actual
    const ahora = new Date();
    const hace7Dias = new Date();
    hace7Dias.setDate(ahora.getDate() - 7);

    // Obtener episodios vistos y pospuestos del localStorage
    const episodiosVistos = JSON.parse(localStorage.getItem('lvn_episodios_vistos') || '[]');
    const episodiosPospuestos = JSON.parse(localStorage.getItem('lvn_episodios_pospuestos') || '{}');

    // Buscar episodios nuevos (últimos 7 días) que no se hayan visto
    const episodiosNuevos = episodios.filter(episodio => {
        const fechaEpisodio = parsearFechaEspañola(episodio.fecha);

        // Si está marcado como visto permanentemente, no mostrar
        if (episodiosVistos.includes(episodio.id)) {
            return false;
        }

        // Si está pospuesto, verificar si ya pasó 1 hora
        if (episodiosPospuestos[episodio.id]) {
            const tiempoPospuesto = new Date(episodiosPospuestos[episodio.id]);
            const unaHoraDespues = new Date(tiempoPospuesto.getTime() + 60 * 60 * 1000); // +1 hora

            // Si aún no pasó 1 hora, no mostrar
            if (ahora < unaHoraDespues) {
                return false;
            }
            // Si ya pasó 1 hora, eliminar del pospuesto y permitir mostrar
            delete episodiosPospuestos[episodio.id];
            localStorage.setItem('lvn_episodios_pospuestos', JSON.stringify(episodiosPospuestos));
        }

        // Verificar si es de los últimos 7 días
        return fechaEpisodio >= hace7Dias && fechaEpisodio <= ahora;
    });

    // Ordenar por fecha (más reciente primero)
    episodiosNuevos.sort((a, b) => {
        const fechaA = parsearFechaEspañola(a.fecha);
        const fechaB = parsearFechaEspañola(b.fecha);
        return fechaB - fechaA;
    });

    // Mostrar notificación solo del episodio más reciente
    if (episodiosNuevos.length > 0) {
        mostrarNotificacionEpisodio(episodiosNuevos[0]);
    }
}

/**
 * Muestra un popup con la notificación del nuevo episodio
 * @param {Object} episodio - El episodio a mostrar
 */
function mostrarNotificacionEpisodio(episodio) {
    // Obtener información del programa
    const programa = programas.find(p => p.id === episodio.programaId);
    if (!programa) return;

    // Crear overlay de fondo
    const overlay = document.createElement('div');
    overlay.id = 'notificacion-overlay';
    overlay.className = 'fixed inset-0 bg-black bg-opacity-60 z-[100] flex items-center justify-center p-4 animate__animated animate__fadeIn';

    // Crear contenedor del popup
    overlay.innerHTML = `
        <div class="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden animate__animated animate__zoomIn animate__faster">
            <!-- Header del popup -->
            <div class="bg-gradient-to-r from-red-600 to-red-700 p-4 relative">
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-2">
                        <svg class="w-6 h-6 text-white animate__animated animate__heartBeat animate__infinite" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
                        </svg>
                        <h3 class="text-white font-oswald font-bold text-xl uppercase">¡Nuevo Episodio!</h3>
                    </div>
                    <button id="cerrar-notificacion" class="text-white hover:text-red-200 transition-colors" aria-label="Cerrar notificación">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    </button>
                </div>
                <p class="text-red-100 text-sm mt-1">${obtenerTextoPublicacion(episodio.fecha)}</p>
            </div>

            <!-- Contenido del popup -->
            <div class="p-5">
                <!-- Miniatura del episodio -->
                <div class="relative rounded-xl overflow-hidden mb-4 group cursor-pointer shadow-lg" onclick="irAlEpisodio(${episodio.id})">
                    <div class="aspect-video bg-black relative overflow-hidden">
                        <img src="https://img.youtube.com/vi/${episodio.videoId}/maxresdefault.jpg" 
                             alt="${episodio.titulo}"
                             class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                             onerror="this.src='https://img.youtube.com/vi/${episodio.videoId}/hqdefault.jpg'">
                        <!-- Overlay con icono de play -->
                        <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all flex items-center justify-center">
                            <svg class="w-16 h-16 text-white opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                            </svg>
                        </div>
                    </div>
                    <!-- Badge del programa -->
                    <div class="absolute top-3 left-3">
                        <span class="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                            ${programa.nombre}
                        </span>
                    </div>
                </div>

                <!-- Título del episodio -->
                <h4 class="font-oswald text-xl font-bold text-gray-900 mb-2 leading-tight">
                    ${episodio.titulo}
                </h4>

                <!-- Fecha -->
                <p class="text-gray-500 text-sm mb-4 flex items-center gap-1">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    </svg>
                    ${episodio.fecha}
                </p>

                <!-- Botones de acción -->
                <div class="flex gap-3">
                    <button onclick="irAlEpisodio(${episodio.id})" 
                            class="flex-1 bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-xl font-bold uppercase tracking-wide hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        Ver Ahora
                    </button>
                    <button onclick="posponerNotificacion(${episodio.id})" 
                            class="px-4 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-bold hover:border-red-600 hover:text-red-600 transition-all duration-300">
                        Después
                    </button>
                </div>
            </div>
        </div>
    `;

    // Agregar al DOM
    document.body.appendChild(overlay);

    // Prevenir scroll del body
    document.body.style.overflow = 'hidden';

    // Event listener para cerrar con el botón X - marca como visto permanentemente
    document.getElementById('cerrar-notificacion').addEventListener('click', () => {
        marcarEpisodioComoVisto(episodio.id);
    });

    // Event listener para cerrar al hacer clic fuera del popup - también pospone
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            posponerNotificacion(episodio.id);
        }
    });
}

/**
 * Obtiene el texto completo de publicación con gramática correcta
 * @param {string} fechaStr - Fecha en formato español
 * @returns {string} - Texto completo "Publicado hoy", "Publicado ayer", etc.
 */
function obtenerTextoPublicacion(fechaStr) {
    const fechaEpisodio = parsearFechaEspañola(fechaStr);
    const ahora = new Date();
    const diferenciaDias = Math.floor((ahora - fechaEpisodio) / (1000 * 60 * 60 * 24));

    if (diferenciaDias === 0) return 'Publicado hoy';
    if (diferenciaDias === 1) return 'Publicado ayer';
    if (diferenciaDias < 7) return `Publicado hace ${diferenciaDias} días`;
    return `Publicado hace ${Math.floor(diferenciaDias / 7)} semanas`;
}

/**
 * Navega al episodio y marca como visto permanentemente
 * @param {number} episodioId - ID del episodio
 */
function irAlEpisodio(episodioId) {
    marcarEpisodioComoVisto(episodioId);

    // Marcar en sessionStorage que venimos de una notificación
    // para evitar que salte otra notificación inmediatamente al entrar
    sessionStorage.setItem('lvn_desde_notificacion', 'true');

    window.location.href = `episodio.html?id=${episodioId}`;
}

/**
 * Pospone la notificación por 1 hora
 * @param {number} episodioId - ID del episodio
 */
function posponerNotificacion(episodioId) {
    const episodiosPospuestos = JSON.parse(localStorage.getItem('lvn_episodios_pospuestos') || '{}');

    // Guardar timestamp actual
    episodiosPospuestos[episodioId] = new Date().toISOString();
    localStorage.setItem('lvn_episodios_pospuestos', JSON.stringify(episodiosPospuestos));

    // Cerrar popup
    cerrarPopup();
}

/**
 * Marca un episodio como visto permanentemente en localStorage
 * @param {number} episodioId - ID del episodio
 */
function marcarEpisodioComoVisto(episodioId) {
    const episodiosVistos = JSON.parse(localStorage.getItem('lvn_episodios_vistos') || '[]');

    if (!episodiosVistos.includes(episodioId)) {
        episodiosVistos.push(episodioId);
        localStorage.setItem('lvn_episodios_vistos', JSON.stringify(episodiosVistos));
    }

    // También eliminar de pospuestos si existe
    const episodiosPospuestos = JSON.parse(localStorage.getItem('lvn_episodios_pospuestos') || '{}');
    if (episodiosPospuestos[episodioId]) {
        delete episodiosPospuestos[episodioId];
        localStorage.setItem('lvn_episodios_pospuestos', JSON.stringify(episodiosPospuestos));
    }

    // Cerrar popup
    cerrarPopup();
}

/**
 * Cierra el popup de notificación con animación
 */
function cerrarPopup() {
    const overlay = document.getElementById('notificacion-overlay');
    if (overlay) {
        // Animación de salida
        overlay.classList.remove('animate__fadeIn');
        overlay.classList.add('animate__fadeOut');

        setTimeout(() => {
            overlay.remove();
            document.body.style.overflow = ''; // Restaurar scroll
        }, 300);
    }
}

// Ejecutar verificación al cargar cualquier página
if (typeof episodios !== 'undefined' && typeof programas !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
        // Pequeño delay para que cargue todo primero
        setTimeout(verificarNuevosEpisodios, 500);
    });
}
