'use strict'


// ***** Función sin parámetros *****
console.log("***** FUNCIÓN SIN PARÁMETROS *****");

//Antes
console.log("*** ANTES ***");

var saludo1 = function () {
    return 'Hola a tod@s';
};
console.log( saludo1() ); //Imprime Hola a tod@s

//Ahora
console.log("*** AHORA ***");

let saludo2 = () => `Hola a tod@s`;
console.log( saludo2() ); //Imprime Hola a tod@s


console.log("\n");


// ***** Función de un solo parámetro *****
console.log("***** FUNCIÓN DE UN SOLO PARÁMETRO *****");

//Antes
console.log("*** ANTES ***");

var saludo3 = function (nombre) {
    return 'Hola ' + nombre;
  };
  console.log( saludo3('Jonathan') ); //Imprime Hola Jonathan

//Ahora
console.log("*** AHORA ***");

let saludo4 = nombre => `Hola ${nombre}`;
console.log( saludo4('Jonathan') ); //Imprime Hola Jonathan


console.log("\n");


// ***** Función de varios parámetros *****
console.log("***** FUNCIÓN DE VARIOS PARÁMETROS *****");

//Antes
console.log("*** ANTES ***");

var sumar1 = function (a, b) {
    return a + b;
  };
  console.log( sumar1(10, 9) ); //Imprime 19

//Ahora
console.log("*** AHORA ***");

let sumar2 = (a, b) => a + b;
console.log( sumar2(10, 9) ); //Imprime 19


