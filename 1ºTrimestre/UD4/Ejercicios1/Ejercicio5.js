function crearCanvas() {
    const canvas = document.getElementById("canvas");
    const tabla = document.createElement("table");

    for (let i = 0; i < 100; i++) {
        const fila = document.createElement("tr");
        for (let j = 0; j < 100; j++) {
            const celda = document.createElement("td");

            celda.addEventListener("mousemove", (event) => pintarCelda(event, celda));

            celda.addEventListener("mousedown", (event) => pintarCelda(event, celda));

            fila.appendChild(celda);
        }
        tabla.appendChild(fila);
    }
    canvas.appendChild(tabla);
}

function pintarCelda(event, celda) {
    if (event.ctrlKey) {
        celda.style.backgroundColor = "red";
    } 
    else if (event.shiftKey) {
        celda.style.backgroundColor = "blue";
    }
    else if (event.altKey) {
        celda.style.backgroundColor = "white";
    }
}

function borrarTodo() {
    const celdas = document.querySelectorAll("#canvas td");
    celdas.forEach(celda => {
        celda.style.backgroundColor = "white";
    });
}

window.onload = function() {
    crearCanvas();

    const btnBorrar = document.getElementById("borrarCanvas");
    btnBorrar.addEventListener("click", borrarTodo);
};
