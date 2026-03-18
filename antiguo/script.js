// ========================================
// INICIALIZACIÓN - Las Venturas News
// ========================================

console.log('Las Venturas News - Script cargado correctamente');

document.addEventListener('DOMContentLoaded', () => {
    // Detectar qué página estamos viendo y ejecutar la función correspondiente
    const path = window.location.pathname;

    if (path.includes('index.html') || path.endsWith('/') || path.endsWith('lasventurasnews')) {
        // Página principal - renderizar programas
        if (typeof renderizarProgramas === 'function') {
            renderizarProgramas();
        }
    } else if (path.includes('programa.html')) {
        // Página de programa - renderizar episodios
        const urlParams = new URLSearchParams(window.location.search);
        const programaId = parseInt(urlParams.get('id'));

        if (typeof renderizarEpisodios === 'function') {
            renderizarEpisodios(programaId);
        }

        // Inicializar el ordenamiento
        if (typeof inicializarOrdenamiento === 'function') {
            inicializarOrdenamiento();
        }
    } else if (path.includes('episodio.html')) {
        // Página de video - cargar detalles del episodio
        if (typeof cargarDetalleEpisodio === 'function') {
            cargarDetalleEpisodio();
        }
    }
});
