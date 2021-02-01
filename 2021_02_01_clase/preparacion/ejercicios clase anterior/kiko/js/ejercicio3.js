/*
3 - ¿Cuál es el resultado del siguiente código?
*/

let arr = ["a", "b"];

arr.push(function(){
    alert(this);
})

arr[2]();

