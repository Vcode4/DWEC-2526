const folio = document.getElementById("folio");
const botonBorrar = document.getElementById("borrar");
const botonDesactivar = document.getElementById("desactivar");

let activo=true;

document.addEventListener("keydown", escribirLetra);

function escribirLetra(event){
     if (!activo) {
        return;
    }
    let letra = event.key;
    folio.innerHTML += letra;
}

document.addEventListener("click", borrarTexto);

function borrarTexto(){
    folio.innerHTML = "";
}

botonDesactivar.addEventListener("click", desactivarEscribir);

function desactivarEscribir() {
    activo = !activo;

    if (activo) {
        botonDesactivar.value = "Desactivar";
    } else {
        botonDesactivar.value = "Activar";
    }
}
