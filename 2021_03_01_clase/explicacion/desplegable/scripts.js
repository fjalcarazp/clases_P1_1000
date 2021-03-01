'use strict'

// https://jsonplaceholder.typicode.com/users

let button = document.querySelector("#button");
let select = document.querySelector("#selectUsers");

button.addEventListener("click", runAjax);

function runAjax(){
    let xhr;

    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest();
    }else{
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

    xhr.addEventListener("load", (data) =>{
        // console.log(data.target.response);

        let users = JSON.parse(data.target.response);

        let fragment = document.createDocumentFragment();

        for (const user of users) {
            let option = document.createElement("option");
            option.setAttribute("value", user.id);
            option.textContent = user.name;
            fragment.append(option);
        }

        select.append(fragment);

    });
    
    xhr.send();

}