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
    {
        id: 1,
        programaId: 1,
        titulo: "NOTICIERO -  1ª EDICIÓN",
        descripcion: "<strong>INSEGURIDAD EN EL SECTOR LOGÍSTICO: ROBOS EN LA RUTA 15</strong><br>Bienvenidos a la primera entrega de este noticiero. Los presentadores <strong>Toni Montana</strong> y <strong>Paula Ramírez</strong> inician la jornada con una noticia preocupante que afecta directamente a los transportistas de la ciudad. Se han reportado múltiples robos de mercancía durante los traslados, una situación que mantiene en vilo al sector logístico. Nuestro reportero, <strong>Mateo Díaz</strong>, se ha desplazado hasta una gasolinera que se ha convertido en uno de los puntos negros de estos incidentes. Allí ha podido recoger el testimonio de <strong>Gus Martínez</strong>, un afectado al que le sustrajeron la carga de su camión hace una semana durante la madrugada. Las autoridades ya están investigando estos hechos y se solicita a todos los conductores que circulen por la <strong>Ruta 15</strong> que extremen la vigilancia y mantengan el máximo cuidado en sus paradas nocturnas.<br><br><strong>AGRICULTURA SOSTENIBLE: EL NUEVO PATATAL DE JOHN</strong><br>La actualidad también nos trae historias de emprendimiento y conexión con la naturaleza. <strong>John</strong>, un vecino de origen escocés, ha apostado por la agricultura sostenible tras adquirir recientemente un terreno local. A pesar de haber tenido algunos problemas iniciales con el anterior propietario que le obligaron a realizar un desembolso económico personal, John se muestra muy satisfecho con su nueva propiedad. Actualmente se dedica al cultivo de patatas o patacas, como él las denomina, y, aunque el frío amenaza parte de su cosecha, su objetivo es consolidar este espacio ecológico en la ciudad.<br><br><strong>PUBLICIDAD: TU HISTORIA ES NOTICIA</strong><br><strong>Las Venturas News</strong> no es solo información, es una plataforma al servicio de todos los ciudadanos. Si tienes un evento que promocionar, un negocio que dar a conocer o una historia que merece ser escuchada, ponemos a tu disposición nuestros equipos, cámaras y voces. Este espacio publicitario está diseñado para que tu emprendimiento llegue al siguiente nivel, convirtiendo tu proyecto en noticia y conectando con toda la audiencia de la ciudad.<br><br><strong>CAOS VIAL FRENTE A LA SEDE DE LAS VENTURAS NEWS</strong><br>Cerramos el bloque informativo con un suceso ocurrido justo frente a nuestras instalaciones, cerca del <strong>Whistle Las Venturas</strong>. Un acto vandálico contra el vehículo de un ciudadano provocó un bloqueo total del tráfico en pleno centro. El incidente alcanzó tal magnitud que los servicios de emergencia y la grúa, operada por el profesional <strong>Gus</strong>, tuvieron serias dificultades para retirar el coche en un primer momento. La tensión entre los conductores atrapados en las retenciones obligó a intervenir a la <strong>policía</strong> para calmar los ánimos, mientras que los servicios mecánicos finalmente lograron solventar el problema técnico. Por suerte, todo quedó en un susto y la circulación pudo ser restablecida tras varios minutos de incertidumbre.",
        videoId: "cjVE2rTI2pg",
        fecha: "29 de Noviembre del 2025"
    },
    {
        id: 2,
        programaId: 1,
        titulo: "NOTICIERO -  2ª EDICIÓN",
        descripcion: "<strong>SOLIDARIDAD EN EL CAMPO: LA COSECHA DE JOHN</strong><br>Bienvenidos a la segunda edición de <strong>Las Venturas News</strong> con <strong>Paula Ramírez</strong> y <strong>Toni Montana</strong>. Arrancamos con una noticia que resalta el espíritu comunitario de nuestra ciudad. El vecino <strong>John</strong> ha logrado recoger su primera cosecha de patatas gracias a la ayuda desinteresada de varios ciudadanos que se acercaron al terreno desde primera hora de la mañana. Entre los voluntarios destaca <strong>Chloe</strong>, quien explicó que la iniciativa surgió para devolverle a John un poco de la bondad y generosidad que él siempre muestra con los demás. El patatal no solo ha dado sus frutos, sino que se ha convertido en un símbolo de unión vecinal frente al duro trabajo agrícola.<br><br><strong>PUBLICIDAD: REINAUGURACIÓN DEL RESTAURANTE Y TALLER EL PUENTE</strong><br>El conocido establecimiento <strong>El Puente</strong>, liderado por <strong>Gus Martínez</strong>, abre sus puertas con una oferta renovada. Entre sus especialidades destacan el chuletón el camino y el desayuno del viajero. Además de contar con servicio de gasolinera y zona de picnic, ofrecen un concepto único: mientras disfrutas de la comida, el equipo de mecánicos puede reparar o pintar tu vehículo en su taller integrado. Un lugar diseñado para que al viajero no le falte de nada durante su parada.<br><br><strong>MISTERIO EN SANDY: SUCESOS INEXPLICABLES</strong><br>Una serie de eventos perturbadores han tenido lugar en un páramo cercano a <strong>Sandy</strong>. Varios ciudadanos han denunciado haber despertado en mitad del campo sin recordar cómo llegaron allí. Los testimonios recogidos hablan de visiones de círculos de personas, palabras extrañas en la cabeza e incluso sospechas de rituales o intervenciones externas. Una de las afectadas relató haber despertado en un río durante lo que parecía un bautismo, mientras que otros mencionan una fuerte sensación de pérdida de memoria y malestar físico. La incertidumbre crece ante lo que algunos consideran experiencias paranormales o manipulaciones por parte de grupos fanáticos.<br><br><strong>PUBLICIDAD: MENÚ NAVIDEÑO EN HIJOS DEL ASFALTO</strong><br>El local <strong>Hijos del Asfalto</strong> celebra la llegada de las fiestas con un menú especial de temporada. Los comensales pueden disfrutar de platos como dorada a la plancha, copito de maíz o mazorca con mantequilla, sal y pimienta. Para acompañar, ofrecen su exclusivo ponche nitro navideño. El equipo aprovecha para desear unas felices fiestas y una feliz Navidad a todos sus clientes y amigos.<br><br><strong>NAVIDAD BAJO LA NIEVE EN LAS VENTURAS</strong><br>La magia del invierno ha transformado la fisonomía de la ciudad. <strong>Las Venturas</strong> ha despertado bajo un manto blanco tras una intensa nevada que coincide con el encendido de la iluminación navideña. El reportero <strong>John</strong> informó desde los campos de golf y la <strong>Plaza de Cubos</strong> sobre el espectacular ambiente, destacando la decoración con guirnaldas, árboles de Navidad y carteles luminosos que recuerdan a la estética de Times Square. Los vecinos han tomado las calles para disfrutar del paisaje y las celebraciones de Nochebuena y Año Nuevo en una ciudad que luce más brillante que nunca.",
        videoId: "kp5l0Nqsu4c",
        fecha: "4 de Diciembre del 2025"
    },
    {
        id: 3,
        programaId: 1,
        titulo: "NOTICIERO -  3ª EDICIÓN",
        descripcion: "<strong>ALERTA POR LA LLEGADA DEL KRAMPUS A LAS VENTURAS</strong><br>Bienvenidos a la tercera edición de <strong>Las Venturas News</strong>. La paz de nuestra ciudad se ha visto seriamente perturbada por la aparición de unos seres que se hacen llamar el <strong>Krampus</strong>. Según las impactantes imágenes captadas, estos individuos han sido vistos llevándose a ciudadanos como <strong>John Witcher</strong>. En una conexión directa desde la estación de autoservicio <strong>El Puente</strong>, dos de estos seres explicaron que su cometido es llevarse en su saco a los niños y adultos que se han portado mal durante el año. Manifestaron además un profundo odio hacia la figura de <strong>San Nicolás</strong>, advirtiendo a la población que se preparen y se escondan en las montañas o el campo, ya que planean entrar en los hogares esta misma noche. Los presentadores <strong>Toni Montana</strong> y <strong>Paula Ramírez</strong> recomiendan a la audiencia mantener la calma mientras se evalúan los estragos de esta inusual visita.<br><br><strong>EXCLUSIVA: LOCALIZADO PAPÁ NOEL EN LA CIUDAD</strong><br>En un giro totalmente opuesto a la noticia anterior, nuestro compañero <strong>Pau</strong> ha logrado una exclusiva mundial para <strong>Las Venturas News</strong>. Se ha localizado a <strong>Papá Noel</strong> y sus renos en un punto secreto de la ciudad. Por razones de privacidad y seguridad para su misión navideña, no se ha revelado la ubicación exacta, pero las cámaras han podido registrar el momento en que realizaban una parada técnica para comer y beber. Esta visita confirma que, a pesar de las amenazas del Krampus, el espíritu de la Navidad sigue presente en <strong>Las Venturas</strong> para aquellos que se han portado bien.<br><br><strong>PUBLICIDAD: SERVICIOS INTEGRALES EN EL PUENTE</strong><br>El establecimiento <strong>El Puente</strong>, de la mano de <strong>Antonio</strong>, ofrece una solución completa para el día a día de los vecinos. En su <strong>Badulake</strong> puedes encontrar productos básicos preparados al momento, mientras que su bar restaurante ofrece platos contundentes para recuperar fuerzas. Si el problema es mecánico, cuentan con un taller de reparaciones rápidas y un servicio de grúa que acude ante cualquier emergencia. Bajo el lema de trabajar con cariño y rapidez, <strong>El Puente</strong> se consolida como el lugar donde lo tienes todo sin moverte del sitio.<br><br><strong>ADRENALINA EN EL LAS VENTURAS ARENA: JUSTA MOTERA</strong><br>El deporte y la emoción se dieron cita el pasado martes en el <strong>Las Venturas Arena</strong>. El club <strong>Hijos del Asfalto</strong>, en colaboración con la <strong>EMS</strong>, organizó una espectacular justa motera. El reportero <strong>John</strong> cubrió el evento, donde los participantes se batieron en duelo sobre sus máquinas. <strong>Alexis</strong>, uno de los organizadores, destacó el duro trabajo realizado para que la competición fuera un éxito, mientras que espectadores como <strong>Roberto Var</strong> disfrutaron de la acción y los incidentes propios de la competición. La gran triunfadora de la jornada fue <strong>Paula Rodríguez</strong>, quien se alzó con el trofeo tras un torneo increíblemente divertido y bien organizado.<br><br><strong>PUBLICIDAD: SEGURIDAD Y ESTÉTICA EN MARTÍNEZ CAR</strong><br>Estas fiestas, el taller <strong>Martínez Car</strong> invita a todos los conductores a regalarse seguridad. Ofrecen una amplia gama de servicios que van desde cambios de look para vehículos y reparaciones generales hasta lavados profesionales. Además, cuentan con equipos especializados para rescatar camiones que hayan quedado atascados debido a las recientes nevadas. En <strong>Martínez Car</strong> ya suenan las campanas y los motores para garantizar que tu vehículo esté en perfectas condiciones durante la Navidad.",
        videoId: "t0RlxCE0HBM",
        fecha: "13 de Diciembre del 2025"
    },
    {
        id: 4,
        programaId: 1,
        titulo: "NOTICIERO -  4ª EDICIÓN",
        descripcion: "<strong>MISTERIO Y CAOS EN EL HOSPITAL DE LAS VENTURAS</strong><br>Bienvenidos a la cuarta edición de <strong>Las Venturas News</strong> con <strong>Toni Montana</strong> y <strong>Paula Ramírez</strong>. La semana comienza con un drama inexplicable ocurrido en las inmediaciones del hospital de la ciudad. Dos individuos desconocidos, completamente enmascarados y encapuchados, aparecieron en el lugar transportando a una persona que no respondía a ningún estímulo. Testigos presenciales como <strong>Nani</strong> relataron con indignación cómo estos sujetos dejaron al afectado en una cama y se negaron rotundamente a recibir cualquier tipo de asistencia médica. La situación escaló rápidamente hacia el caos cuando los enmascarados emprendieron una huida a pie, intentando robar las motocicletas de varios vecinos que se encontraban allí mismo. El incidente terminó en un estallido de violencia y persecuciones que han dejado a la comunidad sumida en el desconcierto.<br><br><strong>ACCIDENTE TRAS UN SALTO AL VACÍO EN LA CASCADA</strong><br>Lo que pretendía ser una hazaña histórica y un posible récord para la ciudad terminó en una situación de emergencia médica. Un vecino, identificado como <strong>Lolo</strong>, intentó realizar un salto extremo desde una cascada hacia aguas heladas. El impacto fue de tal magnitud que el protagonista perdió el conocimiento y tuvo que ser rescatado del agua ante la mirada atónita de los presentes, quienes cuestionaban si el saltador tenía branquias debido al tiempo que permaneció sumergido. En declaraciones posteriores, <strong>Lolo</strong> confesó no recordar nada más allá del momento en que se lanzó al vacío y sintió el golpe. Desde <strong>Las Venturas News</strong> le deseamos una pronta y completa recuperación tras este fortísimo traumatismo.<br><br><strong>SOLIDARIDAD VECINAL: RESCATE CON EL TRACTOR AMARILLO</strong><br>En una nota más positiva, una carretera secundaria del norte fue escenario de una gran muestra de apoyo mutuo. <strong>Joselito</strong>, un transportista local, sufrió un accidente con su camión al intentar esquivar a un conductor que circulaba de manera errática. El vehículo quedó atrapado en la cuneta y, para empeorar la situación, la grúa de la señorita <strong>Dana</strong> también quedó atascada al intentar el rescate. Finalmente, la situación se resolvió gracias a la intervención del reportero <strong>John</strong>, quien utilizó su tractor amarillo para liberar a ambos vehículos. Este acto altruista demuestra una vez más que los vecinos de <strong>Las Venturas</strong> no dudan en poner sus recursos personales al servicio de quien lo necesita.<br><br><strong>PUBLICIDAD: OPOSICIONES ABIERTAS EN LA PLV</strong><br>Si estás cansado de ser un espectador y quieres formar parte de la solución a los problemas de nuestra ciudad, la <strong>PLV</strong> te ofrece una oportunidad única. Las oposiciones para ingresar en el cuerpo están oficialmente abiertas. No se buscan superhéroes, sino vecinos comprometidos, con valores y con ganas de proteger lo que realmente importa. Si sientes la llamada del servicio público y quieres marcar la diferencia, da el paso y únete al cuerpo. <strong>Las Venturas</strong> te necesita para garantizar la seguridad y el bienestar de todos.<br><br><strong>FINAL DEL NOTICIERO</strong><br>Concluimos esta edición celebrando la colaboración y la valentía de nuestros ciudadanos. Gracias por elegir <strong>Las Venturas News</strong> para mantenerse informados. Nos vemos la próxima semana, donde la información vuelve a cobrar vida.",
        videoId: "40n5WYRDshk",
        fecha: "21 de Diciembre del 2025"
    },
    {
        id: 5,
        programaId: 1,
        titulo: "NOTICIERO -  5ª EDICIÓN",
        descripcion: "<strong>INAUGURACIÓN DEL UwU CAFÉ: EL NUEVO PUNTO DE ENCUENTRO GATUNO</strong><br>Bienvenidos a la primera edición de 2026 de <strong>Las Venturas News</strong> con <strong>Toni Montana</strong> y <strong>Paula Ramírez</strong>. La ciudad cuenta desde hoy con un espacio único y acogedor: el <strong>Uwu Café</strong>. Este nuevo establecimiento de temática gatuna ha abierto sus puertas bajo la dirección de <strong>Ania</strong> y <strong>Nina</strong>, quienes han puesto toda su ilusión en este proyecto. Durante la inauguración, decenas de vecinos se congregaron para disfrutar de un buen café rodeados de una decoración inspirada en gatos y un ambiente muy especial. Los asistentes destacaron la importancia de abrir locales con propuestas tan originales que dinamizan la vida social de <strong>Las Venturas</strong>, convirtiéndose en el lugar ideal para compartir buenos momentos.<br><br><strong>VANDALISMO Y TRAICIÓN: EL COCHE ROSA DE BYRON BROWN</strong><br>Una situación insólita ha marcado el regreso de las vacaciones de <strong>Byron Brown</strong>. Tras un viaje a <strong>Brasil</strong>, el propietario se encontró con su vehículo completamente pintado de color rosa y, según sus propias palabras, lleno de suciedad en su interior. Byron, visiblemente indignado, señaló a su prima como la responsable del cambio de color y a un tercer individuo por el estado higiénico del coche. El afectado, que bromeó sobre su mala suerte tras casi morir en el vuelo de regreso, expresó su frustración ante las cámaras de <strong>Las Venturas News</strong> mientras esperaba que la grúa retirara el vehículo para poder proceder a su limpieza y restauración.<br><br><strong>PUBLICIDAD: TAXIS LAS VENTURAS</strong><br>Moverse por la ciudad nunca ha sido tan fácil y seguro. <strong>Taxis Las Venturas</strong> ofrece un servicio de transporte profesional, puntual y discreto para todos los ciudadanos. Ya sea para acudir a una reunión de trabajo importante, realizar gestiones diarias o regresar a casa con total tranquilidad tras una noche fuera, nuestros conductores garantizan un trayecto cómodo y eficiente. Confía en la experiencia de <strong>Taxis Las Venturas</strong> para tus desplazamientos diarios; tu seguridad es nuestra prioridad en cada kilómetro.<br><br><strong>EL MISTERIO DE LOS CLONES: HOMENAJE A ALEX EL CATALÁN</strong><br>La ciudad ha sido testigo de una de las situaciones más curiosas y divertidas de los últimos tiempos. Un grupo de ciudadanos decidió rendir un peculiar homenaje a <strong>Alex</strong>, más conocido como <strong>El Catalán</strong>, una de las figuras más queridas de la zona. Para ello, varios vecinos se vistieron exactamente como él y adoptaron su forma de hablar, sus gestos y sus frases más míticas, como el famoso vinga vinga vinga o el juego de dónde está la bolita. Durante horas, resultó prácticamente imposible distinguir al verdadero Alex entre sus clones, quienes aseguraron tener como objetivo catalanizar toda la ciudad. Este acto, cargado de humor y cariño, ha sido recibido como una muestra de la buena sintonía que reina entre los habitantes de <strong>Las Venturas</strong>.<br><br><strong>CIERRE DEL NOTICIERO</strong><br>Con estas historias de emprendimiento, sucesos insólitos y buen humor vecinal cerramos nuestra edición de hoy. Gracias por elegir <strong>Las Venturas News</strong> para estar al tanto de todo lo que ocurre en nuestra comunidad. Les esperamos en la próxima entrega, donde la actualidad volverá a ser la protagonista. ¡Buenas noches!",
        videoId: "3NvuJmo6yAc",
        fecha: "11 de Enero del 2026"
    },
    {
        id: 6,
        programaId: 4,
        titulo: "DOCUMENTAL - EL VERDADERO ANTONIO",
        descripcion: "<strong>REPORTAJE ESPECIAL: EL VERDADERO ANTONIO</strong><br>En esta entrega especial de <strong>Las Venturas News</strong>, nos alejamos del bullicio de los titulares diarios para adentrarnos en una historia de invisibilidad, dignidad y supervivencia. <strong>Antonio</strong>, un vecino que forma parte del paisaje cotidiano de la ciudad, nos abre las puertas de su dulce morada, un rincón en la calle donde convive con otros compañeros y se calienta junto a un barril. Antonio relata que vive de la chatarra, transportando sus hallazgos en un carrito y moviéndose en su vehículo insignia, un coche de más de 70 años que compró por 50 euros y que, a pesar de no tener ITV ni lujos, es su medio de vida. Su historia es la de un niño que fue abandonado en un orfanato y que a los 9 años decidió escapar para criarse en la calle, una realidad que le ha marcado profundamente pero que no ha logrado borrar su honradez y su buen corazón.<br><br><strong>UNA VIDA BASADA EN LA HONRADEZ Y EL CARIÑO</strong><br>Para <strong>Antonio</strong>, los valores fundamentales son la sinceridad, la fidelidad y el cariño. A pesar de las dificultades y de los prejuicios de una sociedad que a menudo juzga por el envoltorio externo, él se define como una persona pobre pero honrada. Durante el reportaje, nos muestra su cotidianeidad, incluyendo su lugar de aseo: el canal de la ciudad. Aunque el agua no siempre está limpia, Antonio mantiene su rutina de higiene cuando el tiempo y las condiciones lo permiten, realizando incluso una demostración de su baño habitual con valentía frente al frío. Su filosofía de vida se basa en encontrar la felicidad a su manera, pidiendo a la gente que no sea tan superficial y que aprenda a mirar más al corazón.<br><br><strong>SOLIDARIDAD Y RECONOCIMIENTO CIUDADANO</strong><br>El impacto de <strong>Antonio</strong> en la comunidad es innegable. Durante una visita a un taller local, la encargada <strong>Dana</strong> le permite recoger piezas de una motocicleta vieja para su negocio de chatarra e incluso le ofrece comida, un gesto que Antonio recibe con profunda gratitud. Ciudadanos y conocidos definen a Antonio como un ser de luz que, a pesar de haber sufrido mucho, siempre tiene una sonrisa para los demás. Personas como <strong>Dana</strong> y otros vecinos expresan su deseo de verlo crecer y salir adelante, recordándole que en <strong>Las Venturas</strong> cuenta con una familia que está dispuesta a apoyarle sin que tenga que pedir ayuda.<br><br><strong>SUEÑOS Y RECUERDOS: LA HUMANIDAD DETRÁS DEL PERSONAJE</strong><br>El documental nos permite conocer los momentos más íntimos de <strong>Antonio</strong>. Entre sus recuerdos más felices destaca un trenecito de lata que recibió de niño, un detalle que todavía hoy le emociona hasta las lágrimas. Por otro lado, lamenta cómo la gente a menudo lo confunde con un delincuente solo por su aspecto descuidado. Su mayor sueño por cumplir es reencontrarse con la familia que le abandonó, conocer a sus padres y saber si tiene hermanos. Con este reportaje, <strong>Las Venturas News</strong> busca humanizar la información y recordar que, detrás de cada esquina de la ciudad, hay una historia que merece ser escuchada con respeto y dignidad.",
        videoId: "sL3yPfhZFzA",
        fecha: "28 de diciembre del 2025"
    }

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

    // Formato esperado: "DD de Mes del YYYY"
    const partes = fechaStr.toLowerCase().match(/(\d+)\s+de\s+(\w+)\s+del\s+(\d+)/);
    if (partes) {
        const dia = parseInt(partes[1]);
        const mes = meses[partes[2]];
        const año = parseInt(partes[3]);
        return new Date(año, mes, dia);
    }
    return new Date(); // Retornar fecha actual si no se puede parsear
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

    // Ordenar episodios según el criterio seleccionado
    episodiosFiltrados = ordenarEpisodios(episodiosFiltrados, orden);

    // Generar HTML para cada episodio
    contenedor.innerHTML = episodiosFiltrados.map((episodio, index) => `
        <a href="episodio.html?id=${episodio.id}" class="group block">
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
