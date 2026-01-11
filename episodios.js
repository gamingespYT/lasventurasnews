// ========================================
// BASE DE DATOS DE EPISODIOS
// ========================================

const episodios = [
    {
        id: 1,
        programaId: 1,
        titulo: "NOTICIERO - EDICIÓN 1",
        descripcion: "<strong>ALERTA EN RUTA 15: OLEADA DE ROBOS</strong><br>El sector logístico se encuentra en situación crítica. Se han reportado múltiples robos de mercancía en las gasolineras de la <strong>Ruta 15</strong> durante las horas de la madrugada. Nuestro reportero <strong>Mateo Díaz</strong> recogió el testimonio de afectados como Gus Martínez. Se solicita a todos los transportistas <strong>máxima precaución</strong> y vigilancia en sus rutas.<br><br><strong>AGRICULTURA SOSTENIBLE EN LA CIUDAD</strong><br>La agricultura ecológica llega a Las Venturas. <strong>John</strong>, un vecino de origen escocés, ha puesto en marcha un proyecto de cultivo de patatas tras adquirir un terreno local. A pesar de las dificultades con la propiedad y las bajas temperaturas, el proyecto busca fomentar la producción local y el respeto por el medio ambiente.<br><br><strong>TU HISTORIA ES NOTICIA</strong><br><strong>Las Venturas News</strong> se pone al servicio de la comunidad. Si eres propietario de un negocio, organizas un evento o tienes una denuncia ciudadana, ponemos nuestra plataforma a tu disposición. Contamos con espacios publicitarios diseñados para llevar tu emprendimiento al siguiente nivel.<br><br><strong>CAOS VIAL Y TENSIÓN EN EL CENTRO</strong><br>Un incidente de tráfico provocado por un acto vandálico paralizó el centro de la ciudad el pasado martes, justo frente a nuestra sede. El vehículo afectado bloqueó la circulación, obligando a intervenir a la grúa y a efectivos de la <strong>policía</strong> para gestionar el tráfico y la tensión entre los conductores. La situación fue finalmente resuelta por los servicios mecánicos.",
        videoId: "cjVE2rTI2pg",
        fecha: "29 de Noviembre"
    }
];

// ========================================
// FUNCIONES DE EPISODIOS
// ========================================

/**
 * Renderiza los episodios en la página de programa
 * @param {number} programaId - ID del programa a filtrar (opcional)
 */
function renderizarEpisodios(programaId = null) {
    const contenedor = document.getElementById('episodios-container');
    if (!contenedor) return;

    // Actualizar el banner del programa (necesita acceso al array programas)
    if (programaId && typeof programas !== 'undefined') {
        const programa = programas.find(p => p.id === programaId);
        if (programa) {
            const bannerTitulo = document.getElementById('programa-titulo');
            const bannerSubtitulo = document.getElementById('programa-subtitulo');
            const bannerImagen = document.getElementById('programa-imagen');

            if (bannerTitulo) bannerTitulo.textContent = programa.nombre;
            if (bannerSubtitulo) bannerSubtitulo.textContent = programa.descripcion.toUpperCase();
            if (bannerImagen) bannerImagen.src = programa.imagen.replace('w=800', 'w=1200');
        }
    }

    // Filtrar episodios por programa si se especifica
    let episodiosFiltrados = episodios;
    if (programaId) {
        episodiosFiltrados = episodios.filter(ep => ep.programaId === programaId);
    }

    // Generar HTML para cada episodio
    contenedor.innerHTML = episodiosFiltrados.map((episodio, index) => `
        <a href="video.html?id=${episodio.id}" class="group block">
            <div class="bg-white rounded-xl shadow-md overflow-hidden animate__animated animate__fadeInUp hover:shadow-xl transition-shadow duration-300" 
                 style="animation-delay: ${index * 0.1}s;">
                <div class="aspect-video bg-black relative overflow-hidden">
                    <img src="https://img.youtube.com/vi/${episodio.videoId}/maxresdefault.jpg" 
                         alt="${episodio.titulo}"
                         class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                    <!-- Overlay sutil al hacer hover -->
                    <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all"></div>
                </div>
                <div class="p-6">
                    <h3 class="text-xl font-bold text-gray-800 group-hover:text-red-600 transition mb-2">
                        ${episodio.titulo}
                    </h3>
                    <p class="text-gray-500 text-sm italic">Emitido el ${episodio.fecha}</p>
                </div>
            </div>
        </a>
    `).join('');
}

/**
 * Carga los detalles de un episodio específico en la página de video
 */
function cargarDetalleEpisodio() {
    // Obtener ID del episodio desde la URL
    const urlParams = new URLSearchParams(window.location.search);
    const episodioId = parseInt(urlParams.get('id'));

    if (!episodioId) return;

    // Buscar el episodio
    const episodio = episodios.find(ep => ep.id === episodioId);
    if (!episodio) return;

    // Obtener el nombre del programa desde el array programas
    const programa = typeof programas !== 'undefined'
        ? programas.find(p => p.id === episodio.programaId)
        : null;
    const nombrePrograma = programa ? programa.nombre : 'Programa';

    // Actualizar elementos de la página
    const videoContainer = document.getElementById('video-container');
    const tituloElement = document.getElementById('video-titulo');
    const programaElement = document.getElementById('video-programa');
    const fechaElement = document.getElementById('video-fecha');
    const descripcionElement = document.getElementById('video-descripcion');

    if (videoContainer) {
        videoContainer.innerHTML = `
            <iframe class="w-full h-full" 
                    src="https://www.youtube.com/embed/${episodio.videoId}?autoplay=1" 
                    frameborder="0" 
                    allow="autoplay; encrypted-media" 
                    allowfullscreen>
            </iframe>
        `;
    }

    if (tituloElement) tituloElement.textContent = episodio.titulo;
    if (programaElement) programaElement.textContent = nombrePrograma;
    if (fechaElement) fechaElement.textContent = episodio.fecha;
    if (descripcionElement) descripcionElement.innerHTML = episodio.descripcion;
}
