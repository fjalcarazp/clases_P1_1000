
/* 
Estas dos funciones retornan objetos iguales.
Cuando la key y el value se llaman igual hay dos formas
de introducir el value en la función
*/
function createUser(name, surname, age){
    return {
        name: name,
        surname: surname,
        age: age,
        "edad": age
    };
}

function createUser2(name, surname, age){
    return {
        name,
        surname,
        age,
        "edad": age
    };
}