'use strict'

/******* PRIMER EJERCICIO *******/

document.querySelector("#img-kitty").onclick = cambiaImagen;


function cambiaImagen(){
    if(document.querySelector("#img-kitty").src == "https://media1.tenor.com/images/a7a1aef1904c607481655ee1868414e9/tenor.gif?itemid=12539670"){
        mostrar();
    }else{
        enfadar();
    }
}

function mostrar(){
    document.querySelector("#img-kitty").src = "https://media1.tenor.com/images/a11971f5e4c85acca10de4fdf759413f/tenor.gif?itemid=11165926";

}

function enfadar(){
    document.querySelector("#img-kitty").src = "https://media1.tenor.com/images/a7a1aef1904c607481655ee1868414e9/tenor.gif?itemid=12539670";

}

function muestraImgInicial(){
    document.querySelector("#img-kitty").src = "https://www.cinemascomics.com/wp-content/uploads/2015/07/hello-kitty.jpg";


}

/******* SEGUNDO EJERCICIO *********/

/*
document.querySelector("#img-kitty").onclick = mostrar;
document.querySelector("#img-kitty").onclick = enfadar;
*/

document.querySelector("#img-kitty").onmouseout = muestraImgInicial;


