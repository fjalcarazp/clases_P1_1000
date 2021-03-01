// https://jsonplaceholder.typicode.com/users

let button = document.querySelector("#button");
let list = document.querySelector("#list");

button.addEventListener("click", runAjax);

function runAjax(){

    // Crear el objeto xhr
    let xhr;

    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest();
    }else{
        // IE viejos
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }

    // Configurar la petición
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

    xhr.addEventListener("load", (data) => {
        
        let users = JSON.parse(data.target.response);
        // console.log(users);

        for (const user of users) {
            let li = document.createElement("li");
            li.textContent = `${user.id} - ${user.name}`;
            list.append(li);
        }


    });

    xhr.send();

}