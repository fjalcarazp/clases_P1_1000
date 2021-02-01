var lenguajes = ["PHP", "JS", "GO", "Java", "C#", "C","Pascal"];

document.write("<ul>")
for (let i = 0; i < lenguajes.length; i++) {
    document.write(`<li>${lenguajes[i]}</li>`);    
}

document.write("</ul>")

