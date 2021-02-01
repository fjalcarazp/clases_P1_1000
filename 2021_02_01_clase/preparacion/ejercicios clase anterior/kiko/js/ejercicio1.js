/*1 - Comprueba qué hay en el siguiente código*/

let fruits = ["manzanas", "peras", "naranjas"];


let shoppingCart = fruits;
shoppingCart.push("platanos");

// ¿Qué hay dentro de fruits?
alert( fruits.length );

for (let i = 0; i < fruits.length; i++) {
    alert(fruits[i]);    
}