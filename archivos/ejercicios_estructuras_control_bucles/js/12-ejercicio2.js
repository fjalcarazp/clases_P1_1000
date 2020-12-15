'use strict'

/*
Utilizando un bucle, mostrar la media y la suma de los números introducidos por el usuario hasta 
que metamos un número negativo y en ese caso se mostraría el resultado.
*/

var numUsuario = 0;
var suma = 0;
var contador = 0;

while (numUsuario >= 0){

    // Pedir número...
   numUsuario = parseInt(prompt("Introduce un número:"));
   
   // Si numUsuario es mayor o igual a 0 hazme estas operaciones...
   if(numUsuario >= 0){
    // CONTADOR...
    contador++;

   // SUMA...
   suma += numUsuario;
   }

} 

alert("SUMA: "+suma);
alert("MEDIA: "+ (suma/contador));