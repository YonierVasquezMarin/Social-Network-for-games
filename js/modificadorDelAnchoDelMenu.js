const bodyElement = document.body;
const zonaDelMenu = document.querySelector('#menu');
const barraDeslizante = document.querySelector('#barraDeslizante');

//Evitar un error del cursor
bodyElement.addEventListener('mousedown', (event) => {
    event.preventDefault();
});

//Captar cuando el mouse es soltado
var mouseLevantado = false;
bodyElement.addEventListener('mouseup', () => {
    mouseLevantado = true;
});

//Ejecutar cuando se da click sostenido
barraDeslizante.addEventListener('mousedown', modificarAnchoDelMenu);

function modificarAnchoDelMenu() {
    mouseLevantado = false;
    bodyElement.addEventListener('mousemove', (event) => {
        let posicionMouseX = event.pageX;
        if(mouseLevantado) {
            event.preventDefault();
        } else {
            if(posicionMouseX >= 245 && posicionMouseX <= 446) {
                zonaDelMenu.style = `width: ${posicionMouseX}px;`;
            }
        }
    });
}