var contenedor = document.getElementById("contenedor");
var boton = document.getElementById("boton");
var espera = document.getElementById("espera");

let tiempo = 5;
let intervalo;
let esperaTiempo = 3;

boton.disabled = true;

espera.innerHTML = "Empieza en: " + esperaTiempo;

let esperaIntervalo = setInterval(function() {
    esperaTiempo--; 
    if (esperaTiempo > 0) {
        espera.innerHTML = "Empieza en: " + esperaTiempo;
    } else {
        clearInterval(esperaIntervalo);

        setTimeout(function() {
            espera.innerHTML = "Ya puedes pulsar el botón";
            boton.disabled = false; 
        }, 1000);
    }
}, 1000);

boton.addEventListener("click", activarBoton);

function activarBoton() { 
    clearInterval(intervalo); 
    tiempo = 5;
    cuentaAtras();
    boton.disabled = true; 
} 

function cuentaAtras() {
    intervalo = setInterval(function () {
        contenedor.innerHTML = tiempo;
        tiempo--;

        if (tiempo < 0) {
            clearInterval(intervalo);

            setTimeout(function() {
                contenedor.style.backgroundImage = "url('boom.png')";
                contenedor.style.backgroundSize = "cover";
                contenedor.innerHTML = "";
                boton.disabled = false; 
            }, 500); 
        }
    },1000); 
}

