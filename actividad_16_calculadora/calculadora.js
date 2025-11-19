function sumar(){
    let operador1 = parseFloat(document.getElementById('operador1').value); 
    let operador2 = parseFloat(document.getElementById('operador2').value);

    let resultado= operador1+operador2;
    document.getElementById('resultado').innerHTML = "El resultado es: " + resultado;
    agregarLog(operador1 + " + " + operador2 + " = " + resultado, "blue");
    cambiarFondo(resultado);
}

function restar(){
    let operador1= parseFloat(document.getElementById('operador1').value);
    let operador2= parseFloat(document.getElementById('operador2').value);

    let resultado= operador1-operador2;
    document.getElementById('resultado').innerHTML = "El resultado es: " + resultado;
    agregarLog(operador1+ " - " + operador2 + " = " + resultado, "green");
    cambiarFondo(resultado);
}


function multiplicar(){
    let operador1 = parseFloat(document.getElementById('operador1').value);
    let operador2 = parseFloat(document.getElementById('operador2').value);
    let resultado = operador1 * operador2;

    document.getElementById('resultado').innerHTML = "El resultado es: " + resultado;
    agregarLog(operador1 + " * " + operador2 + " = " + resultado, "orange");
    cambiarFondo(resultado);
}

function dividir(){
    let operador1= parseFloat(document.getElementById('operador1').value);
    let operador2= parseFloat(document.getElementById('operador2').value);
    if(operador2 === 0){
         alert("No se puede dividir entre 0");
         return;
    }else{
        let resultado = operador1/operador2;
        document.getElementById('resultado').innerHTML = "El resultado es: " + resultado;
        agregarLog(operador1 + " / " + operador2 + " = " + resultado, "purple");
    }
    cambiarFondo(resultado);
}   

function agregarLog(mensaje, color){
    let logMensaje = document.getElementById('log');

    logMensaje.innerHTML += "<div style='color:" + color + "'>" + mensaje + "</div>";
}

function limpiarLog(){
    document.getElementById('log').innerHTML = "";
}

function cambiarFondo(resultado) {
    if (resultado % 2 === 0) { //PAR
        let color = "#" + Math.floor(Math.random()*16777215).toString(16);
        document.body.style.backgroundColor = color;
    } else{ //IMPAR 
        // Verde Heineken
        document.body.style.backgroundColor = "#008000";
    }
}