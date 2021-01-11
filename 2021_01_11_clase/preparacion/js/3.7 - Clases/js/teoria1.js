class User {
    constructor(name){
        this.name = name;
    }

    sayHello(){
        alert("Hola "+this.name);
    }
}

// Otra forma de definir una clase en su forma de expresión
let User2 = class{
    constructor(name){
        this.name = name;
    }

    sayHello(){
        alert("Hola "+this.name);
    }
}


let anaUser = new User("Ana");

anaUser.sayHello();