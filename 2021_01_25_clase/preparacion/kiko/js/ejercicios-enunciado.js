/*EJERCICIO 1 - Comprueba qué hay en el siguiente código*/

let fruits = ["manzanas", "peras", "naranjas"];


let shoppingCart = fruits;
shoppingCart.push("platanos");

// ¿Qué hay dentro de fruits?
alert( fruits.length );

// **********************************************************************

/*
EJERCICIO 2 - Haz lo siguiente:

1.Crea un array que sea musicStyles con "Jazz" y "Blues"
2.Añádele "Rock-n-roll"
3.Cambia el valor de en medio por "Música clásica". Para encontrar el valor del medio tienes que hacer que funcione sea cual sea la longitud del array.
4.Elimina el primer valor del array
5.Añade delante del todo "Rap"
*/

// ************************************************************************

/*
EJERCICIO 3 - ¿Cuál es el resultado del siguiente código?
*/

let arr = ["a", "b"];

arr.push(function(){
    alert(this);
})

arr[2]();

// ***************************************************************************

/*
EJERCICIO 4 - Escribe la función sumInput() que:

1.Pregunte al usuario usando prompt por los valores que guardaremos en un array
2.Termina de preguntar al usuario cuando meta un valor no numerico o presione cancelar.
3.Calcula la suma de todos los valores del array.
4.El cero es un valor valido, por lo que no debes dejar de preguntar numeros si el usuario mete 0.
*/

