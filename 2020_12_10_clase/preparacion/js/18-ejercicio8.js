'use strict'

/*
Hacer una calculadora que pida dos números por pantalla.
Si metemos uno mal que nos los vuelva a pedir.
En el cuerpo de la página, en una alerta y por la consola el resultado
de sumar, restar, multiplicar y dividir esas dos cifras.
*/

// Solicitar los números...
do {
    var num1 = parseInt(prompt("Introduzca el primer número", 0));
    var num2 = parseInt(prompt("Introduzca el segundo número", 0));
} while (isNaN(num1) || isNaN(num2) || num1 < 0 || num2 < 0);

// Mostrar resultados en la página...
document.write("RESULTADO DE LAS OPERACIONES: <br>");
document.write(num1+"+"+num2+" = "+num1+num2+"<br>");
document.write(num1+"-"+num2+" = "+num1-num2+"<br>");
document.write(num1+"x"+num2+" = "+num1*num2+"<br>");
document.write(num1+":"+num2+" = "+num1/num2+"<br>");

// Mostrar resultados por consola...
console.log(num1+"+"+num2+" = "+num1+num2);
console.log(num1+"-"+num2+" = "+num1-num2);
console.log(num1+"x"+num2+" = "+num1*num2);
console.log(num1+":"+num2+" = "+num1/num2);

/*
CORRECCIÓN: Es más elegante introducir el resultado de todas las operaciones
en una variable y mostrar esa variable por pantalla.
*/

