/*
Una función de callback es una función que se pasa a otra función como un argumento, 
que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción.
*/

function sumame(numero1, numero2, sumaYmuestra, sumaPorDos){
    var sumar = numero1 + numero2;

    sumaYmuestra(sumar);
    sumaPorDos(sumar);

    return sumar;
}

sumame(5, 7, 
    function(dato){
        console.log("La suma es: ", dato);
    },

    function(dato){
        console.log("La suma por dos es: ", (dato*2));
    }
);