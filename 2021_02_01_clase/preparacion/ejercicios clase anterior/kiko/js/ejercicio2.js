/*
2 - Haz lo siguiente:

1.Crea un array que sea musicStyles con "Jazz" y "Blues"
2.Añádele "Rock-n-roll"
3.Cambia el valor de en medio por "Música clásica". Para encontrar el valor del medio tienes que hacer que funcione sea cual sea la longitud del array.
4.Elimina el primer valor del array
5.Añade delante del todo "Rap"
*/

// PRIMERO
let musicStyles = ["Jazz", "Blues"];

// SEGUNDO
musicStyles.push("Rock-n-roll");

// TERCERO
let indexMiddle = Math.ceil(musicStyles.length/2 - 1);

musicStyles[indexMiddle] = "Música clásica";

// CUARTO
musicStyles.shift();

// QUINTO
musicStyles.push("Rap");


