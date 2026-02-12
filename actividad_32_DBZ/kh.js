let personajesKH = ["Sora", "Riku", "Kairi"];

function actualizar() {
  let texto = personajesKH.join(", ");
  document.getElementById("informacion").textContent=
    "Personajes: " + texto;
}

function agregar() {
  let nombre = document.getElementById("nombre").value;
  if (nombre !== "") {
    personajesKH.push(nombre);
    actualizar();
  }
}

function eliminarUltimo() {
  personajesKH.pop();
  actualizar();
}

function agregarInicio() {
  let nombre = document.getElementById("nombre").value;
  if (nombre !== "") {
    personajesKH.unshift(nombre);
    actualizar();
  }
}

function eliminarPrimero() {
  personajesKH.shift();
  actualizar();
}

function ordenar() {
  personajesKH.sort();
  actualizar();
}

function limpiar() {
  personajesKH = [];
  actualizar();
}

// imprimir lista inicial
actualizar();