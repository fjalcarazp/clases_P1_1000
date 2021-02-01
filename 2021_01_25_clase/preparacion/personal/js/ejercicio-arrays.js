'use strict'
// NOTA: EJERCICIOS REALIZADOS A MI MANERA NO COMO EN EL VIDEO

/*
1. Pida 6 números por pantalla y los meta en un array
2. Mostrar el array entero (todos sus elementos) en el cuerpo de la página y en la consola
3. Ordenarlo y mostrarlo.
4. Invertir su orden y mostrarlo.
5. Mostrar cuántos elementos tiene el array.
6. Búsqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice
*/

// 1. Pida 6 números por pantalla y los meta en un array
let numArray = [];

while (numArray.length != 6) {
    numArray.push(parseInt(prompt("Introduzca un número")));
}

// 2. Mostrar el array entero (todos sus elementos) en el cuerpo de la página y en la consola

// numArray.forEach(element => {
//     document.write(element +"<br>");
//     console.log(element);
// });

// 3. Ordenarlo y mostrarlo.
// numArray.sort();
// numArray.forEach(element => {
//     document.write(element +"<br>");
//     console.log(element);
// });

// 4. Invertir su orden y mostrarlo.
// numArray.reverse();
// numArray.forEach(element => {
//     document.write(element +"<br>");
//     console.log(element);
// });


// 5. Mostrar cuántos elementos tiene el array.
// document.write(`<p>El array tiene ${numArray.length} elementos</p>`);

// 6. Búsqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice
let elementIndex = numArray.indexOf(parseInt(prompt("Busque un elemento en el array")));

if(elementIndex == -1){
    alert("No se encuentra el elemento en el array"); 
}else{
    alert("El indice del elemento es "+elementIndex);
}

