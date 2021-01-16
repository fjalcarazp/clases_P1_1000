/* EJERCICIO 1
1.Crea un objeto vacío llamado "user"
2.Añade la propiedad "name" con tu nombre
3.Añade la propiedad "surname" con tu apellido
4.Cambia el valor del "name" por "Ana"
5.Elimina la propiedad "name"
*/

// _______________________________________________________________________________________

/* EJERCICIO 2
Crea la función "isEmpty(obj)" a la cual le pasas como parámetro un objeto 
y te devuelve true si el objeto no tiene propiedades, o false si tiene propiedades.
*/

// _______________________________________________________________________________________

/* EJERCICIO 3
Tenemos el siguiente objeto, tienes que sumar todos los números de los valores del objeto.
*/

let products = {
    "car": 20,
    "house": 99999,
    "bike": 12,
};

// _______________________________________________________________________________________

/* EJERCICIO 4
Crea una función "multiplyNumeric(obj)" a la cual le pasas un objeto 
y lo que hace es multiplicar por 2 todos los valores numéricos de ese objeto, 
ojo, solo los numéricos.
*/

// Antes de usar la funcion
let menu = {
    width: 200,
    height: 300,
    title: "Mi menu de navegación"
  };
  
  multiplyNumeric(menu);
  
  // Despues de usar la funcion
  menu = {
    width: 400,
    height: 600,
    title: "Mi menu de navegación"
  };