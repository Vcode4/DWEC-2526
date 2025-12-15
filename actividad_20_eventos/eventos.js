let contador=0;

const caja=document.getElementById("cuadrado");
const resultado=document.getElementById("resultado");

caja.addEventListener("mouseover", anadirUno);

function anadirUno(){
    contador++;
    resultado.innerHTML = "Has pulsado " + contador + " veces el cuadro.";
    console.log(contador);
    if (contador % 10 === 0){ 
    alert("Has llegado a " + contador + " veces.");
}
}

caja.addEventListener("mouseout", colorAleatorio);

function colorAleatorio(){

    const r = Math.floor(Math.random()* 256);
    const g = Math.floor(Math.random()* 256);
    const b = Math.floor(Math.random()* 256);

    caja.style.backgroundColor = `rgb(${r},${g},${b})`;
    
    resultado.innerHTML += "<br> Color generado: RGB(" +r+ ", "+g+ ", "+b+")";
}

caja.addEventListener("click", manejaClick);

function manejaClick(asfd){
    //alert();
   console.log(asfd);
}

document.addEventListener("keydown",manejaTecla);

function manejaTecla(e){
    
    console.log(e)
}







