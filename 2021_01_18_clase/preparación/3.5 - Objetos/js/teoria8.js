let user = {
    name: "Francisco Javier",
    surname: "Alcaraz",
    age: undefined
}

// comprobar si existe una key
alert("name" in user); // devuelve true; comprueba si existe la key dentro del objeto (mejor usar esta forma)
alert(user.name === undefined); //devuelve false; si no existiera la key devolvería true. También si el value es undefined.
alert(user.age === undefined) // devuelve true porque el value de age es undefined

// Podemos recorrer el objeto con un bucle for in
for (key in user) {
    // alert(key);
    alert(user[key]);
}