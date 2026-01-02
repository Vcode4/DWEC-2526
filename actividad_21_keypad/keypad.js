/*document.addEventListener("keydown",manejarTecla)

function manejarTecla(e){
    console.log(e.keycode);
    if(e.key =="r"){
        alert()
    }else{
        console.log("No has presionado la r");
    }
} /*/


const pad1=document.getElementById("pad1");
const pad2=document.getElementById("pad2");
const pad3=document.getElementById("pad3");
const pad4=document.getElementById("pad4");
const pad5=document.getElementById("pad5");
const pad6=document.getElementById("pad6");
const pad7=document.getElementById("pad7");
const pad8=document.getElementById("pad8");

const sonido1 = new Audio("kick.wav");
const sonido2 = new Audio("snare_digital.wav");
const sonido3 = new Audio("tom.wav");
const sonido4 = new Audio("techno.wav");
const sonido5 = new Audio("miau.wav");
const sonido6 = new Audio("guau.wav");
const sonido7 = new Audio("frog-click.wav");
const sonido8 = new Audio("stop.wav");


document.addEventListener("keydown", ponerSonido);

function ponerSonido(e){
    console.log(e.keycode);
    let tecla = e.key.toLowerCase();

    if(tecla === "q"){
        pad1.style.backgroundImage='url("bombo.png")';
        pad1.style.backgroundSize = "cover";
        sonido1.currentTime = 0;     // reinicia
        sonido1.play();              // reproduce
    }

    if (tecla === "w") {
        pad2.style.backgroundImage='url("snare.png")';
        pad2.style.backgroundSize = "cover";
        sonido2.currentTime = 0;
        sonido2.play();
    }

    if (tecla === "e") {
        pad3.style.backgroundImage='url("tom.png")';
        pad3.style.backgroundSize = "cover";
        sonido3.currentTime = 0;
        sonido3.play();
    }

    if (tecla === "r") {
        pad4.style.backgroundImage='url("techno.png")';
        pad4.style.backgroundSize = "cover";
        sonido4.currentTime = 0;
        sonido4.play();
    }

     if (tecla === "a") {
        pad5.style.backgroundImage='url("cat.png")';
        pad5.style.backgroundSize = "cover";
        pad5.style.background = "#cdaf17ff";
        sonido5.currentTime = 0;
        sonido5.play();
    }

     if (tecla === "s") {
        pad6.style.backgroundImage='url("perro.png")';
        pad6.style.backgroundSize = "cover";
        pad6.style.background = "#7473c4ff";
        sonido6.currentTime = 0;
        sonido6.play();
    }

    if (tecla === "d") {
        pad7.style.backgroundImage='url("click.png")';
        pad7.style.backgroundSize = "cover";
        pad7.style.background = "#82ec83ff";
        sonido7.currentTime = 0;
        sonido7.play();
    }
    if (tecla === "f") {
        pad8.style.backgroundImage='url("stop.png")';
        pad8.style.backgroundSize = "cover";
        pad8.style.background = "#ecb41cff";
        sonido8.currentTime = 0;
        sonido8.play();
    }
    }

    document.addEventListener("keyup", sueltaTecla);

    function sueltaTecla(e){
           let tecla = e.key.toLowerCase();

    if (tecla === "q") {
        pad1.style.background = "#db7d7d";
    }

    if (tecla === "w") {
        pad2.style.background = "#db7d7d";
    }

    if (tecla === "e") {
        pad3.style.background = "#db7d7d";
    }

     if (tecla === "r") {
        pad4.style.background = "#db7d7d";
    }

    if (tecla === "a") {
        pad5.style.background = "#db7d7d";
    }
    if (tecla === "s") {
        pad6.style.background = "#db7d7d";
    }
    if (tecla === "d") {
        pad7.style.background = "#db7d7d";
    }
    if (tecla === "f") {
        pad8.style.background = "#db7d7d";
    }
    }

    const coord = document.getElementById("coordenadas");

    document.addEventListener("mousemove",mostrarCoordenadas);

    function mostrarCoordenadas(e){
        //coord.innerText = "X: " +e.clientX + ", Y: " + e.clientY;
        coord.innerText = `X: ${e.clientX} , Y: ${e.clientY}`;
    }


