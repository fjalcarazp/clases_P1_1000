var lenguajes = new Array("PHP", "JS", "GO", "Java", "C#", "C","Pascal");
var precios = [10, 20, 50, 80, 12];

// BUSQUEDAS
// find()
// var busqueda = lenguajes.find( (elemento, indice, array) => {return elemento == "PHP"}); // Si lo encuentra devuelve el elemento, si no devuelve undefined
// console.log(busqueda);

//findIndex()
// var busqueda = lenguajes.findIndex(lenguaje => lenguaje == "PHP7"); // Si lo encuentra devuelve el indice del elemento, si no devuelve -1
// console.log(busqueda);

//some()
var busqueda = precios.some(precio => precio > 69); // Si se cumple la condición devuelve true en caso contrario false. El método some() comprueba si al menos un elemento del array cumple con la condición
console.log(busqueda);



