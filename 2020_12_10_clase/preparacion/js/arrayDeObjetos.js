let frutero = [
    {
        nombre: "manzana",
        color: "verde",
        origen: ["Asturias", "Galicia", "País Vasco"]
    },

    {
        nombre: "plátano",
        color: "amarillo",
        origen: ["Canarias", "Venezuela", "Colombia"]
    }
];

console.log(frutero);

console.log("Esta fruta: "+ frutero[0].nombre + "proviene de "+ frutero[0].origen[1]);