let contadorClicks = 0;
const sonido = new Audio('teletransporte.mp3');
let ultimaX = 100;
const goku = {

    transformacion(f){
        const personaje = document.getElementById("goku");
        

        switch(f){
            case 1:
                personaje.style.backgroundImage = "url('goku_normal.png')";
                console.log("Goku es normal");
                break;

            case 2:
                personaje.style.backgroundImage = "url('ssj1.png')";
                console.log("Goku Super Saiyan 1");
                break;

            case 3:
                personaje.style.backgroundImage = "url('goku_ssj2.png')";
                console.log("Goku Super Saiyan 2");
                break;

            case 4:
                personaje.style.backgroundImage = "url('goku_ssj3.png')";
                console.log("Goku Super Saiyan 3");
                break;
        }
    },

    transformacionClicks(){
        if (contadorClicks > 14 ) return 4; // SSJ3
        if (contadorClicks > 9) return 3; // SSJ2
        if (contadorClicks > 4)  return 2; // SSJ1
        return 1; // Normal
    },

    teletransportar(x, y){
        
        const personaje = document.getElementById("goku");

        personaje.style.left = x + "px";
        personaje.style.top = y + "px";

      
        const faseActual = this.transformacionClicks();

       //voltear imagen segun la direccion del movimiento
       if (x > ultimaX) {
         personaje.style.transform = "scaleX(1)";
         } else {
             personaje.style.transform = "scaleX(-1)"; 
        } 
        ultimaX = x; 

        this.transformacion(faseActual);

        
        if (contadorClicks > 19) {
            contadorClicks = 0;
            document.getElementById("clicks").textContent = "Clicks: 0";
            
            this.transformacion(1);
            console.log("Reinicio: vuelve a fase normal");
        }
        
        sonido.currentTime = 0; 
        sonido.play();
   
    }
};


document.addEventListener("click", function(event){
    contadorClicks++;
    const musica = document.getElementById("musica");
    musica.play();
    document.getElementById("clicks").textContent = "Clicks: " + contadorClicks;

    goku.teletransportar(event.clientX, event.clientY);
});


