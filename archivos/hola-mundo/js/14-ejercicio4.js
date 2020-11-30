'use strict'

/*
Mostrar todos los números impares que hay entre dos números introducidos por el usuario
*/

//PRIMERA POSIBILIDAD: FOR
/*
var num1 = parseInt(prompt("DESDE:"), 0);
var num2 = parseInt(prompt("HASTA:"), 0);

document.write("<h2>Estos son los números impares que hay entre "+num1+" y "+num2+"</h2>");

for (let i = num1; i < num2; i++) {
    //Si el número de la iteración es impar lo mostramos...
    if(i%2 != 0){
        document.write("<p>"+ i +"</p>");
    }
}
*/

//SEGUNDA POSIBILIDAD: WHILE
var num1 = parseInt(prompt("DESDE:"), 0);
var num2 = parseInt(prompt("HASTA:"), 0);

while (num1 < num2) {
    //Si num1 es impar lo mostramos...
    if(num1%2 != 0){
        document.write("<p>"+num1+"</p>");
    }

    num1++;
}

