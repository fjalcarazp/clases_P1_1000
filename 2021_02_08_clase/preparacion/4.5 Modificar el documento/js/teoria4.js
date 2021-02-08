// insertAdjacentText

let ol = document.getElementById("ol");

// Agregar TEXTO antes del elemento ol
ol.insertAdjacentText("beforebegin","Antes");
// Agregar TEXTO después del elemento ol
ol.insertAdjacentText("afterend","Después");

let li = document.createElement("li");
li.innerHTML = "Primero";

// Agregar al principio del elemento ol
ol.prepend(li);

let li2 = document.createElement("li");
li2.innerHTML = "Último";

// Agregar al final del elemento ol
ol.append(li2);

