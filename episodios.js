// ========================================
// BASE DE DATOS DE EPISODIOS
// ========================================

const episodios = [

    /* Ejemplo
    {
        id: 1,
        programaId: 1,
        titulo: "NOTICIERO -  1ª EDICIÓN",
        descripcion: "",
        videoId: "cjVE2rTI2pg",
        fecha: "29 de Noviembre del 2025"
    }
    */
   


];

// ========================================
// FUNCIONES DE EPISODIOS
// ========================================

/**
 * Parsea una fecha en formato español (DD de Mes del YYYY) a objeto Date
 * @param {string} fechaStr - Fecha en formato español
 * @returns {Date} Objeto Date
 */
function parsearFechaEspañola(fechaStr) {
    const meses = {
        'enero': 0, 'febrero': 1, 'marzo': 2, 'abril': 3,
        'mayo': 4, 'junio': 5, 'julio': 6, 'agosto': 7,
        'septiembre': 8, 'octubre': 9, 'noviembre': 10, 'diciembre': 11
    };

    // Intentar formato: "DD de Mes del YYYY"
    let partes = fechaStr.toLowerCase().match(/(\d+)\s+de\s+(\w+)\s+del\s+(\d+)/);

    // Si no coincide, intentar formato: "DD Mes del YYYY" (sin "de")
    if (!partes) {
        partes = fechaStr.toLowerCase().match(/(\d+)\s+(\w+)\s+del\s+(\d+)/);
    }

    if (partes) {
        const dia = parseInt(partes[1]);
        const mes = meses[partes[2]];
        const año = parseInt(partes[3]);
        return new Date(año, mes, dia);
    }
    return new Date(); // Retornar fecha actual si no se puede parsear
}

/**
 * Actualiza dinámicamente el título y meta tags de la página
 * @param {string} title - Título de la página
 * @param {string} description - Descripción para meta tags
 * @param {string} imageUrl - URL de la imagen para compartir (opcional)
 */
function updateMetaTags(title, description, imageUrl = null) {
    // Actualizar título de la página
    document.title = title;

    // Actualizar meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.setAttribute('content', description);
    }

    // Actualizar Open Graph title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
        ogTitle.setAttribute('content', title);
    }

    // Actualizar Open Graph description
    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
        ogDescription.setAttribute('content', description);
    }

    // Actualizar Open Graph image
    if (imageUrl) {
        let ogImage = document.querySelector('meta[property="og:image"]');
        if (ogImage) {
            ogImage.setAttribute('content', imageUrl);
        } else {
            // Crear meta tag si no existe
            ogImage = document.createElement('meta');
            ogImage.setAttribute('property', 'og:image');
            ogImage.setAttribute('content', imageUrl);
            document.head.appendChild(ogImage);
        }
    }

    // Actualizar Twitter title
    let twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
        twitterTitle.setAttribute('content', title);
    }

    // Actualizar Twitter description
    let twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
        twitterDescription.setAttribute('content', description);
    }

    // Actualizar Twitter image
    if (imageUrl) {
        let twitterImage = document.querySelector('meta[name="twitter:image"]');
        if (twitterImage) {
            twitterImage.setAttribute('content', imageUrl);
        } else {
            // Crear meta tag si no existe
            twitterImage = document.createElement('meta');
            twitterImage.setAttribute('name', 'twitter:image');
            twitterImage.setAttribute('content', imageUrl);
            document.head.appendChild(twitterImage);
        }
    }
}

/**
 * Ordena los episodios según el criterio seleccionado
 * @param {Array} episodios - Array de episodios a ordenar
 * @param {string} orden - 'reciente' o 'antiguo'
 * @returns {Array} Array de episodios ordenados
 */
function ordenarEpisodios(episodios, orden = 'reciente') {
    return [...episodios].sort((a, b) => {
        const fechaA = parsearFechaEspañola(a.fecha);
        const fechaB = parsearFechaEspañola(b.fecha);

        if (orden === 'reciente') {
            return fechaB - fechaA; // Más reciente primero
        } else {
            return fechaA - fechaB; // Más antiguo primero
        }
    });
}

/**
 * Renderiza los episodios en la página de programa
 * @param {number} programaId - ID del programa a filtrar (opcional)
 * @param {string} orden - Orden de los episodios ('reciente' o 'antiguo')
 */
function renderizarEpisodios(programaId = null, orden = 'reciente') {
    const contenedor = document.getElementById('episodios-container');
    if (!contenedor) return;

    // Validar que el programaId sea válido si se proporciona
    if (programaId !== null) {
        // Si el ID es inválido (no es un número válido), redirigir a 404
        if (isNaN(programaId) || programaId <= 0) {
            window.location.href = '404.html';
            return;
        }
    }

    // Actualizar el banner del programa (necesita acceso al array programas)
    if (programaId && typeof programas !== 'undefined') {
        const programa = programas.find(p => p.id === programaId);

        // Si el programa no existe, redirigir a 404
        if (!programa) {
            window.location.href = '404.html';
            return;
        }

        const bannerTitulo = document.getElementById('programa-titulo');
        const bannerSubtitulo = document.getElementById('programa-subtitulo');
        const bannerImagen = document.getElementById('programa-imagen');

        if (bannerTitulo) bannerTitulo.textContent = programa.nombre;
        if (bannerSubtitulo) bannerSubtitulo.textContent = programa.descripcion.toUpperCase();
        if (bannerImagen) bannerImagen.src = programa.imagen.replace('w=800', 'w=1200');

        // Actualizar meta tags con información del programa
        const title = `${programa.nombre} | Las Venturas News`;
        const description = `${programa.descripcion} - Todos los episodios de ${programa.nombre} en Las Venturas News.`;
        updateMetaTags(title, description, programa.imagen);
    }

    // Filtrar episodios por programa si se especifica
    let episodiosFiltrados = episodios;
    if (programaId) {
        episodiosFiltrados = episodios.filter(ep => ep.programaId === programaId);
    }

    // Ordenar episodios según el criterio seleccionado
    episodiosFiltrados = ordenarEpisodios(episodiosFiltrados, orden);

    // Generar HTML para cada episodio
    contenedor.innerHTML = episodiosFiltrados.map((episodio, index) => `
        <a href="episodio.html?id=${episodio.id}" class="group block h-full">
            <div class="bg-white rounded-xl shadow-md overflow-hidden animate__animated animate__fadeInUp hover:shadow-xl transition-shadow duration-300 h-full flex flex-col" 
                 style="animation-delay: ${index * 0.1}s;">
                <div class="aspect-video bg-black relative overflow-hidden flex-shrink-0">
                    <img src="https://img.youtube.com/vi/${episodio.videoId}/maxresdefault.jpg" 
                         alt="${episodio.titulo}"
                         class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                         onerror="this.src='https://img.youtube.com/vi/${episodio.videoId}/hqdefault.jpg'">
                    <!-- Overlay sutil al hacer hover -->
                    <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all"></div>
                </div>
                <div class="p-6 flex-1 flex flex-col">
                    <h3 class="text-xl font-bold text-gray-800 group-hover:text-red-600 transition mb-2 flex-1">
                        ${episodio.titulo}
                    </h3>
                    <p class="text-gray-500 text-sm italic">Emitido el ${episodio.fecha}</p>
                </div>
            </div>
        </a>
    `).join('');
}

/**
 * Inicializa el evento de cambio de ordenación
 */
function inicializarOrdenamiento() {
    const selector = document.getElementById('ordenar-episodios');
    if (!selector) return;

    // Obtener el ID del programa de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const programaId = parseInt(urlParams.get('id'));

    // Event listener para cambios en el selector
    selector.addEventListener('change', (e) => {
        const orden = e.target.value;
        renderizarEpisodios(programaId, orden);
    });
}

/**
 * Convierte un color hexadecimal a rgba con opacidad
 * @param {string} hex - Color en formato hexadecimal (#RRGGBB)
 * @param {number} opacity - Opacidad entre 0 y 1
 * @returns {string} Color en formato rgba
 */
function hexToRgba(hex, opacity) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

/**
 * Carga los detalles de un episodio específico en la página de video
 */
function cargarDetalleEpisodio() {
    // Obtener ID del episodio desde la URL
    const urlParams = new URLSearchParams(window.location.search);
    const episodioId = parseInt(urlParams.get('id'));

    // Si no hay ID o es inválido, redirigir a 404
    if (!episodioId || isNaN(episodioId)) {
        window.location.href = '404.html';
        return;
    }

    // Buscar el episodio
    const episodio = episodios.find(ep => ep.id === episodioId);

    // Si el episodio no existe, redirigir a 404
    if (!episodio) {
        window.location.href = '404.html';
        return;
    }

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
    if (programaElement) {
        programaElement.textContent = nombrePrograma;

        // Aplicar colores dinámicos del programa usando estilos inline
        if (programa && programa.color) {
            const colorTexto = programa.color;
            const colorFondo = hexToRgba(programa.color, 0.15); // 15% de opacidad

            programaElement.style.color = colorTexto;
            programaElement.style.backgroundColor = colorFondo;
        }
    }
    if (fechaElement) fechaElement.textContent = episodio.fecha;
    if (descripcionElement) descripcionElement.innerHTML = episodio.descripcion;

    // Actualizar título de la página y meta tags
    const title = `${episodio.titulo} | Las Venturas News`;
    const description = `${episodio.titulo} - Episodio de ${nombrePrograma}. ${episodio.fecha}. Las Venturas News, tu conexión con la ciudad.`;
    const imageUrl = programa ? programa.imagen : null;
    updateMetaTags(title, description, imageUrl);
}
