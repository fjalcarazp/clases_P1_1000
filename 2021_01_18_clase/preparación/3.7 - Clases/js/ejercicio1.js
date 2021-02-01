/*
1-Crea una clase llamada "User"
2-Haz un método que pida al usuario con un prompt su nombre
3-El nombre se debe guardar en una propiedad de la clase.
4-Con otro método tenemos que mostrar un alert que salude al usuario
*/

class User {
    constructor(name){
        this.name = name;
    }

    get name(){
        return this._name;
    }

    set name(name){
        this._name = name;
    }

    giveMeYourName(){
        this.name = prompt("Dame tu nombre");
    }

    sayHello(){
        alert("Saludos "+this.name);
    }
}

// Test
let user = new User("Paco");
console.log(user.name);

user.giveMeYourName();
console.log(user.name);

user.sayHello();
