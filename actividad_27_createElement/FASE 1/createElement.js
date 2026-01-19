
//FASE 1
// padre
let padre = document.getElementById("padre")

//hijo 1
let hijo1= document.createElement("div")
hijo1.innerHTML= "paco paco"
padre.appendChild(hijo1) //meter el hijo al padre

//hijo2
let hijo2 = document.createElement("div")
hijo2.className= "circulo"
hijo2.innerHTML= "O"

padre.appendChild(hijo2)

//hijo22

let hijo22 = document.createElement("div")
hijo22.className= "circuloRojo"

padre.appendChild(hijo22)

//hijo3 y nietos
let hijo3 = document.createElement("ul")
let nieto1 = document.createElement("li")
let nieto2 = document.createElement("li")

hijo3.innerHTML= "Caballeros del Zodiaco"
nieto1.innerHTML= "Seiya"
nieto2.innerHTML = "Sergiu"

hijo3.appendChild(nieto1)
hijo3.appendChild(nieto2)
padre.appendChild(hijo3)

//hijo5
let hijo5 = document.createElement("div")
hijo5.className= "cuadrado"
padre.appendChild(hijo5)

//MATAR HIJO

let cain = document.createElement("input");
padre.appendChild(cain)
cain.setAttribute("type", "button");
cain.className="circulo"
cain.setAttribute("value", "matar hijo")

cain.addEventListener("click", borrarHijo);

function borrarHijo(){
    padre.removeChild(hijo22);
}

//CREAR HIJO

let crear = document.createElement("input");
padre.appendChild(crear)
crear.setAttribute("type", "button");
crear.className="cuadrado"
crear.setAttribute("value", "Crear hijo")

crear.addEventListener("click", crearHijo);

function crearHijo(){
    padre.appendChild(hijo22);
}

//FASE 2

//FASE 3
//crear una aplicación que al cargarse cree 5 sprites en posición aleatoria,  un botón que los borre a todos y un botón que los vuelva a crear
//Nota: los sprites deben ser "un personaje", puede ser con un fondo png, un gif o similar
//Nota2: No se pueden usar colección de elementos con queryselectorAll o similar, comprueba con el profesor los métodos que has utilizado


