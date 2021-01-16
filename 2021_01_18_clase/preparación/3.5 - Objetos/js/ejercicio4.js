/*
4 - Crea una función "multiplyNumeric(obj)" a la cual le pasas un objeto 
y lo que hace es multiplicar por 2 todos los valores numericos de ese objeto, 
ojo, solo los numéricos.
*/

const multiplyNumeric = obj =>{
    for(key in obj){
        if(isNaN(obj[key]) == false){
            obj[key] = obj[key]*2;
        }
    }
}

// Antes de usar la funcion
let menu = {
    width: 200,
    height: 300,
    title: "Mi menu de navegación"
  };
  
  console.log(menu);
  multiplyNumeric(menu);
  console.log(menu);
  // Despues de usar la funcion
//   menu = {
//     width: 400,
//     height: 600,
//     title: "Mi menu de navegación"
//   };


