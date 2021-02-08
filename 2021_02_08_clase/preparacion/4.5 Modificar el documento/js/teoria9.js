// DocumentFragment(): Para cuando tengamos más de un nodo tenerlos guardados dentro de una misma variable

let fragment = new DocumentFragment();

for (let i = 0; i < 3; i++) {
    let li = document.createElement("li");
    li.innerHTML = i;
    fragment.append(li);    
}

ol.append(fragment);




