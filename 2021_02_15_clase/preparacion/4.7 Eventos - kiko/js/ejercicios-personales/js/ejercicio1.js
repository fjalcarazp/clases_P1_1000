/*
1 - Crea un div con id="text" y pon un botón que cuando lo pulses se oculte el div.
*/

function ocultarDiv(){
    let div = document.querySelector("#text");
    div.style.display = "none";
}

let button1 = document.querySelector("#button1");

button1.addEventListener("click", ocultarDiv);

