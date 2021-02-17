

let button1 = document.getElementById("button1");

let obj = {
    handleEvent(event){
        switch (event.type) {
            case "click":
                alert("Hola click")
                break;
            case "mouseup":
                alert("Adiós mouseup");
                break;
        }
    }
}

button1.addEventListener("click", obj);
button1.addEventListener("mouseup", obj);