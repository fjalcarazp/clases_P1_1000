let ol = document.getElementById("ol");

// Agregar antes del elemento ol
ol.before("Antes");
// Agregar después del elemento ol
ol.after("Después");

let li = document.createElement("li");
li.innerHTML = "Primero";

// Agregar al principio del elemento ol
ol.prepend(li);

let li2 = document.createElement("li");
li2.innerHTML = "Último";

// Agregar al final del elemento ol
ol.append(li2);