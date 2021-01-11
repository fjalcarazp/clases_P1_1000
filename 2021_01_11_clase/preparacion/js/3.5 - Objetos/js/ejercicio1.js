/*
1.Crea un objeto vacío llamado "user"
2.Añade la propiedad "name" con tu nombre
3.Añade la propiedad "surname" con tu apellido
4.Cambia el valor del "name" por "Ana"
5.Elimina la propiedad "name"
*/

const user = {
    name: "Francisco Javier",
    surname: "Alcaraz Pérez",
};

console.log(user);

user.name = "Ana";

console.log(user.name);

delete user.name;

console.log(user.name);