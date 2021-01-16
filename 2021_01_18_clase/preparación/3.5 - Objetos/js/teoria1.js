//let user1 = new Object();

let user = {
    name:"Francisco Javier",
    surname:"Alcaraz",
    age:29
};

user.isAdmin = true;

// Acceder a las propiedades
// alert(user.name);
// alert(user.age);
alert(user.isAdmin);

//Borrar propiedades
delete user.age;
// alert(user.age);