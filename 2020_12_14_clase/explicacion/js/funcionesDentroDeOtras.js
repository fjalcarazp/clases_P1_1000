'use strict'

function muestraPorConsola(numero1, numero2){
    console.log("SUMA: "+ (numero1+numero2));
    console.log("RESTA: "+ (numero1-numero2));
    console.log("MULTIPLICACIÓN: "+ (numero1*numero2));
    console.log("DIVISIÓN: "+ (numero1/numero2));
}


function muestraPorPantalla(numero1, numero2){
    document.write("SUMA: "+ (numero1+numero2)+"<br>");
    document.write("RESTA: "+ (numero1-numero2)+"<br>");
    document.write("MULTIPLICACIÓN: "+ (numero1*numero2)+"<br>");
    document.write("DIVISIÓN: "+ (numero1/numero2)+"<br>");
}


function calculadora (numero1, numero2, checkMuestraPantalla = false){

    if(checkMuestraPantalla == false){
        muestraPorConsola(numero1,numero2);
    }else{
        muestraPorPantalla(numero1,numero2);
    }

}

for (let i = 0; i < 10; i++) {
    calculadora(i,8, true);
}
    