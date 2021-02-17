window.addEventListener('load', () => {
    var boton = document.querySelector("#boton");

    // CLICK
    boton.addEventListener("click", function(){
        boton.style.background = "yellow";
    });
    
    // MOUSEOVER
    boton.addEventListener("mouseover", function(){
        boton.style.background = "blue";
    });
    
    // MOUSEOUT
    boton.addEventListener("mouseout", function(){
        boton.style.background = "red";
    });
    
    
    var input = document.querySelector("#campo_nombre");
    
    // FOCUS
    input.addEventListener("focus", function(){
        console.log("[focus] Estás dentro del input");
    });
    
    // BLUR
    input.addEventListener("blur", function(){
        console.log("[blur] Estás fuera del input");
    });
    
    // KEYDOWN
    input.addEventListener("keydown", function(){
        console.log("[keydown] Pulsando esta tecla");
    });
    
    // KEYUP
    input.addEventListener("keyup", function(event){
        console.log("[keyup] Tecla soltada", String.fromCharCode(event.keyCode));
    });
    
    // event.keycode no recomendado usarlo actualmente
});





