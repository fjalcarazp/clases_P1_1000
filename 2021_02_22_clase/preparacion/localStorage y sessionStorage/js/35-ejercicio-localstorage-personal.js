'use strict'

var formularioAdd = document.querySelector("#formAddPeliculas");
var formularioDelete = document.querySelector("#formDeletePeliculas");


formularioAdd.addEventListener("submit", function(){
    let titulo = document.querySelector("#addpelicula").value;
    if(titulo.length >= 1){
        localStorage.setItem(titulo, titulo);
    }
    
});

formularioDelete.addEventListener("submit", function(){
    let titulo = document.querySelector("#borrarpelicula").value;
    if(titulo.length >= 1){
        localStorage.removeItem(titulo);
    }
});

window.onload = function(){
    // Actualizar peliculas en el html
    let ul = document.querySelector("#peliculas ul");
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let value = localStorage[key];
        let li = document.createElement("li");
        li.innerHTML = value;
        ul.append(li);
    }
};