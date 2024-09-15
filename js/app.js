//'use strict';
//const respuesta1 = "No";
//const respuesta2 = "Si";
//const respuesta3 = "Si";
//const respuesta4 = "No";
//const respuesta5 = "No";
/*
const numeroMaxIntentos = 4;
const numeroAAdivinar = 15;
let contadorDeIntentos = 1;
const colorfavorito = ["Azul Marino", "Verde", "Turquesa","Morado"];
const numMaxIntento = 6;
//let contarIntento= 1;

let contadorbien = 0;
let contadormal = 0;
puntos = 0;

let usuario = prompt("Hola; ¿ Cual es tu nombre/apodo ?");
alert('Bienvenido, mucho gusto ' + usuario)
const pregunta1 = prompt("¿Tengo un segundo nombre?, Si / No");
if (respuesta1.toLowerCase() === pregunta1.toLowerCase()) {
    alert("Respuesta Correcta, no pense que adivinarias ")
    puntos += 1;
} else { alert("Respuesta Incorrecta") }

const pregunta2 = prompt("¿Trabajo actualmente?, Si / No?");
if (respuesta2.toLowerCase() === pregunta2.toLowerCase()) {
    alert("Respuesta Correcta, muy bien ")
    puntos += 1;
} else { alert("Respuesta Incorrecta") }

const pregunta3 = prompt("¿Nací en Ayacuho?, Si / No");
if (respuesta3.toLowerCase() === pregunta3.toLowerCase()) {
    alert("Respuesta Correcta, eres intuitivo")
    puntos += 1;
} else { alert("Respuesta Incorrecta") }

const pregunta4 = prompt("¿Inicié a estudiar Ingeniería, en Lima?, Si / No");
if (respuesta4.toLowerCase() === pregunta4.toLowerCase()) {
    alert("Respuesta correcta, no pense que adivinarías")
    puntos += 1;
} else { alert("Respuesta Incorrecta") }

const pregunta5 = prompt("¿Tengo el titulo de la Maestría?, Si / No");
if (respuesta5.toLowerCase() === pregunta5.toLowerCase()) {
    alert("Respuesta correcta, muy bien")
    puntos += 1;
} else { alert("Respuesta Incorrecta") }
console.log(usuario+"tiene"+puntos);
alert ("muchas gracias " + usuario + "  En esta primera parte, Ud. tiene:  "+ puntos+"  Repuestas correctas");

while (contadorDeIntentos <= numeroMaxIntentos) {
    const numeroPorUsuario = Number(prompt("¿Cuantos años de experiencia tengo como Analista de S.I ?, ingresa Números: "+numeroMaxIntentos+" intentos"));

    if (numeroPorUsuario === numeroAAdivinar) {
        alert("Felicidades!!! adivinaste amigo(a) tengo " + numeroAAdivinar+"años de experiencia")
        alert("Lo hiciste en " + contadorDeIntentos + " intentos");
        puntos += 1;
        break;
    } if (numeroPorUsuario > numeroAAdivinar) {
        alert(numeroPorUsuario + "  Estimación demasiado alta ");
    } else {
        alert(numeroPorUsuario + "  Estimación demasiado baja ")

    }
    contadorDeIntentos++;
    if (contadorDeIntentos === numeroMaxIntentos + 1) {
        alert("Llegaste al número max de intentos :(, Mi experiencia es de: "+numeroAAdivinar);
    }
}

let coloringresado = prompt ("Adivina mi color favorito...!,Tienes " +numMaxIntento + " intentos..")

for(let i=1; i<=numMaxIntento;i++) {

    for (let j=0; j< colorfavorito.length; j++) {
        if(coloringresado.toUpperCase() == colorfavorito[j].toUpperCase() ) {
         alert ("Acertaste !!! Felicitaciones!!");
         contadorDeIntentos++;
         puntos += 1;
         break;
        }
        else{
            coloringresado = prompt("No acertaste..! Sigue intentando te quedan " + (numMaxIntento-i) + " intentos. El color es:");
        }
    } if (i==numMaxIntento) {
        alert ("Mis colores Favoritos son: "+ colorfavorito +" Éxitos en tu opróximo intento ...!");
    }
       
 
}
alert (usuario+" Gracias por participar. Ud. tiene un Total de :  "+ puntos+"  Repuestas correctas");
*/


const colorfavorito = ["Azul Marino", "Verde", "Turquesa","Morado"];
const numMaxIntento = 6;

let usuario = prompt("Hola; ¿ Cual es tu nombre/apodo ?");
alert('Bienvenido, mucho gusto ' + usuario);
console.log(usuario);
puntos = 0;

function preguntaSegundoNombre() {
    const respuesta1 = "No";
    const pregunta1 = prompt('Tengo un segundo nombre? Si o No?');
    if (respuesta1.toLowerCase() == pregunta1.toLowerCase()) {
        alert('Correcto');
        puntos++;
    } else {
        alert('Incorrecto');
    }
}

function preguntaTrabajoActualmente() {
    const respuesta2 = "Si";
    const pregunta2 = prompt('Trabajo actualmente? Si o No?');
    if (respuesta2.toLowerCase() == pregunta2.toLowerCase()) {
        alert('Correcto');
        puntos++;
    } else {
        alert('Incorrecto');
    }
}

function preguntaLugardeNacimiento() {
    const respuesta3 = "Si";
    const pregunta3 = prompt('Naci en Ayacucho? Si o No?');
    if (respuesta3.toLowerCase() == pregunta3.toLowerCase()) {
        alert('Correcto');
        puntos++;
    } else {
        alert('Incorrecto');
    }
}

function preguntaIniciodeEstudios() {
    const respuesta4 = "No";
    const pregunta4 = prompt('Inicie a estudiar Ingenieria en Lima? Si o No?');
    if (respuesta4.toLowerCase() == pregunta4.toLowerCase()) {
        alert('Correcto');
        puntos++;
    } else {
        alert('Incorrecto');
    }
}

function preguntaMaestria() {
    const respuesta5 = "No"
    const pregunta5 = prompt("¿Tengo el titulo de la Maestría?, Si / No");
    if (respuesta5.toLowerCase() === pregunta5.toLowerCase()) {
        alert("Respuesta correcta, muy bien")
        puntos += 1;
    } else { alert("Respuesta Incorrecta") }
}

function preguntaExperiencia() {
    const numeroMaxIntentos = 4;
    const numeroAAdivinar = 15;
    let contadorDeIntentos = 1;
    while (contadorDeIntentos <= numeroMaxIntentos) {
        const numeroPorUsuario = Number(prompt("¿Cuantos años de experiencia tengo como Analista de S.I ?, ingresa Números: "+numeroMaxIntentos+" intentos"));
    
        if (numeroPorUsuario === numeroAAdivinar) {
            alert("Felicidades!!! adivinaste amigo(a) tengo " + numeroAAdivinar+"años de experiencia")
            alert("Lo hiciste en " + contadorDeIntentos + " intentos");
            puntos += 1;
            break;
        } if (numeroPorUsuario > numeroAAdivinar) {
            alert(numeroPorUsuario + "  Estimación demasiado alta ");
        } else {
            alert(numeroPorUsuario + "  Estimación demasiado baja ")
    
        }
        contadorDeIntentos++;
        if (contadorDeIntentos === numeroMaxIntentos + 1) {
            alert("Llegaste al número max de intentos :(, Mi experiencia es de: "+numeroAAdivinar);
        }
    }
    
}

/*function preguntaColorFavorito() {
    const colorFavorito = ["Azul Marino", "Verde", "Turquesa", "Morado"];
    const numMaxIntento = 6;
    let coloringresado = prompt ("Adivina mi color favorito...!,Tienes " +numMaxIntento + " intentos..")
    for(let i=1; i<=numMaxIntento;i++) {
        for (let j=0; j< colorfavorito.length; j++) {
            if(coloringresado.toUpperCase() == colorfavorito[j].toUpperCase() ) {
             alert ("Acertaste !!! Felicitaciones!!");
             contadorDeIntentos++;
             puntos += 1;
             break;
            }
            else{
                coloringresado = prompt("No acertaste..! Sigue intentando te quedan " + (numMaxIntento-i) + " intentos. El color es:");
            }
        } if (i==numMaxIntento) {
            alert ("Mis colores Favoritos son: "+ colorfavorito +" Éxitos en tu opróximo intento ...!");
        }         
    }
}*/
function preguntaColorFavorito() {
    const colorFavorito = ["Azul Marino", "Verde", "Turquesa", "Morado"];
    const numMaxIntento = 6;
    let intentosRestantes = numMaxIntento;

    // Primer intento
    let coloringresado = prompt("Adivina mi color favorito... ¡Tienes " + intentosRestantes + " intentos!");

    for (let i = 1; i <= numMaxIntento; i++) {
        // Verifica si el color ingresado está en la lista de colores favoritos
        if (colorFavorito.map(color => color.toLowerCase()).includes(coloringresado.toLowerCase())) {
            alert("¡Acertaste! Felicitaciones, el color era " + coloringresado + ".");
            puntos += 1;  // Si tienes un contador de puntos
            break;
        } else if (i < numMaxIntento) {
            // Restan intentos, pero no es el último intento
            intentosRestantes--;
            coloringresado = prompt("No acertaste. Te quedan " + intentosRestantes + " intentos. Vuelve a intentarlo:");
        } else {
            // Último intento fallido
            alert("Lo siento, has agotado tus intentos. Mis colores favoritos son: " + colorFavorito.join(", ") + ".");
        }
    }
}

preguntaSegundoNombre();
preguntaTrabajoActualmente();
preguntaLugardeNacimiento();
preguntaIniciodeEstudios();
preguntaMaestria();
preguntaExperiencia();
preguntaColorFavorito();
alert (usuario+" Gracias por participar. Ud. tiene un Total de :  "+ puntos+"  Repuestas correctas");