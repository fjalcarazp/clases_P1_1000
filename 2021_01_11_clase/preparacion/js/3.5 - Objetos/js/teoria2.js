const user = {
    name:"Francisco Javier",
    surname:"Alcaraz",
    age:29,
    "le gusta programar": true
};

user.name = "Ana"; // Se puede cambiar el valor
// user = {}; // Esto daría error por ser constante

alert(user.name) // una forma de acceder a las propiedades
alert(user["le gusta programar"]); // Otra forma de acceder a las propiedades

delete user["le gusta programar"] // otra forma de eliminar propiedades (con corchetes)