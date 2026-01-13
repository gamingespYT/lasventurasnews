// ========================================
// COMPONENTE DE HEADER REUTILIZABLE
// ========================================

/**
 * Renderiza el header común en todas las páginas
 */
function renderizarHeader() {
    const headerContainer = document.getElementById('header-container');
    if (!headerContainer) return;

    // Generar enlaces de programas dinámicamente
    const enlacesProgramas = programas.map(programa =>
        `<a href="${programa.url}" class="mobile-menu-link hover:bg-red-50 hover:text-red-600 transition px-6 py-4 block border-b border-gray-100">${programa.nombre}</a>`
    ).join('');

    headerContainer.innerHTML = `
        <header class="bg-white border-b-4 border-red-600 p-4 md:p-6 shadow-sm sticky top-0 z-50">
            <div class="container mx-auto">
                <div class="flex justify-between items-center">
                    <!-- Logo -->
                    <a href="index.html" class="text-2xl md:text-3xl font-oswald font-bold tracking-tighter text-gray-800 hover:opacity-80 transition">
                        LAS VENTURAS <span class="text-red-600">NEWS</span>
                    </a>
                    
                    <!-- Menú Desktop (solo visible en pantallas grandes) -->
                    <nav class="hidden lg:flex space-x-6 font-medium text-gray-600">
                        <a href="index.html" class="hover:text-red-600 transition">Inicio</a>
                        ${programas.map(p => `<a href="${p.url}" class="hover:text-red-600 transition">${p.nombre}</a>`).join('')}
                    </nav>
                    
                    <!-- Botón hamburguesa móvil/tablet -->
                    <button id="menu-toggle" class="lg:hidden text-gray-800 hover:text-red-600 transition focus:outline-none z-50" aria-label="Toggle menu">
                        <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                        </svg>
                    </button>
                </div>
            </div>
        </header>
        
        <!-- Overlay oscuro -->
        <div id="menu-overlay" class="fixed inset-0 bg-black bg-opacity-50 z-40 hidden transition-opacity duration-300"></div>
        
        <!-- Menú Lateral Móvil/Tablet -->
        <nav id="mobile-menu" class="fixed top-0 left-0 h-full w-80 max-w-[85%] bg-white shadow-2xl z-50 transform -translate-x-full transition-transform duration-300 ease-in-out lg:hidden">
            <div class="flex flex-col h-full">
                <!-- Header del menú lateral -->
                <div class="bg-gradient-to-r from-red-600 to-red-700 p-6 flex justify-between items-center">
                    <h2 class="text-white text-xl font-oswald font-bold tracking-wider">MENÚ</h2>
                    <button id="menu-close" class="text-white hover:text-gray-200 transition" aria-label="Close menu">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    </button>
                </div>
                
                <!-- Enlaces del menú -->
                <div class="flex-1 overflow-y-auto">
                    <a href="index.html" class="mobile-menu-link hover:bg-red-50 hover:text-red-600 transition px-6 py-4 block border-b border-gray-100 font-medium text-gray-700">
                        Inicio
                    </a>
                    ${enlacesProgramas}
                </div>
                
                <!-- Footer del menú lateral -->
                <div class="p-6 border-t border-gray-200 bg-gray-50">
                    <p class="text-sm text-gray-500 text-center">
                        © ${new Date().getFullYear()} Las Venturas News
                    </p>
                </div>
            </div>
        </nav>
    `;

    // Añadir funcionalidad al menú lateral
    const menuToggle = document.getElementById('menu-toggle');
    const menuClose = document.getElementById('menu-close');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuOverlay = document.getElementById('menu-overlay');
    const menuLinks = document.querySelectorAll('.mobile-menu-link');

    function openMenu() {
        mobileMenu.classList.remove('-translate-x-full');
        menuOverlay.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Evitar scroll del body
    }

    function closeMenu() {
        mobileMenu.classList.add('-translate-x-full');
        menuOverlay.classList.add('hidden');
        document.body.style.overflow = ''; // Restaurar scroll del body
    }

    if (menuToggle) {
        menuToggle.addEventListener('click', openMenu);
    }

    if (menuClose) {
        menuClose.addEventListener('click', closeMenu);
    }

    if (menuOverlay) {
        menuOverlay.addEventListener('click', closeMenu);
    }

    // Cerrar menú al hacer clic en un enlace
    menuLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
}

/**
 * Renderiza el footer común en todas las páginas
 */
function renderizarFooter() {
    const footerContainer = document.getElementById('footer-container');
    if (!footerContainer) return;

    footerContainer.innerHTML = `
        <footer class="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white mt-20">
            <div class="container mx-auto px-4 py-12">
                <div class="grid md:grid-cols-3 gap-8 mb-8">
                    <!-- Columna 1: Logo y descripción -->
                    <div>
                        <h3 class="text-2xl font-oswald font-bold mb-3">
                            LAS VENTURAS <span class="text-red-500">NEWS</span>
                        </h3>
                        <p class="text-gray-400 text-sm leading-relaxed">
                            Tu conexión diaria con Las Venturas. Noticias, reportajes y análisis de la ciudad que nunca duerme.
                        </p>
                    </div>

                    <!-- Columna 2: Enlaces rápidos -->
                    <div>
                        <h4 class="font-bold mb-3 text-lg">Enlaces Rápidos</h4>
                        <ul class="space-y-2 text-gray-400 text-sm">
                            <li><a href="index.html" class="hover:text-red-500 transition">Inicio</a></li>
                            ${programas.map(p => `<li><a href="${p.url}" class="hover:text-red-500 transition">${p.nombre}</a></li>`).join('')}
                        </ul>
                    </div>

                    <!-- Columna 3: Contacto -->
                    <div>
                        <h4 class="font-bold mb-3 text-lg">Contacto</h4>
                        <p class="text-gray-400 text-sm mb-2">📧 lasventurasnews@lasventuras.rp</p>
                        <p class="text-gray-400 text-sm mb-4">📞 Encuentranos en la app de servicios</p>
                        <div class="flex space-x-3">
                            <a href="https://www.youtube.com/@LasVenturasNews" class="bg-gray-700 hover:bg-red-600 p-2 rounded-full transition" title="YouTube">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                            </a>
                            <a href="https://discord.gg/7vnkqHe8zD" class="bg-gray-700 hover:bg-red-600 p-2 rounded-full transition" title="Discord">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/></svg>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Línea divisoria -->
                <div class="border-t border-gray-700 pt-6">
                    <p class="text-center text-gray-400 text-sm">
                        &copy; ${new Date().getFullYear()} Las Venturas News Media Group. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    `;
}

// Ejecutar al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
    renderizarHeader();
    renderizarFooter();
});
