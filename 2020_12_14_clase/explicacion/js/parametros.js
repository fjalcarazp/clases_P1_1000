function calculadora (numero1, numero2){
    
    console.log("SUMA: "+ (numero1+numero2));
    console.log("RESTA: "+ (numero1-numero2));
    console.log("MULTIPLICACIÓN: "+ (numero1*numero2));
    console.log("DIVISIÓN: "+ (numero1/numero2));
}


for (let i = 0; i < 10; i++) {
    console.log(i);
    calculadora(i,8);
}


