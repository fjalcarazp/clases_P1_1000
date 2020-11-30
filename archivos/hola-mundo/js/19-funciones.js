'use strict'

// Funciones
// Una función es una agrupación reutilizable de un conjunto de instrucciones

function calculadora(numero1, numero2){

    console.log("Suma: "+ (numero1+numero2));
    console.log("*************************")
    // return "Hola soy la calculadora!!";
}


for (let i = 0; i <= 10; i++) {
    console.log(i);
    calculadora(i, 8);
}

