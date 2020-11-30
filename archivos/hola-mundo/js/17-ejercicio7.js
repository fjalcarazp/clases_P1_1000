/*
Tabla de multiplicar de un número introducido por pantalla
*/

// Introducción de número por pantalla...
var numero = parseInt(prompt("Haya la tabla de multiplicar de un número"), 0);

document.write("<h1>TABLA DE MULTIPLICAR</h1>");

// Cálculo de la tabla de multiplicar...
for (let i = 0; i <= 10; i++) {
    document.write(numero +" x "+i+" = "+numero*i+"<br>");
}