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

/*
DUDAS
¿Por qué al hacer user.name o user._name
me devuelve lo mismo si solo hay una propiedad _name?
Al hacer user.name llama al método get. Al hacer user._name llamamos a la propiedad directamente.
Al hacer "user.name = 'José'" llamamos al método set. 
*/

// Llamada al set
user.name = "José";

// Llamada al get
alert(user.name);

