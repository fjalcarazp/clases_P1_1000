'use strict'

/*
Que nos diga si un número es par o impar. Tiene que tener ventana prompt. Si el número no es válido que nos pida de nuevo el número.
*/

// Mostrar por prompt y comprobar que sea válido...
do {
    var numero = parseInt(prompt("Introduzca un número válido:"));
} while (isNaN(numero));

// Comprobar si es par o impar...
if(numero%2 == 0){
    // PAR...
    document.write("<p>El número "+numero+" es PAR</p>");
}else{
    // IMPAR...
    document.write("<p>El número "+numero+" es IMPAR</p>");
}



