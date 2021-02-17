'use strict'

/*
setInterval - ejecuta una función en bucle cada x periodo de tiempo
setTimeout - ejecuta una función transcurrido x periodo de tiempo
*/

window.addEventListener('load', function(){
    
    // Timers
    // setInterval Vs setTimeout: sustituir
    // var tiempo -> id del proceso
    var tiempo = setInterval(function(){
        console.log("Set interval ejecutado");
        
        var encabezado = document.querySelector("h1");
        if(encabezado.style.fontSize == "1em"){
            encabezado.style.fontSize = "2em";
        }else{
            encabezado.style.fontSize = "1em";
        }
    }, 3000); 

    var stop = document.querySelector("#stop");

    stop.addEventListener("click", function(){
        alert("Has parado el intervalo en bucle");
        clearInterval(tiempo);
    });
});