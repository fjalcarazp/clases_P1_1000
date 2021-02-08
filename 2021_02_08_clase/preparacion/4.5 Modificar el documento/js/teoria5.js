// insertAdjacentHTML

let ol = document.getElementById("ol");

// Agregar HTML antes del elemento ol
ol.insertAdjacentHTML("beforebegin","<h1>Antes</h1>");
// Agregar HTML después del elemento ol
ol.insertAdjacentHTML("afterend","<h1>Después</h1>");

let li = document.createElement("li");
li.innerHTML = "Primero";

// Agregar al principio del elemento ol
ol.prepend(li);

let li2 = document.createElement("li");
li2.innerHTML = "Último";

// Agregar al final del elemento ol
ol.append(li2);

