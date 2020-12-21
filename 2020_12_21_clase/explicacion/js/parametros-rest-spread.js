// PARÁMETROS REST

function listaAlumnos(alumno1, alumno2, ...resto_de_alumnos){
    console.log("Alumno 1: "+alumno1);
    console.log("Alumno 2: "+alumno2);
    console.log(resto_de_alumnos);
}

// listaAlumnos("Carla", "Julián","Jairo", "Jaime", "Ezequiel","Luis");


// PARÁMETROS SPREAD
let arrAlumnos = ["Carla", "Julián", "Jairo"];
listaAlumnos(...arrAlumnos, "Jaime", "Ezequiel","Luis");