const folio = document.getElementById("folio");
const deleteButton = document.getElementById("borrar");

document.addEventListener("keydown", escribirLetra);

function escribirLetra(event){
    let letra = event.key;
    folio.innerHTML += letra;
}

document.addEventListener("click", borrarTexto);

function borrarTexto(){
    folio.innerHTML = "";
}

