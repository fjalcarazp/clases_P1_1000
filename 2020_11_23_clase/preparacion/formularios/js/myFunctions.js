'use strict'

const formulario = document.querySelector("#formulario");
const bondad = document.querySelector("#bondad");
const bondadOutput = document.querySelector(".bondad-output");
const rangoDinero = document.querySelector("#rangoDinero");
const dineroMin = document.querySelector("#dineroMin");
const dineroFin = document.querySelector("#dineroFin");
const dni = document.querySelector("#dni");
const errores = document.querySelector("#errores");
const divDni = document.querySelector("#divDni");
const email = document.querySelector("#email");
const divEmail = document.querySelector("#divEmail");
const telefono = document.querySelector("#telefono");
const divTelefono = document.querySelector("#divTelefono");
const divDinero = document.querySelector("#divDinero");
const textarea = document.querySelector("#textarea");
const divTextarea = document.querySelector("#divTextarea"); 

const mensajesError = {
    dniLetra: "* Dni erroneo, la letra del DNI no se corresponde",
    dniFormato: "* Dni erroneo, formato no válido",
    emailFormato: "* Email erroneo, formato no válido",
    telefonoFormato: "* Teléfono erroneo, formato no válido",
    dineroVacio: "* Dinero erroneo, introduzca un valor en el campo de estimación monetaria",
    dineroNumerico: "* Dinero erroneo, introducca un valor numérico en el campo de estimación monetaria",
    dineroCantidad: "* Dinero erroneo, el dinero final estimado ha de ser un número entre 2 y 102",
    textareaVacio: "* Error en la carta, la carta no puede estar vacía",
    textareaLargo: "* Error en la carta, la carta no puede contener más de 1000 caracteres"
};

var formularioIsRight = true;



function valoraBondad(){
    bondadOutput.textContent = bondad.value+"%";
}

function valoraDinero(){
    dineroFin.textContent = parseInt(rangoDinero.value)+parseInt(dineroMin.value);
}

//5 VALIDA DNI...
function validaDni(dni) {
    let numero;
    let letr;
    let letra;
    let expresion_regular_dni;
   
    expresion_regular_dni = /^\d{8}[a-zA-Z]$/;
   
    if(expresion_regular_dni.test (dni) == true){
       numero = dni.substr(0,dni.length-1);
       letr = dni.substr(dni.length-1,1);
       numero = numero % 23;
       letra='TRWAGMYFPDXBNJZSQVHLCKET';
       letra=letra.substring(numero,numero+1);
      if (letra!=letr.toUpperCase()) {
         errores.innerHTML+=`<p>${mensajesError.dniLetra}</p>`;
         divDni.classList.add("red");
         formularioIsRight = false;
       }else{
            divDni.classList.remove("red");
       }
    }else{
       errores.innerHTML+= `<p>${mensajesError.dniFormato}</p>`;
       divDni.classList.add("red");
       formularioIsRight = false;
    }
}

//4 VALIDA EMAIL...
function validaEmail(emailValue){
    
    let emailRegex = /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i;
    let emailIsRight = emailRegex.test(emailValue);


    switch (emailIsRight) {
        case false:
            formularioIsRight = false;
            divEmail.classList.add("red");
            errores.innerHTML+= `<p>${mensajesError.emailFormato}</p>`;

            break;

        default:
            formularioIsRight = true;
            divEmail.classList.remove("red");

            break;
    }
}

// 3 VALIDA TELÉFONO...
function validaTelefono(phoneNumber){

    let telefonoRegex = /^[9|6]{1}([\d]{2}[-]*){3}[\d]{2}$/;

    let phoneIsRight = telefonoRegex.test(phoneNumber);
    
    if(phoneIsRight){
        divTelefono.classList.remove("red");
    }else{
        formularioIsRight = false;
        divTelefono.classList.add("red");
        errores.innerHTML+= `<p>${mensajesError.telefonoFormato}</p>`;
    }
}

// 2 ESTIMACIÓN MONETARIA...
function validaDinero(money){

    if(money == ""){
        formularioIsRight = false;
        divDinero.classList.add("red");
        errores.innerHTML+= `<p>${mensajesError.dineroVacio}</p>`;
    }else if(isNaN(money)){
        formularioIsRight = false;
        divDinero.classList.add("red");
        errores.innerHTML+= `<p>${mensajesError.dineroNumerico}</p>`;
    }else if(money < 2 || money > 102){
        formularioIsRight = false;
        divDinero.classList.add("red");
        errores.innerHTML+= `<p>${mensajesError.dineroCantidad}</p>`;
    }else{
        divDinero.classList.remove("red");
    }
}

// 1 TEXTAREA...
function validaTextarea(carta){
    if(carta == ""){
        formularioIsRight = false;
        divTextarea.classList.add("red");
        errores.innerHTML+= `<p>${mensajesError.textareaVacio}</p>`;
    }else if(carta.length > 1000){
        formularioIsRight = false;
        divTextarea.classList.add("red");
        errores.innerHTML+= `<p>${mensajesError.textareaLargo}</p>`;
    }else{
        divTextarea.classList.remove("red");
    }
}


function validaFormulario(event){
    event.preventDefault();

    errores.innerHTML = "";

    validaDni(dni.value);
    validaEmail(email.value);
    validaTelefono(telefono.value);
    validaDinero(dineroFin.value);
    validaTextarea(textarea.value);

    if(formularioIsRight){
        formulario.submit();
        alert("El formulario se ha enviado correctamente");
    }
}



bondad.addEventListener("input", valoraBondad);
rangoDinero.addEventListener("input",valoraDinero);
formulario.addEventListener("submit", validaFormulario);


