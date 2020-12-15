'use strict'

function calculadora (numero1, numero2, checkMuestraPantalla = false){

    if(checkMuestraPantalla == false){
        console.log("SUMA: "+ (numero1+numero2));
        console.log("RESTA: "+ (numero1-numero2));
        console.log("MULTIPLICACIÓN: "+ (numero1*numero2));
        console.log("DIVISIÓN: "+ (numero1/numero2));
    }else{
        document.write("SUMA: "+ (numero1+numero2)+"<br>");
        document.write("RESTA: "+ (numero1-numero2)+"<br>");
        document.write("MULTIPLICACIÓN: "+ (numero1*numero2)+"<br>");
        document.write("DIVISIÓN: "+ (numero1/numero2)+"<br>");
    }

}


for (let i = 0; i < 10; i++) {
    console.log(i);
    calculadora(i,8, true);
}