class User {

    constructor(name){
        this.name = name;
    }

    get name(){
        return this._name;
    }

    set name(value){
        if(value !== ""){
            this._name = value;
        }
    }
}
// Llamada al constructor
let user = new User("Paco");

// Llamada al set
user.name = "José";

// Llamada al get
alert(user.name);

