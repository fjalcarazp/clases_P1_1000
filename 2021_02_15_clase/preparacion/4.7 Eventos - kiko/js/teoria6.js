function hello(){
    alert("Hola");
}

let button1 = document.getElementById("button1");

button1.addEventListener("click", hello);

// Algunos eventos solo funcionan con el addEventListener. Es el más genérico.

// document.onDomContentLoaded = hello; // Esto está mal, NO funciona

