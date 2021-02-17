/*
2 - Crea un botón que cuando lo pulses se oculte a él mismo.
*/

function ocultaElemento(){
    this.style.display = "none";
}

document.querySelector("#button1").addEventListener("click", ocultaElemento);