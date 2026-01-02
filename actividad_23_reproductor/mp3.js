let pantalla = document.getElementById("pantalla");
let play = document.getElementById("play");
let reset = document.getElementById("reset");
let mensaje = document.getElementById("mensaje");
let cancion = document.getElementById("cancion");

let segundos = 0;
let duracion = 0;
let intervalo;
let audio;

play.addEventListener("click", reproducir);
reset.addEventListener("click", reiniciar);

function reproducir() {
    clearInterval(intervalo);
    mensaje.innerHTML = "";

    if (audio) {
        audio.pause();
        audio.currentTime = 0;
    }
    segundos = 0;
    pantalla.innerHTML = segundos;

    if (cancion.value == "song1") {
        audio = new Audio("audio/Forget_Me_Nots.mp3");
        duracion = 20;
    }

    if (cancion.value == "song2") {
        audio = new Audio("audio/Ride_Like_The_Wind.mp3");
        duracion = 15;
    }

    if (cancion.value == "song3") {
        audio = new Audio("audio/Got_To_Be_Real.mp3");
        duracion = 20;
    }

    if (cancion.value == "song4") {
        audio = new Audio("audio/What_You_Won't_Do_For_Love.mp3");
        duracion = 15;
    }

    audio.play();
    intervalo = setInterval(function () {
        segundos++;
        pantalla.innerHTML = segundos;

        if (segundos == duracion) {
            clearInterval(intervalo);
            audio.pause();

            setTimeout(function () {
                mensaje.innerHTML = "Canción terminada";
            }, 500);
        }
    }, 1000);
}

function reiniciar() {
    clearInterval(intervalo);

    if (audio) {
        audio.pause();
        audio.currentTime = 0;
    }

    segundos = 0;
    pantalla.innerHTML = segundos;
    mensaje.innerHTML = "";
}
