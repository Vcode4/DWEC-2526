const palabra = "JAVASCRIPT";

let oculta = "_".repeat(palabra.length);

let intentos = 6;

const palabraOculta = document.getElementById("palabraOculta");
const intentosTexto = document.getElementById("intentos");
const mensaje = document.getElementById("mensaje");
const inputLetra = document.getElementById("letra");
const botonProbar = document.getElementById("botonProbar");
const partes = document.querySelectorAll(".muneco");
partes.forEach(p => p.style.display = "none");

palabraOculta.textContent = oculta.split("").join(" ");
intentosTexto.textContent = intentos;

botonProbar.addEventListener("click", function () {

    let letra = inputLetra.value.toUpperCase();
    inputLetra.value = "";

    if (letra === "" || !isNaN(letra)) {
        mensaje.textContent = "Introduce una letra válida";
        return;
    }

    if (palabra.includes(letra)) {
        let nueva = "";

        for (let i = 0; i < palabra.length; i++) {
            if (palabra.charAt(i) === letra) {
                nueva += letra;
            } else {
                nueva += oculta.charAt(i);
            }
        }

        oculta = nueva;
        mensaje.textContent = "¡Bien! La letra está.";

    } else {
        intentos--;
        mensaje.textContent = "Has fallado.";
        let parte = partes[6 - intentos - 1];
        if (parte) parte.style.display = "block"  
    }

    palabraOculta.textContent = oculta.split("").join(" ");
    intentosTexto.textContent = intentos;

    if (oculta === palabra) {
        mensaje.textContent = "¡Has ganado!";
        botonProbar.disabled = true;
    }

    if (intentos === 0) {
        mensaje.textContent = "Has perdido. La palabra era: " + palabra;
        botonProbar.disabled = true;
    }
 
});
