/*
3 - Tenemos el siguiente objeto, tienes que sumar todos los numeros de los valores del objeto.
*/

let products = {
    "car": 20,
    "house": 99999,
    "bike": 12,
};

const sumValues = obj =>{
    let sum = 0;

    for (key in obj){
        sum += obj[key];
    }

    return sum;
}

console.log(sumValues(products));





