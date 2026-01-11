// ========================================
// COMPONENTE DE HEADER REUTILIZABLE
// ========================================

/**
 * Renderiza el header común en todas las páginas
 */
function renderizarHeader() {
    const headerContainer = document.getElementById('header-container');
    if (!headerContainer) return;

    headerContainer.innerHTML = `
        <header class="bg-white border-b-4 border-red-600 p-6 shadow-sm sticky top-0 z-50">
            <div class="container mx-auto flex justify-between items-center">
                <a href="index.html" class="text-3xl font-oswald font-bold tracking-tighter text-gray-800 hover:opacity-80 transition">
                    LAS VENTURAS <span class="text-red-600">NEWS</span>
                </a>
                <nav class="space-x-6 font-medium text-gray-600">
                    <a href="index.html" class="hover:text-red-600 transition">Inicio</a>
                    <a href="#" class="hover:text-red-600 transition">En Directo</a>
                </nav>
            </div>
        </header>
    `;
}

// Ejecutar al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
    renderizarHeader();
});
