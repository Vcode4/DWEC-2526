var cuadradito = document.getElementById('cuadrado');//el id del div

function izquierda(){
    cuadradito.style.left="20px";
    cuadradito.style.backgroundColor="transparent";
    cuadradito.style.backgroundImage="url('zombie-minecraft.gif')";
    cuadradito.style.backgroundSize="cover";
}

function derecha(){
    cuadradito.style.left="1000px";
    cuadradito.style.backgroundColor="transparent";
    cuadradito.style.backgroundImage="url('minecraft-ghast.gif')";
    cuadradito.style.backgroundSize="cover";
}

function arriba(){
    cuadradito.style.top="20px";
    cuadradito.style.backgroundColor="transparent";
    cuadradito.style.backgroundImage="url('minecraft-creeper.gif')";
    cuadradito.style.backgroundSize="cover";
}

function abajo(){
    cuadradito.style.top="400px";
    cuadradito.style.backgroundColor="transparent";
    cuadradito.style.backgroundImage="url('bee-minecraft.gif')";
    cuadradito.style.backgroundSize="cover";
}

function volver(){
    cuadradito.style.left="50px";
    cuadradito.style.top="40px";
    cuadradito.style.backgroundColor="transparent";
    cuadradito.style.backgroundSize="cover";
    cuadradito.style.backgroundImage="url('steve-steve-dance.gif')";
}

