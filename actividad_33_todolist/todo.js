const tareas = [];

const nombreTarea = document.getElementById("nombreTarea");
const descripcionTarea = document.getElementById("descripcion");
const fechaTarea = document.getElementById("fecha");
const listaTareas = document.getElementById("ListaTareas");

const crearTarea = document.getElementById("crearTarea");
const eliminarTodas = document.getElementById("eliminarTareas");

crearTarea.addEventListener("click", function(){

    const nuevaTarea = {
        nombre: nombreTarea.value,
        descripcion: descripcionTarea.value,
        fechaCreacion: new Date(fechaTarea.value),
        completada: false
    };

    tareas.push(nuevaTarea);

    mostrarTareas();

    nombreTarea.value = "";
    descripcionTarea.value = "";
    fechaTarea.value = "";
});


function mostrarTareas(){

    listaTareas.innerHTML = "";

    tareas.forEach(mifuncion);
        
        function mifuncion(tarea, indice){
        let claseColor = tarea.completada ? "completada" : "";

        listaTareas.innerHTML += `
            <li class="${claseColor}">
                <b>${tarea.nombre}</b><br>
                ${tarea.descripcion}<br>
                Fecha: ${tarea.fechaCreacion.toLocaleDateString()}<br>

                <button onclick="completarTarea(${indice})">Completar</button>
                <button onclick="borrarTarea(${indice})">Eliminar</button>
            </li>
        `;
    };
}

function completarTarea(indice){
    tareas[indice].completada = !tareas[indice].completada;
    mostrarTareas();
}

function borrarTarea(indice){
    tareas.splice(indice, 1);
    mostrarTareas();
}


eliminarTodas.addEventListener("click", function(){
    tareas.length = 0;
    mostrarTareas();
});