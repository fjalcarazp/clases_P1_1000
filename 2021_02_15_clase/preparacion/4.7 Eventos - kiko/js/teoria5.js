function hello(){
    alert("Hola");
}

button1.onclick = hello;

// button1.onclick = hello(); // Esto está mal

// button1.setAttribute("onclick", function(){alert("Hola")}) // Esto está mal, NO es un atributo sino un evento

