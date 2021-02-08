/*
2 - Crea una lista preguntando al usuario con un prompt los elementos de la lista, 
cuando el usuario le de a cancelar entonces dejamos de preguntarle, y pintamos la lista en el HTML.
*/

function createList(){
    const ul = document.createElement("ul");
    document.body.append(ul);
    
    while(true){
        let data = prompt("Introduce un elemento para la lista", "");
    
        if(!data){
            break;
        }
    
        let li = document.createElement("li");
        li.textContent = data;
        ul.append(li);
    }
}



