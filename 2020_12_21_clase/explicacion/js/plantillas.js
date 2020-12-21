let nombre = prompt("Escribe tu nombre");
let apellidos = prompt("Escribe tus apellidos");

let texto = `
    <h1>Escribe tu nombre</h1>
    <h2>Mi nombre es ${nombre}<h2/>
    <h2>Mis apellidos son ${apellidos}<h2/>
`;

document.write(texto);

