//Comprobación de que el navegador soporta Web Storage
if (typeof(Storage) !== "undefined") {
    alert("El navegador soporta WebStorage");
    if (localStorage.getItem("usuario") != null){
        document.getElementById("saludo").innerHTML="¡Bienvenido/a de nuevo, "+localStorage.getItem("usuario")+"!";
    }else{
        let nombre = prompt("¿Cómo te llamas?");
        localStorage.setItem("usuario", nombre);
        document.getElementById("saludo").innerHTML="¡Tu primera visita, "+  localStorage.getItem("usuario")+"!";
    }
    
    if(!sessionStorage.getItem("contador")) 
        sessionStorage.setItem("contador","0");

    document.getElementById("contador").innerHTML="Contador: "+sessionStorage.getItem("contador");
    document.getElementById("incrementar").addEventListener("click",incrementar);
    document.getElementById("decrementar").addEventListener("click",decrementar);
    document.getElementById("logout").addEventListener("click",logout);
} else {
    alert ("El navegador no soporta Web Storage");
}
    
function incrementar(){
    sessionStorage.setItem("contador",Number(sessionStorage.getItem("contador"))+1);
    document.getElementById("contador").innerHTML = "Contador: "+ sessionStorage.getItem("contador");
}
function decrementar(){
    sessionStorage.setItem("contador",Number(sessionStorage.getItem("contador"))-1);
    document.getElementById("contador").innerHTML = "Contador: "+ sessionStorage.getItem("contador");
}
function logout(){
    alert("Se ha cerrado la sesión de "+localStorage.getItem("usuario"));
    localStorage.removeItem("usuario");
    //sessionStorage.clear();
    document.getElementById("saludo").innerHTML = "";
}