/*
1 - Crea una funcion que se llame "clear(elem)" a la cual le puedas pasar un elemento y elimine todo lo que haya en su interior.
*/



function clear(elem){
    elem.innerHTML = "";
}

const elem = document.getElementById("elem");

clear(elem);



