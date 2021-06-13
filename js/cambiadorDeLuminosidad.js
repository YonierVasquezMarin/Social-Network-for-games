const switchDeLuminosidad = document.querySelector('#switchDeLuminosidad');
const iconoIndicador = document.querySelector('#iconoIndicador');
const imagenIndicadora = document.querySelector('#imagenIconoIndicador');

let coloresPorDefecto = true;
switchDeLuminosidad.addEventListener('click', () => {
    if(coloresPorDefecto) {
        //Activar modo oscuro
        iconoIndicador.style = "left: 42px;";//Desliza el switch
        imagenIndicadora.style = 'content: url("../imgs/icons/switch/icon-luna.svg");';
        cambiarEstilosDeElementos();
        coloresPorDefecto = false;
    } else {
        //Activar colores por defecto
        iconoIndicador.style = "left: 0px;";
        imagenIndicadora.style = 'content: url("../imgs/icons/switch/icon-sol.svg");';
        cambiarEstilosDeElementos();
        coloresPorDefecto = true;
    }
});



/**
 * Cambia los colores de algunos elementos de la página.
 * Cambia de su color por defecto a un color más oscuro y
 * viceversa.
 */
function cambiarEstilosDeElementos() {

    function haceReferenciaAUnUnicoElemento(datosDelElemento) {
        if(datosDelElemento.id[0]=='#') {
            return true;
        }
        return false;
    }

    const elementosParaModificarSusEstilos = [
        {
            id: '#main',
            estilosDelModoOscuro: 'background-color: #363434;'
        },
        {
            id: '#contenedorDelSwitch',
            estilosDelModoOscuro: 'border-bottom: 1px solid white;'
        },
        {
            id: '.botonesDelMenu',
            estilosDelModoOscuro: 'border: 1px solid wheat;background-color: wheat;'
        }
    ];

    if(coloresPorDefecto) {
        //Cambiar a estilos del modo oscuro
        elementosParaModificarSusEstilos.forEach( (elementoDeLaLista) => {
            if(haceReferenciaAUnUnicoElemento(elementoDeLaLista)) {
                let elemento = document.querySelector(elementoDeLaLista.id);
                elemento.style = 'transition: all 1s linear;'+elementoDeLaLista.estilosDelModoOscuro;
            } else {
                let elementosDeLaClase = document.querySelectorAll(elementoDeLaLista.id);
                elementosDeLaClase.forEach( (elemento) => {
                    elemento.style = 'transition: all 1s linear;'+elementoDeLaLista.estilosDelModoOscuro;
                });
            }
        });
    } else {
        //Cambiar a los estilos por defecto
        elementosParaModificarSusEstilos.forEach( (elementoDeLaLista) => {
            if(haceReferenciaAUnUnicoElemento(elementoDeLaLista)) {
                let elemento = document.querySelector(elementoDeLaLista.id);
                elemento.style = 'transition: all 1s linear;';
            } else {
                let elementosDeLaClase = document.querySelectorAll(elementoDeLaLista.id);
                elementosDeLaClase.forEach( (elemento) => {
                    elemento.style = 'transition: all 1s linear;';
                });
            }
        });
    }
}