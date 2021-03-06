/**
 * Retorna si el sitio tiene los estilos por defecto.
 * @returns {Boolean} si tiene los estilos por defecto
 * retorna true, si no (porque tiene el modo oscuro activado)
 * retorna false.
 */
function estanLosEstilosPorDefecto() {
    let estanLosEstilosPorDefecto = localStorage.getItem("estilosPorDefecto");
    if(estanLosEstilosPorDefecto == null) {
        return true;
    } else {
        let estado = (estanLosEstilosPorDefecto=="true");
        if(estado) {
            return true;
        } else {
            return false;
        }
    }
}

/**
 * Revisa en el localStorage el si los estilos por defecto
 * están activados. Si están activados los pone en false, de 
 * lo contrario los pone true.
 */
function cambiarPreferenciaDeEstilos() {
    if(this.estanLosEstilosPorDefecto()) {
        localStorage.setItem("estilosPorDefecto", "false");
    } else {
        localStorage.setItem("estilosPorDefecto", "true");
    }
}

/**
 * Desliza el switch hacia la derecha o hacia la izquierda
 * según su posición actual.
 * @param {Boolean} deslizarHaciaLaDerecha Si esto es true el
 * switch se desliza hacia la derecha, y si es false se desliza
 * hacia la izquierda.
 * @param {Boolean} deslizarConTransicion Si esto es true, el
 * switch se desliza suavemente usando una transicion, si es
 * false se desliza inmediatamente sin transicion.
 */
function deslizarElSwitch(deslizarHaciaLaDerecha, deslizarConTransicion) {
    let tTransicionDelSwitch = "";
    if (deslizarConTransicion) {
        tTransicionDelSwitch = "transition: left .4s ease;";
    }
    const iconoIndicador = document.querySelector('#contenedorDelBoton');
    const imagenIndicadora = document.querySelector('#iconoDeEstadoDelSwitch');
    if (deslizarHaciaLaDerecha) {
        iconoIndicador.style = `left: 51px;${tTransicionDelSwitch}`;
        imagenIndicadora.style = 'content: url("../imgs/icons/switch/icon-luna.svg");';
    } else {
        iconoIndicador.style = `left: 0px;${tTransicionDelSwitch}`;
        imagenIndicadora.style = 'content: url("../imgs/icons/switch/icon-sol.svg");';
    }
}

/**
 * Cambia los estilos de algunos elementos de la página.
 * Cambia sus estilos por defecto a unos estilos más oscuros, y
 * si están los estilos oscuros activados estos son cambiados
 * a sus estilos por defecto.
 * @param {boolean} estanLosEstilosPorDefecto Es el estado de los estilos
 * del sitio. Si el sitio tiene sus estilos por defecto esto es
 * true, si los estilos están en oscuros esto es false.
 * @param {boolean} hacerCambiosConTransicion Si esto está en true, todos
 * los cambios suceden suavemente usando una transición.
 */
function cambiarEstilosDeElementos(estanLosEstilosPorDefecto, hacerCambiosConTransicion) {
    /**
     * Retorna si el objeto hace referencia a un unico elemento.
     * @param {Object} datosDelElemento Es un objeto que contiene
     * el id de un HTMLelement (o la clase), y los estilos del modo
     * oscuro.
     * @returns {Boolean} Retorna true si el objeto del parametro
     * hace referencia a un unico elemento, y retorna false si hace
     * referencia a multiples elementos (significa que el id de ese
     * elemento es una clase).
     */
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
            id: '#menu',
            estilosDelModoOscuro: 'background-color: #363434;'
        },
        {
            id: '.botonesDelMenu',
            estilosDelModoOscuro: 'border: 1px solid wheat;background-color: wheat;'
        },
        {
            id: '#btnCerrarMenu',
            estilosDelModoOscuro: 'background-color: #363434;'
        }
    ];

    let tTransicionDeLosElementos = "";
    if (hacerCambiosConTransicion) {
        tTransicionDeLosElementos = "transition: background-color 1s linear;";
    }

    elementosParaModificarSusEstilos.forEach( (elementoDeLaLista) => {
        if(haceReferenciaAUnUnicoElemento(elementoDeLaLista)) {
            let elemento = document.querySelector(elementoDeLaLista.id);
            elemento.style = `${tTransicionDeLosElementos}${estanLosEstilosPorDefecto?elementoDeLaLista.estilosDelModoOscuro:""}`;
        } else {
            let elementosDeLaClase = document.querySelectorAll(elementoDeLaLista.id);
            elementosDeLaClase.forEach( (elemento) => {
                elemento.style = `${tTransicionDeLosElementos}${estanLosEstilosPorDefecto?elementoDeLaLista.estilosDelModoOscuro:""}`;
            });
        }
    });
}

const switchDeLuminosidad = document.querySelector('#switch');
switchDeLuminosidad.addEventListener('click', () => {
    let estadoDeEstilosPorDefecto = estanLosEstilosPorDefecto();
    if(estadoDeEstilosPorDefecto) {
        //Activar modo oscuro
        deslizarElSwitch(true,true);
    } else {
        //Activar colores por defecto
        deslizarElSwitch(false,true);
    }
    cambiarEstilosDeElementos(estadoDeEstilosPorDefecto, true);
    cambiarPreferenciaDeEstilos();
});