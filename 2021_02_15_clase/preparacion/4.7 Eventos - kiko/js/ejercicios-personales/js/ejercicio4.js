/*
4 - Crea una lista de mensajes tipo alerta con un botón con una X en la esquina, 
que cuando lo pulses cierre la alerta.
*/

function close(){
    
    switch (this.id) {
        case "close1":
            document.querySelector("#div1").style.display = "none";
            break;
        case "close2":
            document.querySelector("#div2").style.display = "none";           
            break;
        case "close3":
            document.querySelector("#div3").style.display = "none";           
            break;  
    }
    
}

document.querySelector("#close1").addEventListener("click",close);
document.querySelector("#close2").addEventListener("click",close);
document.querySelector("#close3").addEventListener("click",close);
