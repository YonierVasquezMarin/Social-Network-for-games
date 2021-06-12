const switchDeLuminosidad = document.querySelector('#switchDeLuminosidad');
const iconoIndicador = document.querySelector('#iconoIndicador');
const imagenIndicadora = document.querySelector('#imagenIconoIndicador');

let coloresPorDefecto = true;
switchDeLuminosidad.addEventListener('click', () => {
    if(coloresPorDefecto) {
        //Activar modo oscuro
        iconoIndicador.style = "left: 42px;";//Desliza el switch
        imagenIndicadora.style = 'content: url("../imgs/icons/switch/icon-luna.svg");';
        coloresPorDefecto = false;
        cambiarColoresDeElementos();
    } else {
        //Activar colores por defecto
        iconoIndicador.style = "left: 0px;";
        imagenIndicadora.style = 'content: url("../imgs/icons/switch/icon-sol.svg");';
        coloresPorDefecto = true;
        cambiarColoresDeElementos();
    }
});

/**
 * Cambia los colores de algunos elementos de la página.
 * Cambia de su color por defecto a un color más oscuro y
 * viceversa.
 */
function cambiarColoresDeElementos() {
    const elementosParaModificarSuFondo = [
        {
            id: "#main",
            colorPorDefecto: "white",
            colorEnModoOscuro: "#363434"
        }
    ];

    elementosParaModificarSuFondo.forEach((elementoDeLaLista) => {
        let elementoAModificar = document.querySelector(elementoDeLaLista.id);
        elementoAModificar.style = `transition: background-color 1s linear;
            background-color: ${coloresPorDefecto ? elementoDeLaLista.colorPorDefecto: elementoDeLaLista.colorEnModoOscuro};`;
    });
}