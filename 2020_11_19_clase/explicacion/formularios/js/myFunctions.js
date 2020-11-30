'use strict'

const bondad = document.querySelector("#bondad");
const bondadOutput = document.querySelector(".bondad-output");
const rangoDinero = document.querySelector("#rangoDinero");
const dineroMin = document.querySelector("#dineroMin");
const dineroFin = document.querySelector("#dineroFin");

function valoraBondad(){
    //bondadOutput.textContent = bondad.value+"%";
    bondadOutput.value = bondad.value+"%";
}

function valoraDinero(){
    dineroFin.value = parseInt(rangoDinero.value)+parseInt(dineroMin.value);
}

bondad.addEventListener("input", valoraBondad);
rangoDinero.addEventListener("input",valoraDinero);



