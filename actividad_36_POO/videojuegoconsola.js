class Pokemon {
    constructor(nombre, nivel) {
        this.nombre = nombre;
        this.nivel = nivel;
        this.vida = nivel * 5;
    }

    atacar(objetivo) {
        objetivo.vida -= 8;   
        if (objetivo.vida < 0) objetivo.vida = 0;
    }

}

class Legendario extends Pokemon {
    constructor(nombre, nivel) {
        super(nombre, nivel);
    }

    atacar(objetivo) {
        objetivo.vida -= 20;   
        if (objetivo.vida < 0) objetivo.vida = 0;
    }  
}

let rayquaza = new Legendario("Rayquaza", 100);
let pikachu = new Pokemon("Pikachu", 70);

let combateTerminado = false;

function actualizarVista() {

    document.getElementById("nombre1").innerHTML =
        `${rayquaza.nombre}<br>(Nivel ${rayquaza.nivel})`;

    document.getElementById("nombre2").innerHTML =
        `${pikachu.nombre}<br>(Nivel ${pikachu.nivel})`;

    let vidaMax1 = rayquaza.nivel * 5;
    let vidaMax2 = pikachu.nivel * 5;

    let porcentaje1 = (rayquaza.vida / vidaMax1) * 100;
    let porcentaje2 = (pikachu.vida / vidaMax2) * 100;

    document.getElementById("vida1-barra").style.width = porcentaje1 + "%";
    document.getElementById("vida2-barra").style.width = porcentaje2 + "%";

    document.getElementById("vida1-barra").style.background =
        porcentaje1 < 30 ? "red" :
        porcentaje1 < 60 ? "orange" : "limegreen";

    document.getElementById("vida2-barra").style.background =
        porcentaje2 < 30 ? "red" :
        porcentaje2 < 60 ? "orange" : "limegreen";
}

function comprobarGanador() {
    if (rayquaza.vida <= 0) {
        mostrarGanador("¡Pikachu ha ganado!");
    }
    if (pikachu.vida <= 0) {
        mostrarGanador("¡Rayquaza ha ganado!");
    }
}

function mostrarGanador(texto) {
    combateTerminado = true;
    document.getElementById("ganador").innerHTML = texto;
    document.getElementById("mensaje-final").classList.remove("oculto");
}

document.getElementById("atacar1").addEventListener("click", function () {
    if (combateTerminado) return;

    rayquaza.atacar(pikachu);
    actualizarVista();
    comprobarGanador();
});

document.getElementById("atacar2").addEventListener("click", function () {
    if (combateTerminado) return;

    pikachu.atacar(rayquaza); 
    actualizarVista();
    comprobarGanador();
});


document.addEventListener("keydown", function (event) {

    if (combateTerminado) return;

    if (event.code === "KeyA") {
        rayquaza.atacar(pikachu);
    }

    if (event.code === "KeyL") {
        pikachu.atacar(rayquaza);
    }

    actualizarVista();
    comprobarGanador();
});

document.getElementById("reiniciar").addEventListener("click", function () {

    rayquaza.vida = rayquaza.nivel * 5;
    pikachu.vida = pikachu.nivel * 5;

    combateTerminado = false;

    document.getElementById("mensaje-final").classList.add("oculto");

    actualizarVista();
});

actualizarVista();

