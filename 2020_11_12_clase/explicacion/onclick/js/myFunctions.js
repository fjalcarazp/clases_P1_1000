'use strict'

document.querySelector("#img-harry").addEventListener("click", cambiaImagen);
document.querySelector("#btn-recargar").addEventListener("click", recargar);

function cambiaImagen(){
    document.querySelector("#img-harry").src = "img/harry_potter_first_wand.gif";
    document.querySelector("#img-harry").title = "Toma tu varita!!!";
}

function recargar(){
    location.reload();
}
