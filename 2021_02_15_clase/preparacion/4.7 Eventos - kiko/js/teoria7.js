function hello(){
    alert("Hola");
}

let button1 = document.getElementById("button1");

button1.onclick = function(event){
    console.log(event);
    console.log(event.type);
    console.log(event.currentTarget);
    console.log(event.clientX);
    console.log(event.clientY);
}