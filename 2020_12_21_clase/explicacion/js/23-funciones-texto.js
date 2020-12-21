'use strict'

// Transformacion de textos
var numero = 444;
var texto1 = "Bienvenido a esta clase de javaScript";
var texto2 = "es muy buena clase";

var dato = numero.toString(); // pasar a string
    dato = texto1.toLowerCase(); // transformar en minúsculas
    dato = texto2.toUpperCase(); // transformar en mayúsculas
// console.log(dato);


// Calcular longitud
var nombre = "Ana Jiménez";

// console.log(nombre.length);

//Concatenar - Unir textos

// var textoTotal = texto1+" "+texto2;
var textoTotal = texto1.concat(" "+texto2);

console.log(textoTotal);