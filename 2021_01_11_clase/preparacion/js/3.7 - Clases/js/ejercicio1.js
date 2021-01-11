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
