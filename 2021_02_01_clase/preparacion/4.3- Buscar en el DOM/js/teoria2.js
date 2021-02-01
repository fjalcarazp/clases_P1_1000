
// querySelectorAll

let lis = document.querySelectorAll("li"); // devuelve un array de elementos

// for (let li of lis) {
//     li.style.fontSize = "45px"
// }

lis.forEach(elem => {
    elem.style.fontSize = "45px";
});



