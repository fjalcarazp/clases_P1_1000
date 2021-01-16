class User {

    name= "A";
    surname = "P";
    age = null;

    constructor(name){
        this.name = name;
    }

    ["say"+"Hello"](){
        alert("Hola "+ this.name);
    }
}

let user = new User("Ana");

user.sayHello();

