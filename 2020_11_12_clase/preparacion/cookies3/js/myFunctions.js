document.querySelector("#verTodas").addEventListener("click", verTodas);
document.querySelector("#crearCookie1").addEventListener("click", crearCookie);
document.querySelector("#crearCookie2").addEventListener("click", crearCookie);
document.querySelector("#borrarCookie1").addEventListener("click", borrarCookie);
document.querySelector("#borrarCookie2").addEventListener("click", borrarCookie);
document.querySelector("#rellenarForm").addEventListener("click", rellenaCampos);

function verTodas(){
    alert(document.cookie);
}

function crearCookie(e){
    if(!e){
        e = window.event;
    }

    if(e.target.id == "crearCookie1"){
        document.cookie = "nombre = Harry Potter"
    }else if(e.target.id == "crearCookie2"){
        document.cookie = "genero = No binario";
    }
}

function borrarCookie(e){
    if(!e){
        e = window.event;
    }

    if(e.target.id == "borrarCookie1"){
        document.cookie = "nombre =; expires=Thu 01 Jan 1970 00:00:01 UTC";
    }else if(e.target.id == "borrarCookie2"){
        document.cookie = "genero =; expires=Thu 01 Jan 1970 00:00:01 UTC";
    }
}

//https://aprende-web.net/javascript/js14_2.php
/*Nota: con 'use strict' esta función peta*/
function leerCookie(nombre) {
    var lista = document.cookie.split(";");
    for (i in lista) {
        var busca = lista[i].search(nombre);
        if (busca > -1) {micookie=lista[i]}
        }
    var igual = micookie.indexOf("=");
    var valor = micookie.substring(igual+1);
    return valor;
}

function rellenaCampos(){
    let cookieNombre = leerCookie('nombre');
    let cookieGenero = leerCookie('genero');

    document.querySelector("#input-nombre").value = cookieNombre;
    document.querySelector("#input-genero").value = cookieGenero;
}
