//'use strict';

const respuestas = ["No", "Si", "Si", "No", "No"];
const numeroMaxIntentos = 4;
const numeroAAdivinar = 15;
const colorFavorito = ["Azul Marino", "Verde", "Turquesa", "Morado"];
const numMaxIntento = 6;

let puntos = 0;
let usuario = prompt("Hola; ¿Cuál es tu nombre/apodo?");
alert('Bienvenido, mucho gusto ' + usuario);

// Función para hacer una pregunta y evaluar la respuesta
function hacerPregunta(pregunta, respuestaCorrecta) {
    const respuestaUsuario = prompt(pregunta);
    if (respuestaUsuario.toLowerCase() === respuestaCorrecta.toLowerCase()) {
        alert("Respuesta Correcta");
        return 1; // Retorna 1 punto si es correcta
    } else {
        alert("Respuesta Incorrecta");
        return 0;
    }
}

// Preguntas de Sí/No
function preguntasIniciales() {
    puntos += hacerPregunta("¿Tengo un segundo nombre? Si / No", respuestas[0]);
    puntos += hacerPregunta("¿Trabajo actualmente? Si / No", respuestas[1]);
    puntos += hacerPregunta("¿Nací en Ayacucho? Si / No", respuestas[2]);
    puntos += hacerPregunta("¿Inicié a estudiar Ingeniería en Lima? Si / No", respuestas[3]);
    puntos += hacerPregunta("¿Tengo el título de la Maestría? Si / No", respuestas[4]);
    alert("Gracias " + usuario + ". En esta primera parte, tienes " + puntos + " respuestas correctas.");
}

// Función para adivinar un número con intentos limitados
function adivinarNumero() {
    let intentos = 1;
    while (intentos <= numeroMaxIntentos) {
        const numeroPorUsuario = Number(prompt("¿Cuántos años de experiencia tengo como Analista de S.I? Tienes " + (numeroMaxIntentos - intentos + 1) + " intentos"));
        
        if (numeroPorUsuario === numeroAAdivinar) {
            alert("¡Felicidades! Adivinaste, tengo " + numeroAAdivinar + " años de experiencia.");
            alert("Lo hiciste en " + intentos + " intentos.");
            puntos += 1;
            break;
        } else if (numeroPorUsuario > numeroAAdivinar) {
            alert(numeroPorUsuario + " es demasiado alto.");
        } else {
            alert(numeroPorUsuario + " es demasiado bajo.");
        }

        intentos++;
        if (intentos > numeroMaxIntentos) {
            alert("Llegaste al número máximo de intentos. Mi experiencia es de " + numeroAAdivinar + " años.");
        }
    }
}

// Función para adivinar el color favorito con intentos limitados
function adivinarColorFavorito() {
    let intentoColor = prompt("Adivina mi color favorito. Tienes " + numMaxIntento + " intentos.");
    for (let i = 1; i <= numMaxIntento; i++) {
        if (colorFavorito.some(color => color.toLowerCase() === intentoColor.toLowerCase())) {
            alert("¡Acertaste! Felicitaciones.");
            puntos += 1;
            break;
        } else if (i === numMaxIntento) {
            alert("No acertaste. Mis colores favoritos son: " + colorFavorito.join(", ") + ". ¡Éxitos en tu próximo intento!");
        } else {
            intentoColor = prompt("No acertaste. Sigue intentando, te quedan " + (numMaxIntento - i) + " intentos.");
        }
    }
}

// Ejecutar el juego
preguntasIniciales();
adivinarNumero();
adivinarColorFavorito();

alert(usuario + " gracias por participar. Tienes un total de " + puntos + " respuestas correctas.");
Mejora del código: