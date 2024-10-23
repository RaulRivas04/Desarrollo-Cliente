function lanzarDado() {
    return Math.floor(Math.random() * 6) + 1;
}

function simularLanzamientos() {
    // Array para contar cuántas veces aparece cada número del 1 al 6
    let contador = [0, 0, 0, 0, 0, 0];

    // Realizar 6000 lanzamientos
    for (let i = 0; i < 6000; i++) {
        let resultado = lanzarDado();
        contador[resultado - 1]++; // Incrementa la cuenta del valor correspondiente
    }

    // Mostrar los resultados usando document.write()
    document.write("Resultados de 6000 lanzamientos:");
    for (let i = 0; i < 6; i++) {
        document.write("El número " + (i + 1) + " salió " + contador[i] + " veces.<br>");
    }
}

lanzarDado();
simularLanzamientos();
