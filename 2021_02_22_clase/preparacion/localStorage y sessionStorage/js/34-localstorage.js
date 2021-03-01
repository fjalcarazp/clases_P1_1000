'use strict'

// localStorage: Espacio de almacenamiento en el navegador. Un localStorage por cada página web.

// Comprobar disponibilidad del localStorage
if(typeof(Storage) !== 'undefined'){
    console.log("LocalStorage disponible");
}else{
    console.log("Incompatible con localStorage");
}

// Guardar datos en el localStorage
localStorage.setItem("titulo","Clase de JavaScript");

// Recuperar elemento
document.querySelector("#datos1").innerHTML = localStorage.getItem("titulo");

// Guardar objetos en el localStorage
var usuario = {
    nombre: "Ana",
    email: "ana.asturias@gmail.com",
    web: "www.anagutierrez.com"
};

// localStorage.setItem("usuario", usuario); // Esto está mal
localStorage.setItem("usuario", JSON.stringify(usuario)); // Transformar objeto a cadena de texto JSON

// Recuperar objeto
// console.log(localStorage.getItem("usuario")); // Esto recupera el string no el objeto
var userjs = JSON.parse(localStorage.getItem("usuario"));

console.log(userjs);
document.querySelector("#datos2").append(userjs.web+" - "+userjs.nombre);

// Eliminar elemento del localStorage
localStorage.removeItem("usuario");

// Vaciar todo el localStorage
localStorage.clear();


