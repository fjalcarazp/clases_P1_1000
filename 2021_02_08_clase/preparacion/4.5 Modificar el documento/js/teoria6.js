// insertAdjacentHTML

let ol = document.getElementById("ol");


let li = document.createElement("li");
li.innerHTML = "Primero";

// Agregar al principio del elemento ol
ol.insertAdjacentHTML("afterbegin",li); // Da error. Solo se puede introducir html no el elemento creado por javaScript

let li2 = document.createElement("li");
li2.innerHTML = "Último";

// Agregar al final del elemento ol
ol.append(li2);