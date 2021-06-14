/* Se encarga de cargar la preferencia de luminosidad (si el modo
    oscuro está disponible) y el ancho del menú movil. */

let estilosPorDefectoActivados = localStorage.getItem("estilosPorDefecto");
if (estilosPorDefectoActivados != null) {
    if (estilosPorDefectoActivados == "false") {
        cambiarEstilosDeElementos(true, false);
        deslizarElSwitch(true, false);
    }
}

let anchoDelMenuGuardado = localStorage.getItem("anchoDelMenu");
if (anchoDelMenuGuardado != null) {
    modificarAnchoDelMenu(anchoDelMenuGuardado);
}