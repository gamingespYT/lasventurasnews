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
        fecha: "29 de Noviembre"
    }
    */
    {
        id: 1,
        programaId: 1,
        titulo: "NOTICIERO -  1ª EDICIÓN",
        descripcion: "<strong>INSEGURIDAD EN EL SECTOR LOGÍSTICO: ROBOS EN LA RUTA 15</strong><br>Bienvenidos a la primera entrega de este noticiero. Los presentadores <strong>Toni Montana</strong> y <strong>Paula Ramírez</strong> inician la jornada con una noticia preocupante que afecta directamente a los transportistas de la ciudad. Se han reportado múltiples robos de mercancía durante los traslados, una situación que mantiene en vilo al sector logístico. Nuestro reportero, <strong>Mateo Díaz</strong>, se ha desplazado hasta una gasolinera que se ha convertido en uno de los puntos negros de estos incidentes. Allí ha podido recoger el testimonio de <strong>Gus Martínez</strong>, un afectado al que le sustrajeron la carga de su camión hace una semana durante la madrugada. Las autoridades ya están investigando estos hechos y se solicita a todos los conductores que circulen por la <strong>Ruta 15</strong> que extremen la vigilancia y mantengan el máximo cuidado en sus paradas nocturnas.<br><br><strong>AGRICULTURA SOSTENIBLE: EL NUEVO PATATAL DE JOHN</strong><br>La actualidad también nos trae historias de emprendimiento y conexión con la naturaleza. <strong>John</strong>, un vecino de origen escocés, ha apostado por la agricultura sostenible tras adquirir recientemente un terreno local. A pesar de haber tenido algunos problemas iniciales con el anterior propietario que le obligaron a realizar un desembolso económico personal, John se muestra muy satisfecho con su nueva propiedad. Actualmente se dedica al cultivo de patatas o patacas, como él las denomina, y, aunque el frío amenaza parte de su cosecha, su objetivo es consolidar este espacio ecológico en la ciudad.<br><br><strong>PUBLICIDAD: TU HISTORIA ES NOTICIA</strong><br><strong>Las Venturas News</strong> no es solo información, es una plataforma al servicio de todos los ciudadanos. Si tienes un evento que promocionar, un negocio que dar a conocer o una historia que merece ser escuchada, ponemos a tu disposición nuestros equipos, cámaras y voces. Este espacio publicitario está diseñado para que tu emprendimiento llegue al siguiente nivel, convirtiendo tu proyecto en noticia y conectando con toda la audiencia de la ciudad.<br><br><strong>CAOS VIAL FRENTE A LA SEDE DE LAS VENTURAS NEWS</strong><br>Cerramos el bloque informativo con un suceso ocurrido justo frente a nuestras instalaciones, cerca del <strong>Whistle Las Venturas</strong>. Un acto vandálico contra el vehículo de un ciudadano provocó un bloqueo total del tráfico en pleno centro. El incidente alcanzó tal magnitud que los servicios de emergencia y la grúa, operada por el profesional <strong>Gus</strong>, tuvieron serias dificultades para retirar el coche en un primer momento. La tensión entre los conductores atrapados en las retenciones obligó a intervenir a la <strong>policía</strong> para calmar los ánimos, mientras que los servicios mecánicos finalmente lograron solventar el problema técnico. Por suerte, todo quedó en un susto y la circulación pudo ser restablecida tras varios minutos de incertidumbre.",
        videoId: "cjVE2rTI2pg",
        fecha: "29 de Noviembre"
    },
    {
        id: 2,
        programaId: 1,
        titulo: "NOTICIERO -  2ª EDICIÓN",
        descripcion: "<strong>SOLIDARIDAD EN EL CAMPO: LA COSECHA DE JOHN</strong><br>Bienvenidos a la segunda edición de <strong>Las Venturas News</strong> con <strong>Paula Ramírez</strong> y <strong>Toni Montana</strong>. Arrancamos con una noticia que resalta el espíritu comunitario de nuestra ciudad. El vecino <strong>John</strong> ha logrado recoger su primera cosecha de patatas gracias a la ayuda desinteresada de varios ciudadanos que se acercaron al terreno desde primera hora de la mañana. Entre los voluntarios destaca <strong>Chloe</strong>, quien explicó que la iniciativa surgió para devolverle a John un poco de la bondad y generosidad que él siempre muestra con los demás. El patatal no solo ha dado sus frutos, sino que se ha convertido en un símbolo de unión vecinal frente al duro trabajo agrícola.<br><br><strong>PUBLICIDAD: REINAUGURACIÓN DEL RESTAURANTE Y TALLER EL PUENTE</strong><br>El conocido establecimiento <strong>El Puente</strong>, liderado por <strong>Gus Martínez</strong>, abre sus puertas con una oferta renovada. Entre sus especialidades destacan el chuletón el camino y el desayuno del viajero. Además de contar con servicio de gasolinera y zona de picnic, ofrecen un concepto único: mientras disfrutas de la comida, el equipo de mecánicos puede reparar o pintar tu vehículo en su taller integrado. Un lugar diseñado para que al viajero no le falte de nada durante su parada.<br><br><strong>MISTERIO EN SANDY: SUCESOS INEXPLICABLES</strong><br>Una serie de eventos perturbadores han tenido lugar en un páramo cercano a <strong>Sandy</strong>. Varios ciudadanos han denunciado haber despertado en mitad del campo sin recordar cómo llegaron allí. Los testimonios recogidos hablan de visiones de círculos de personas, palabras extrañas en la cabeza e incluso sospechas de rituales o intervenciones externas. Una de las afectadas relató haber despertado en un río durante lo que parecía un bautismo, mientras que otros mencionan una fuerte sensación de pérdida de memoria y malestar físico. La incertidumbre crece ante lo que algunos consideran experiencias paranormales o manipulaciones por parte de grupos fanáticos.<br><br><strong>PUBLICIDAD: MENÚ NAVIDEÑO EN HIJOS DEL ASFALTO</strong><br>El local <strong>Hijos del Asfalto</strong> celebra la llegada de las fiestas con un menú especial de temporada. Los comensales pueden disfrutar de platos como dorada a la plancha, copito de maíz o mazorca con mantequilla, sal y pimienta. Para acompañar, ofrecen su exclusivo ponche nitro navideño. El equipo aprovecha para desear unas felices fiestas y una feliz Navidad a todos sus clientes y amigos.<br><br><strong>NAVIDAD BAJO LA NIEVE EN LAS VENTURAS</strong><br>La magia del invierno ha transformado la fisonomía de la ciudad. <strong>Las Venturas</strong> ha despertado bajo un manto blanco tras una intensa nevada que coincide con el encendido de la iluminación navideña. El reportero <strong>John</strong> informó desde los campos de golf y la <strong>Plaza de Cubos</strong> sobre el espectacular ambiente, destacando la decoración con guirnaldas, árboles de Navidad y carteles luminosos que recuerdan a la estética de Times Square. Los vecinos han tomado las calles para disfrutar del paisaje y las celebraciones de Nochebuena y Año Nuevo en una ciudad que luce más brillante que nunca.",
        videoId: "kp5l0Nqsu4c",
        fecha: "4 de Diciembre"
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
}
