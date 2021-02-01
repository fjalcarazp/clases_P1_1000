let a = [
    "naranja",
    "manzana",
    "pera"
];

let b = a; // apuntan al mismo espacio de memoria no es una clonación

b.push("uva");

alert(a);


/*Para clonar se puede utilizar slice o copia shallow, con el spread operator*/
// let arrayClon = a.slice();
//let arrayClon = [...a];

arrayClon.push("plátano");
alert(a);