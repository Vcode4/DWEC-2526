
class Pokemon {
    constructor(nombre, vida, ataques, imagen) {
        this.nombre = nombre;
        this.vidaMax = vida;
        this.vida = vida;
        this.ataques = ataques;
        this.imagen = imagen;
    }

    recibirDaño(cantidad) {
        this.vida -= cantidad;
        if (this.vida < 0) this.vida = 0;
    }
}

class Legendario extends Pokemon {
    constructor(nombre, vida, ataques, imagen) {
        super(nombre, vida, ataques, imagen);
        this.esLegendario = true;
    }
}

let heroes = [
    new Pokemon("Pikachu", 100, [
        { nombre: "Impactrueno", daño: 15 },
        { nombre: "Placaje", daño: 10 },
        { nombre: "Rayo (Especial)", daño: 30 }
    ], "pikachu.png"),

    new Pokemon("Charizard", 130, [
        { nombre: "Garra Dragón", daño: 20 },
        { nombre: "Ascuas", daño: 15 },
        { nombre: "Lanzallamas (Especial)", daño: 35 }
    ], "charizard.png"),

    new Legendario("Mewtwo", 150, [
        { nombre: "Psicocorte", daño: 25 },
        { nombre: "Confusión", daño: 15 },
        { nombre: "Onda Mental (Especial)", daño: 40 }
    ], "mewtwo.png")
];

let villanos = [
    new Pokemon("Gengar", 110, [
        { nombre: "Lengüetazo", daño: 15 },
        { nombre: "Bola Sombra", daño: 20 },
        { nombre: "Tinieblas (Especial)", daño: 35 }
    ], "gengar.png"),

    new Pokemon("Houndoom", 120, [
        { nombre: "Colmillo Ígneo", daño: 20 },
        { nombre: "Mordisco", daño: 15 },
        { nombre: "Llamarada (Especial)", daño: 40 }
    ], "houndoom.png"),

    new Legendario("Darkrai", 150, [
        { nombre: "Pulso Umbrío", daño: 25 },
        { nombre: "Pesadilla", daño: 20 },
        { nombre: "Brecha Negra (Especial)", daño: 45 }
    ], "darkrai.png")
];

// VARIABLES
let heroeSeleccionado = null;
let villanoSeleccionado = null;
let turno = "heroe";
let esperandoNuevoHeroe = false;

// CONSOLA
function log(texto, tipo = "normal") {
    const consola = document.getElementById("consola");

    let clase = "";
    if (tipo === "heroe") clase = "log-heroe";
    if (tipo === "villano") clase = "log-villano";

    consola.innerHTML += `<span class="${clase}">> ${texto}</span><br>`;
    consola.scrollTop = consola.scrollHeight;
}

// GENERAR CARTAS DEL MAZO
function crearCarta(pokemon, contenedor, tipo) {
    const div = document.createElement("div");
    div.classList.add("carta");
    div.dataset.nombre = pokemon.nombre;

    div.innerHTML = cartaMazoHTML(pokemon);

    div.addEventListener("click", () => {
        if (tipo === "heroe" && pokemon.vida > 0) {

            // Si estamos eligiendo un nuevo Pokémon tras derrota
            if (esperandoNuevoHeroe) {
                heroeSeleccionado = pokemon;
                log(`Has enviado a ${pokemon.nombre} al combate`, "heroe");

                document.getElementById("carta-heroe").classList.remove("derrotado");
                document.getElementById("carta-heroe").innerHTML = cartaCombateHTML(pokemon);

                esperandoNuevoHeroe = false;
                turno = "villano";
                actualizarTurno();

                setTimeout(turnoVillano, 1000);
                return;
            }

            // Selección normal al inicio
            heroeSeleccionado = pokemon;
            log(`Has elegido a ${pokemon.nombre}`, "heroe");
            document.getElementById("carta-heroe").innerHTML = cartaCombateHTML(pokemon);
            mostrarAcciones();
        }
    });

    contenedor.appendChild(div);
}

function cartaMazoHTML(p) {
    return `
        <img src="${p.imagen}">
        <h3>${p.nombre}</h3>
        <p>Vida: ${p.vida}/${p.vidaMax}</p>
    `;
}

function actualizarMazo() {
    const todas = document.querySelectorAll(".carta");

    todas.forEach(carta => {
        const nombre = carta.dataset.nombre;

        let poke = heroes.find(p => p.nombre === nombre) ||
                   villanos.find(p => p.nombre === nombre);

        if (poke) {
            carta.innerHTML = cartaMazoHTML(poke);

            if (poke.vida <= 0) {
                carta.classList.add("derrotado");
            }
        }
    });
}
// CARTA PRINCIPAL
function cartaCombateHTML(p) {
    return `
        <img src="${p.imagen}" style="width:100%">
        <h3>${p.nombre}</h3>
        <p>Vida: ${p.vida}/${p.vidaMax}</p>
    `;
}

// EL VILLANO ELIGE SU POKÉMON
function elegirVillanoAutomatico() {
    villanoSeleccionado = villanos[Math.floor(Math.random() * villanos.length)];

    log(`El villano (ENTRENADOR) ha elegido a ${villanoSeleccionado.nombre}`, "villano");

    document.getElementById("carta-villano").innerHTML = cartaCombateHTML(villanoSeleccionado);
}

// CAMBIO DE POKÉMON DEL VILLANO
function villanoCambiaPokemon() {
    villanos = villanos.filter(p => p.vida > 0);

    if (villanos.length === 0) {
        return finCombate(heroeSeleccionado.nombre);
    }

    villanoSeleccionado = villanos[Math.floor(Math.random() * villanos.length)];

    log(`El villano cambia de Pokémon y envía a ${villanoSeleccionado.nombre}`, "villano");

    document.getElementById("carta-villano").classList.remove("derrotado");
    document.getElementById("carta-villano").innerHTML = cartaCombateHTML(villanoSeleccionado);

    actualizarMazo();

    turno = "villano";
    actualizarTurno();

    setTimeout(turnoVillano, 1000);
}
// ACCIONES
function mostrarAcciones() {
    const zona = document.getElementById("acciones");
    zona.innerHTML = "";

    heroeSeleccionado.ataques.forEach(ataque => {
        const btn = document.createElement("button");
        btn.textContent = ataque.nombre;

        btn.addEventListener("click", () => ejecutarAtaque(heroeSeleccionado, villanoSeleccionado, ataque));

        zona.appendChild(btn);
    });

    actualizarTurno();
}
// SISTEMA DE TURNOS
function ejecutarAtaque(atacante, objetivo, ataque) {
    if (turno !== "heroe") return;

    log(`${atacante.nombre} usa ${ataque.nombre} y causa ${ataque.daño} de daño`, "heroe");

    objetivo.recibirDaño(ataque.daño);
    actualizarCartas();
    actualizarMazo();

    if (objetivo.vida <= 0) {
        log(`${objetivo.nombre} ha sido derrotado`, "villano");
        log(`${atacante.nombre} ha derrotado a ${objetivo.nombre}`, "heroe");

        document.getElementById("carta-villano").classList.add("derrotado");

        return villanoCambiaPokemon();
    }

    turno = "villano";
    actualizarTurno();

    setTimeout(turnoVillano, 1000);
}

function turnoVillano() {
    const ataque = villanoSeleccionado.ataques[
        Math.floor(Math.random() * villanoSeleccionado.ataques.length)
    ];

    log(`El villano usa ${ataque.nombre} y causa ${ataque.daño} de daño`, "villano");

    heroeSeleccionado.recibirDaño(ataque.daño);
    actualizarCartas();
    actualizarMazo();

    if (heroeSeleccionado.vida <= 0) {
        log(`${heroeSeleccionado.nombre} ha sido derrotado`, "heroe");
        log(`${villanoSeleccionado.nombre} ha derrotado a ${heroeSeleccionado.nombre}`, "villano");

        document.getElementById("carta-heroe").classList.add("derrotado");

        // ¿Te quedan más Pokémon vivos?
        const heroesVivos = heroes.filter(p => p.vida > 0);

        if (heroesVivos.length === 0) {
            // No queda ninguno → gana el villano
            return finCombate(villanoSeleccionado.nombre);
        }

        // Sí quedan → puedes elegir otro
        esperandoNuevoHeroe = true;
        log("Elige otro Pokémon del mazo para continuar la batalla", "heroe");
        return;
    }

    turno = "heroe";
    actualizarTurno();
}

function actualizarTurno() {
    if (!heroeSeleccionado || !villanoSeleccionado) {
        document.getElementById("turno").textContent = "Elige tu Pokémon para empezar";
        return;
    }

    const turnoTexto = turno === "heroe"
        ? `Turno de ${heroeSeleccionado.nombre}`
        : `Turno de ${villanoSeleccionado.nombre}`;

    document.getElementById("turno").textContent = turnoTexto;
}

function actualizarCartas() {
    if (heroeSeleccionado) {
        document.getElementById("carta-heroe").innerHTML = cartaCombateHTML(heroeSeleccionado);
    }
    if (villanoSeleccionado) {
        document.getElementById("carta-villano").innerHTML = cartaCombateHTML(villanoSeleccionado);
    }
}

// FIN DEL COMBATE
function finCombate(ganador) {
    if (ganador === heroeSeleccionado?.nombre) {
        log(`¡${ganador} ha ganado el combate!`, "heroe");
    } else {
        log(`¡${ganador} ha ganado el combate!`, "villano");
    }

    document.getElementById("mensaje-final").classList.remove("oculto");
    document.getElementById("ganador").textContent = ganador + " ha ganado";
}

// INICIO
heroes.forEach(p => crearCarta(p, document.getElementById("mazo-heroes"), "heroe"));
villanos.forEach(p => crearCarta(p, document.getElementById("mazo-villanos"), "villano"));

elegirVillanoAutomatico();
actualizarTurno();

document.getElementById("reiniciar").addEventListener("click", () => location.reload());




