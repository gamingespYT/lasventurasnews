// ========================================
// BASE DE DATOS DE PROGRAMAS
// ========================================

const programas = [
    {
        id: 1,
        nombre: "Noticiero",
        descripcion: "Todas las noticias al alcance de la ciudadania",
        imagen: "https://gamingespyt.github.io/lasventurasnews/img/news.png",
        url: "programa.html?id=1",
        animacion: "animate__fadeInLeft",
        color: "#dc2626" // Rojo
    },
    {
        id: 2,
        nombre: "¿Quién Sabe Más?",
        descripcion: "Concurso de Cultura General",
        imagen: "https://gamingespyt.github.io/lasventurasnews/img/quien_sabe_mas.png",
        url: "programa.html?id=2",
        animacion: "animate__fadeInRight",
        color: "#2563eb" // Azul
    },
    {
        id: 3,
        nombre: "Reportajes Especiales",
        descripcion: "Programas o reportajes especiales",
        imagen: "https://gamingespyt.github.io/lasventurasnews/img/reportaje_especial.png",
        url: "programa.html?id=3",
        animacion: "animate__fadeInLeft",
        color: "#26dc2fff" // Verde
    },
];

// ========================================
// FUNCIONES DE PROGRAMAS
// ========================================

/**
 * Renderiza los programas en la página principal
 */
function renderizarProgramas() {
    const contenedor = document.getElementById('programas-container');
    if (!contenedor) return;

    // Generar HTML para cada programa
    contenedor.innerHTML = programas.map((programa, index) => `
        <a href="${programa.url}" class="group">
            <div class="card-program bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-500 animate__animated ${programa.animacion}">
                <div class="h-64 bg-gray-200 relative overflow-hidden">
                    <img src="${programa.imagen}" 
                         alt="${programa.nombre}" 
                         class="object-cover w-full h-full group-hover:scale-110 transition duration-700">
                    <div class="absolute inset-0 bg-black opacity-20"></div>
                </div>
                <div class="p-8 text-center">
                    <h3 class="font-oswald text-3xl font-bold text-gray-800 mb-2 uppercase tracking-wide">${programa.nombre}</h3>
                    <div class="w-12 h-1 bg-red-600 mx-auto group-hover:w-24 transition-all"></div>
                </div>
            </div>
        </a>
    `).join('');
}
