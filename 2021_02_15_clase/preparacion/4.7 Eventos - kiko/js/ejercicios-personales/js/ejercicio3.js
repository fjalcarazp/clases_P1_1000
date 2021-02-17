/*
3 - Crea un menu desplegable, cuando pulses la opción a desplegar, 
han de salir las diferentes opciones debajo.
*/

function desplegar(){
    let lis = document.querySelectorAll("ul li");
    
    if(lis[1].className == "hidden"){
        lis[1].classList.remove("hidden");
        lis[2].classList.remove("hidden");
        lis[3].classList.remove("hidden");
    }else{
        lis[1].classList.add("hidden");
        lis[2].classList.add("hidden");
        lis[3].classList.add("hidden");
    }
}

document.querySelector("#menu").addEventListener("click",desplegar);
