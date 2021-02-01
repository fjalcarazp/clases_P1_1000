// closest

let chapter = document.querySelector(".chapter");
let book = chapter.closest(".book"); // retorna el próximo elemento más cercano al capítulo con la clase .book. 
let contents = chapter.closest(".contents"); // retorna el div de la clase contents que es el abuelo
let contents2 = chapter.closest("h1"); // retorna null porque no existe

/*closest busca el más cercano siempre hacia arriba.
Primero busca en el padre y siguientes hacia arriba
*/

