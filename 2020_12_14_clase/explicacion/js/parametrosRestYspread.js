'use strict'

// Parámetros REST

// function listadoFrutas(fruta1, fruta2, ...resto_de_frutas){

//     console.log("Primera fruta: "+fruta1);
//     console.log("Segunda fruta: "+fruta2);
//     console.log("Resto de frutas: "+resto_de_frutas);
// }



// PARÁMETROS SPREAD
function listadoFrutas(fruta1, fruta2, fruta3, ...resto_de_frutas){

    console.log("Primera fruta: "+fruta1);
    console.log("Segunda fruta: "+fruta2);
    console.log("Tercera fruta: "+fruta3);
    console.log("Resto de frutas: "+resto_de_frutas);
}

let frutas = ["Naranjas", "Plátanos","Guanava"];

listadoFrutas(...frutas, "Peras", "Manzanas", "Uvas", "Sandía");
// listadoFrutas("Naranjas", "Plátanos", "Manzanas", "Uvas", "Sandía");




