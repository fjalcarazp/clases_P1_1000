function muestraTexto(){
    alert('Hola mundo!!');
    document.write("<p>Hola mundillo!!</p>")
}

document.querySelector("#boton").addEventListener("click",muestraTexto);