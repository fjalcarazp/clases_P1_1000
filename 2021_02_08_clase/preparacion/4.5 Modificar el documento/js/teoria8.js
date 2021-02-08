// Clonar elementos

let div1 = document.getElementById("div1");

let div2 = div1.cloneNode(true);

div2.innerHTML = "Hola Juan";

div1.after(div2);

