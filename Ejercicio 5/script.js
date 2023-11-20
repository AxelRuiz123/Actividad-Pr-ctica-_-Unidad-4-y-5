window.onload = function () {
    var imagenPlaneta = document.getElementById('imagenPlaneta');
    var descripcion = document.getElementById('descripcion');

    // Mostrar imagen del sistema solar por defecto
    imagenPlaneta.src = 'sistema_solar.png';

    function cambiarImagen(rutaImagen, descripcionTexto) {
        imagenPlaneta.src = rutaImagen;
        descripcion.innerHTML = descripcionTexto;
    }

    function restaurarFondo() {
        imagenPlaneta.src = 'sistema_solar.png';
        descripcion.innerHTML = '';
    }

    function asignarEventos(planetaId, imagen, descripcionTexto) {
        var planetaElement = document.getElementById(planetaId);
        planetaElement.onmouseover = function () {
            cambiarImagen(imagen, descripcionTexto);
        };
        planetaElement.onmouseout = function () {
            restaurarFondo();
        };
    }

    // Asignar eventos a cada planeta
    asignarEventos("sol", 'sol.jpg', 'El Sol es una estrella que proporciona luz y energía a nuestro sistema solar.');
    asignarEventos("mercurio", 'mercurio.jpg', 'Mercurio es el planeta más cercano al Sol y el más pequeño del sistema solar.');
    asignarEventos("venus", 'venus.jpg', 'Venus es conocido como el planeta gemelo de la Tierra debido a su tamaño similar.');
    asignarEventos("tierra", 'tierra.jpg', 'La Tierra es el único planeta conocido en el sistema solar que alberga vida.');
    asignarEventos("marte", 'marte.jpg', 'Marte es conocido como el "planeta rojo" debido a su color característico.');
    asignarEventos("jupiter", 'jupiter.png', 'Júpiter es el planeta más grande del sistema solar y es conocido por su gran mancha roja.');
    asignarEventos("saturno", 'saturno.jpg', 'Saturno es conocido por sus impresionantes anillos que lo rodean.');
    asignarEventos("urano", 'urano.jpg', 'Urano es un planeta gigante y gira de lado en comparación con otros planetas.');
    asignarEventos("neptuno", 'neptuno.jpg', 'Neptuno es un gigante de hielo y tiene una gran mancha oscura en su atmósfera.');
};
