let resultado = document.getElementById("resultado");

const proverbios = [
    "No hay mal que cien años dure",
    "Más vale pájaro en mano que ciento volando",
    "A caballo regalado no le mires el diente",
    "Ojos que no ven, corazón que no siente (pero el del dragon si)",
    "El hombre que rompio el corazón a un dragon será castigado con una maldición",
    "Al mal tiempo, buena cara"
  ];

let textoProverbio = document.createElement("p");

resultado.appendChild(textoProverbio);

let fortune = document.createElement("input");
fortune.setAttribute("type", "button");
fortune.setAttribute("value", "Fortune");
resultado.appendChild(fortune);

for(let i=0; i<proverbios.length; i++){
    console.log(proverbios[i]);

}

proverbios.push("Al que madruga, Dios lo ayuda");

fortune.addEventListener("click", mostrarProverbio);

function mostrarProverbio() {
  let indice = Math.floor(Math.random() * proverbios.length);
  textoProverbio.textContent = proverbios[indice];
}



