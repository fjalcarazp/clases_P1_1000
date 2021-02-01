var lenguajes = ["PHP", "JS", "GO", "Java", "C#", "C","Pascal"];

document.write("<ul>");

lenguajes.forEach((element, index, array) => {
    document.write(`<li>${index} - ${element}</li>`);
});

document.write("</ul>");