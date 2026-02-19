let info = "nombre:Luis Rodríguez; edad:40; Profesión:profesor";

//eliminar espacios
info = info.trim();

//dividir por ;
let partes = info.split(";");

//extraer solo el nombre

let nombreParte = partes [0].trim();

let posicion = nombreParte.indexOf(":"); 
let nombre = nombreParte.slice(posicion + 1);

console.log("Nombre: ", nombre);
console.log("Número de campos:", partes.length);




