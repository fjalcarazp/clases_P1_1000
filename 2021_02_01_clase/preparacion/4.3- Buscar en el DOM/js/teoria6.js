/*getElementsBy* -> Devuelven listas vivas. Si la estructura html cambia en tiempo real también cambian las variables.
Al contrario que con el querySelectorAll
*/ 

let divs = document.getElementsByTagName("div");

alert(divs.length); // devuelve 1

document.body.append(document.createElement("div"));

alert(divs.length); // devuelve 2 

