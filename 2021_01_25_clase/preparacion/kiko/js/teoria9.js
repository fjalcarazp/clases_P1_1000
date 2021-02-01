let array = ["manzana","naranja","pera"];

array.length = 2;

alert(array.length);
alert(array[3]);

/*
Modificando el length manualmente puedes
eliminar elementos del array. 
*/ 

/*Para eliminar todos los elementos de un array*/
array.length = 0;

// for (let i = 0; i < array.length; i++) {
//     array[i];
// }


/*También se pueden eliminar todos los elementos inicializando el array a vacío*/

// array = [];
