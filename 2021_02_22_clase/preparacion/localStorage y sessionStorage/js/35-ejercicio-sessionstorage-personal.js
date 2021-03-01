'use strict'

var formularioAdd = document.querySelector("#formAddPeliculas");
var formularioDelete = document.querySelector("#formDeletePeliculas")


formularioAdd.addEventListener("submit", function(){
    let titulo = document.querySelector("#addpelicula").value;
    if(titulo.length >= 1){
        sessionStorage.setItem(titulo, titulo);
    }
    
});

formularioDelete.addEventListener("submit", function(){
    let titulo = document.querySelector("#borrarpelicula").value;
    if(titulo.length >= 1){
        sessionStorage.removeItem(titulo);
    }
});

window.onload = function(){
    // Actualizar peliculas en el html
    let ul = document.querySelector("#peliculas ul");
    for (let i = 0; i < sessionStorage.length; i++) {
        let key = sessionStorage.key(i);
        let value = sessionStorage[key];
        let li = document.createElement("li");
        li.innerHTML = value;
        ul.append(li);
    }
};