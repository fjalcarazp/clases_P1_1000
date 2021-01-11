let user = new Object();
let user1 = {
    "name": "Francisco",
    "varias palabras": true
};

user.name = "Francisco Javier";
user ["varias palabras"];

delete user.name;

let checkKey = "name" in user;

for(key in user){
    user[key];
}