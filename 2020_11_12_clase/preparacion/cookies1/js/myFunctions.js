'use strict'

/*
Crear una cookie: nombre; fechaexpiracion utc; edadMaxima en segundos; ruta; dominio

document.cookie = "usuario = Ana; expires=Thu, 16 Nov 2022 12:00:00 -UTC-; path=/;
*/

document.cookie = "usuario = Harry Potter;";

document.cookie = "genero = hombre;";

//Leer una cookie
var miCookie = document.cookie;
alert(miCookie);

//Modificar una cookie
document.cookie = "genero = no binario;";
alert(document.cookie);

//Borrar una cookie
document.cookie = "usuario =; expires=Thu 01 Jan 1970 00:00:01 GMT";
document.cookie = "genero =; expires=Thu 01 Jan 1970 00:00:01 GMT";
alert(document.cookie);