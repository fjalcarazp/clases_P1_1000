
function sumMuestra(dato){
    console.log("La suma es: "+dato);
}

function sumPorDos(dato){
    console.log("La suma por dos es: "+dato*2);
}

function suma(num1, num2, sumaYmuestra, sumaPorDos){
    let resultado = num1+num2;

    sumaYmuestra(resultado);

    sumaPorDos(resultado);

    return resultado;
}

suma(5,3);

// suma(4, 5, 
//     function(dato){
//         console.log("La suma es: "+dato);
//     },
//     function(dato){
//         console.log("La suma por dos es: "+dato*2);
//     }
// );


