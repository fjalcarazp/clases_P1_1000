/*Continuar la explicación con este video*/
// https://www.youtube.com/watch?v=4qyEnLeyk_k

 

function setCookie(nombre, valor, expiracion){
    var d = new Date();
    d.setTime(d.getTime()+expiracion*24*60*60*1000);
    var expiracion = "expires="+d.toUTCString();
    document.cookie = nombre+"="



}

