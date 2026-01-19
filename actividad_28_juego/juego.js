//FASE 1
let contenedor = document.getElementById("contenedor")
let marcador= document.getElementById("marcador")
marcador.className= "marcador"

let intervalo = null;

let posicionX = Math.floor(Math.random() * 400);
let posicionY = Math.floor(Math.random() * 200);

let velocidadX = Math.floor(Math.random() * 4) + 1;
let velocidadY = Math.floor(Math.random() * 4) + 1;

let posicion2X = Math.floor(Math.random() * 350);
let posicion2Y = Math.floor(Math.random() * 150);

let velocidad2X = Math.floor(Math.random() *4) + 1;
let velocidad2Y = Math.floor(Math.random() *4) + 1;

//con esto se randomiza la direccion
if (Math.random() <0.5) velocidadX = -velocidadX;
if (Math.random() <0.5) velocidadY = -velocidadY;

if (Math.random() <0.5) velocidad2X = -velocidad2X;
if (Math.random() <0.5) velocidad2Y = -velocidad2Y;


//BOTON EMPEZAR
let empezar = document.createElement("input");
marcador.appendChild(empezar)
empezar.setAttribute("type", "button");
empezar.className="boton"
empezar.setAttribute("value", "Empezar")

empezar.addEventListener("click", empezarJuego);

function empezarJuego(){
    clearInterval(intervalo);
    contenedor.appendChild(sprite1);
    contenedor.appendChild(sprite2);
    intervalo = setInterval(moverSprites, 20);
}

//BOTON PAUSAR
let pausar = document.createElement("input");
marcador.appendChild(pausar)
pausar.setAttribute("type", "button");
pausar.className="boton"
pausar.setAttribute("value", "Pausar")
pausar.addEventListener("click", pausarJuego);

function pausarJuego(){
    clearInterval(intervalo);
}

//BOTON REINICIAR
let reiniciar = document.createElement("input");
marcador.appendChild(reiniciar)
reiniciar.setAttribute("type", "button");
reiniciar.className="boton"
reiniciar.setAttribute("value", "Reiniciar")

reiniciar.addEventListener("click", reiniciarJuego);

function reiniciarJuego(){
    clearInterval(intervalo);

     if (contenedor.contains(sprite1)) {
        contenedor.removeChild(sprite1);
    }
    if (contenedor.contains(sprite2)) 
        contenedor.removeChild(sprite2);
}

//FASE 2
let sprite1= document.createElement("div")
sprite1.className= "sprite1"

let sprite2= document.createElement("div")
sprite2.className= "sprite2"

sprite1.addEventListener("click", matarSprite1);
sprite2.addEventListener("click", matarSprite2);

function matarSprite1(){
    contenedor.removeChild(sprite1);

    setTimeout(function () { 
        posicionX = Math.random()* 400;
        posicionY = Math.random()* 200;
        velocidadX = (Math.random() * 4 + 1) *(Math.random()< 0.5 ? -1 : 1);
        velocidadY = (Math.random() * 4 + 1) *(Math.random()< 0.5 ? -1 : 1); 
        contenedor.appendChild(sprite1); 
    }, 1000); 
}

function matarSprite2(){
    contenedor.removeChild(sprite2);

    setTimeout(function () { 
        posicion2X = Math.random() * 400;
        posicion2Y = Math.random() * 200;
        velocidad2X = (Math.random() * 4 + 1) *(Math.random()< 0.5 ? -1 : 1);
        velocidad2Y = (Math.random() * 4 + 1) *(Math.random()< 0.5 ? -1 : 1); 
        contenedor.appendChild(sprite2); 
    }, 1000);
}


//MOVER SPRITES

function moverSprites() {
    moverSprite1();
    moverSprite2();
}

function moverSprite1() {
    posicionX+= velocidadX;
    posicionY+= velocidadY;

    sprite1.style.left = posicionX + "px";
    sprite1.style.top = posicionY + "px";

    if (posicionX <= 0 || posicionX >= 550) {
        velocidadX = -velocidadX;
    }

    if (posicionY <= 0 || posicionY >= 350) {
        velocidadY = -velocidadY;
    }
}

function moverSprite2() {

    posicion2X += velocidad2X;
    posicion2Y += velocidad2Y;

    sprite2.style.left = posicion2X + "px";
    sprite2.style.top  = posicion2Y + "px";

    if (posicion2X <= 0 || posicion2X >= 550) {
        velocidad2X = -velocidad2X;
    }

    if (posicion2Y <= 0 || posicion2Y >= 350) {
        velocidad2Y = -velocidad2Y;
    }
}



















