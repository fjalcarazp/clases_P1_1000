document.querySelector("#verTodas").addEventListener("click", verTodas);
document.querySelector("#crearCookie1").addEventListener("click", crearCookie);
document.querySelector("#crearCookie2").addEventListener("click", crearCookie);
document.querySelector("#borrarCookie1").addEventListener("click", borrarCookie);
document.querySelector("#borrarCookie2").addEventListener("click", borrarCookie);


function verTodas(){
    alert(document.cookie);
}

function crearCookie(e){
    if(!e){
        e = window.event;
    }

    if(e.target.id == "crearCookie1"){
        document.cookie = "nombre = Harry"
    }else if(e.target.id == "crearCookie2"){
        document.cookie = "apellido = Potter";
    }
}

function borrarCookie(e){
    if(!e){
        e = window.event;
    }

    if(e.target.id == "borrarCookie1"){
        document.cookie = "nombre =; expires=Thu 01 Jan 1970 00:00:01 UTC";
    }else if(e.target.id == "borrarCookie2"){
        document.cookie = "apellido =; expires=Thu 01 Jan 1970 00:00:01 UTC";
    }
}