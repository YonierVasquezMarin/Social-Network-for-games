/**
 * Cambia el ancho del menu usando como valor el parámetro de la
 * función.
 * @param {String} ancho Es el nuevo ancho que va a tener el menu.
 */
 function modificarAnchoDelMenu(ancho) {
    const zonaDelMenu = document.querySelector('#menu');
    zonaDelMenu.style = `width: ${ancho}px;`;
}

const bodyElement = document.body;
//Evitar un error del cursor
bodyElement.addEventListener('mousedown', (event) => {
    event.preventDefault();
});
//Captar cuando el mouse es soltado
var mouseLevantado = false;
var nuevoAnchorDelMenu = "400";//por defecto tiene su ancho
bodyElement.addEventListener('mouseup', () => {
    mouseLevantado = true;
    localStorage.setItem("anchoDelMenu", nuevoAnchorDelMenu);
});

//Ejecutar cuando se da click sostenido
const barraDeslizante = document.querySelector('#barraDeslizante');
barraDeslizante.addEventListener('mousedown', () => {
    mouseLevantado = false;
    bodyElement.addEventListener('mousemove', (event) => {
        let posicionMouseEjeX = event.pageX;
        if(mouseLevantado) {
            event.preventDefault();
        } else {
            if(posicionMouseEjeX >= 245 && posicionMouseEjeX <= 500) {
                modificarAnchoDelMenu(posicionMouseEjeX.toString());
                nuevoAnchorDelMenu = posicionMouseEjeX.toString();
            }
        }
    });
});