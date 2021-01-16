const s = "le gusta programar";

const user = {
    name:"Francisco Javier",
    surname:"Alcaraz",
    age:29,
    [s]: true,
    s: 4
};

// Estas propiedades son diferentes
alert(user[s]);
alert(user.s);