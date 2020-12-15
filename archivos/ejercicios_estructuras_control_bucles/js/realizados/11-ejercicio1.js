'use strict'

/*
Hacer un programa que nos pida dos números y que nos diga cuál es el mayor, el menor y si son iguales.
Si el usuario introduce valores no numéricos o valor 0 nos lo vuelva a pedir.
*/

// Entrada de datos...
do{
    var num1 = parseInt(prompt("Introduce el primer número"));
    var num2 = parseInt(prompt("Introduce el segundo número"));
}while(isNaN(num1) || isNaN(num2) || num1<=0 || num2<=0)


// Salida de datos...
if(num1 > num2){
    alert("El número "+num1+" es mayor que "+num2);
}else if(num1 < num2){
    alert("El número "+num1+" es menor que "+num2);
}else if(num1 == num2){
    alert("El número "+num1+" es igual que "+num2);
}else{
    alert("Introduce números correctos");
}