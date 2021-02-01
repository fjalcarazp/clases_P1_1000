/*
Busca lo siguiente en el documento HTML:

1. La tabla con id="age-table"
2. Todos los label de la tabla (debería haber 3)
3. El primer td en la tabla con la palabra "Edad"
4. El form con name="search"
5. El primer input
6. El último input
*/

// PRIMERO
const table = document.getElementById("age-table");

// SEGUNDO
const labels = table.getElementsByTagName("label"); // Primera forma
const labels2 = document.querySelectorAll("#age-table label"); // Segunda forma

// TERCERO
table.rows[0].cells[0];
table.getElementsByTagName("td")[0];
table.querySelector("td");

// CUARTO
let form = document.getElementsByName("search")[0];
let form2 = document.querySelector('form[name="search"]');

// QUINTO
form.getElementsByTagName("input")[0];
form.querySelector("input");

// SEXTO
let inputs = document.querySelectorAll("input");
let lastInput = inputs[inputs.length - 1];

