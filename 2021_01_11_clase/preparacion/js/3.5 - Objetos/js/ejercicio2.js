/*
Crea la función "isEmpty(obj)" a la cual le pasas como parámetro un objeto 
y te devuelve true si el objeto no tiene propiedades, o falso si tiene propiedades.
*/

const isEmpty = obj => {
    let checkProperties = true;

    for (key in obj) {
        checkProperties = false;
    }

    return checkProperties;
};

// Tests
const student1 = {
    name: "Ana",
    surname: "González"
};

const student2 = {};

console.log(isEmpty(student2));