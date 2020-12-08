'use strict'

/*
Mostrar todos los números divisores de un número introducido en un prompt
*/

//Recoger un número de un prompt...
var numero = parseInt(prompt("Elige un número para hayar los divisores"));

document.write("<h1>Estos números son divisores de "+numero+"</h1>");
for (let i = numero; i >= 1; i--) {
    
    //Si "i" es divisor de "numero" se muestra...
    if(numero%i == 0){
        document.write("<p>"+i+"</p>");
    }

    
}