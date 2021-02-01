// querySelector primera etiqueta
// let li = document.querySelector("li"); // el primer elemento que encuentra con este selector
// li.style.color = "red";

// querySelector clase
// let li = document.querySelector(".active"); // el primer elemento que encuentra con este selector
// li.style.color = "red";

// querySelector li clase
let li = document.querySelector("ul .active"); 
li.style.color = "red";

//matches
/*
El método matches() comprueba si el Element sería seleccionable por el selector CSS especificado en la cadena;
*/

// alert(li.matches("li")); // comprobar si es un li
// alert(li.matches("h1")); // comprobar si es un h1
// alert(li.matches(".active")); // comprobar si tiene la clase active




