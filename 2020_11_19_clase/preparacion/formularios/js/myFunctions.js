'use strict'

const bondad = document.querySelector('#bondad');
const bondadOutput = document.querySelector('.bondad-output');
const dineroFin = document.querySelector("#dineroFin");
const rangoDinero = document.querySelector("#rangoDinero"); 
const dineroMin = document.querySelector("#dineroMin");

function valoraBondad(){
    bondadOutput.textContent = bondad.value;
    
    /*
    https://developer.mozilla.org/es/docs/Web/API/Node/textContent#Diferencias_con_innerHTML
    
    //Es parecido que hacer lo siguiente:
        document.querySelector('.bondad-output').innerHTML = document.querySelector('#bondad').value;
    */ 
}

function valoraDinero(){
    dineroFin.value=parseInt(rangoDinero.value)+parseInt(dineroMin.value);
}

bondad.addEventListener('input', valoraBondad);
rangoDinero.addEventListener('input', valoraDinero);

