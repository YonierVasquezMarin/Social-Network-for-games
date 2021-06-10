const bodyElement = document.body;
const zonaDelMenu = document.querySelector('#menu');
const barraDeslizante = document.querySelector('#barraDeslizante');

//Evitar un error del cursor
bodyElement.addEventListener('mousedown', (event) => {
    event.preventDefault();
});

//Conocer constantemente la ubicación X del cursor en la página
var ubicacionCursorX = 0;
bodyElement.addEventListener('mousemove', (eventMouseMove) => {
    ubicacionCursorX = eventMouseMove.pageX;
});

//Ejecutar cuando se da click sostenido
barraDeslizante.addEventListener('mousedown', modificarAnchoDelMenu);

function modificarAnchoDelMenu(event) {
    document.body.addEventListener('mousemove', (eventM) => {
        zonaDelMenu.style = `width: ${eventM.pageX}px;`
    });
}