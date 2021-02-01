/*
4 - Escribe la función sumInput() que:

1.Pregunte al usuario usando prompt por los valores que guardaremos en un array
2.Termina de preguntar al usuario cuando meta un valor no numerico o presione cancelar.
3.Calcula la suma de todos los valores del array.
4.El cero es un valor valido, por lo que no debes dejar de preguntar numeros si el usuario mete 0.
*/

let sumInput = () => {
    let array = [];
    let resp = prompt("Introduzca un número al array");
    let sumaValoresArray = 0;

    while ( (isNaN(resp) == false) && (resp != null) ) {
        array.push(parseInt(resp));
        resp = prompt("Introduzca un número al array");
    }

    for (let i = 0; i < array.length; i++) {
        sumaValoresArray += array[i];  
    }

    alert(`La suma de los valores del array es: ${sumaValoresArray}`);
}