let frutas = ["plátano","naranja", "manzana","pera","uvas"];

//console.log(frutas);

//Eliminar el último elemento del array
//frutas.pop();


//Eliminar el primer elemento del array
//frutas.shift();


//Encontrar un elemento en el array
// let indiceArray = frutas.indexOf("manzana");
// console.log(frutas[indiceArray]);


//Clonar array

let copiaFrutas = frutas.slice();

frutas.pop();


console.log(frutas);
console.log(copiaFrutas);