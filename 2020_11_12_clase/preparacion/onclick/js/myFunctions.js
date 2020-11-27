'use strict'

function elegirVarita(){
    document.querySelector("#img-harry-ollivander").src = "img/harry_potter_first_wand.gif";
    document.querySelector("#img-harry-ollivander").title = "¡Ahí va la hostia!";
}

function irAtras(){
    location.reload();
}

document.querySelector("#img-harry-ollivander").onclick = elegirVarita;
document.querySelector("#btn-volver").onclick = irAtras;