/*
3 - Crea un reloj que vaya cambiando en tiempo real, y que las horas se vean de color rojo, 
los minutos de color verde y los segundos de color azul.
*/

function update(){
    let clock = document.getElementById("clock");

    let hour = clock.children[0];
    let minutes = clock.children[1];
    let seconds = clock.children[2];

    const date = new Date();

    const hourText = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    const minText = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    const secText = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();


    hour.innerHTML = hourText;
    minutes.innerHTML = minText;
    seconds.innerHTML = secText;
}

setInterval(update, 1000);