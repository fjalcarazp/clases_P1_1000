let obj = {
    nombre: "Ana",
    "0": 0,
    3: 3,
    "2": 2,
    26:26,
    edad: undefined
}

for (key in obj) {
    // alert(obj[key]);
}


// COMPROBAR SI EXISTE UNA PROPIEDAD

// alert("edad" in obj);
alert("edad" === undefined);

