'use strict'

/*
Hacer un programa que muestre todos los números entre dos números introducidos
por el usuario.
*/

// Número 1
var num1 = parseInt(prompt("DESDE:", 0))

// Número 2
var num2 = parseInt(prompt("HASTA:", 0))


document.write("<h2>RESULTADO: <h2> <br>")
for (let i = num1+1; i < num2; i++) {
    document.write(i+"<br>");
    //console.log(i);
}

