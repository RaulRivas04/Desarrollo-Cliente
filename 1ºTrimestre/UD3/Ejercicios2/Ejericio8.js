function lanzarDados() {
    // Simular el lanzamiento de dos dados
    let dado1 = Math.floor(Math.random() * 6) + 1; // Número aleatorio entre 1 y 6
    let dado2 = Math.floor(Math.random() * 6) + 1; // Número aleatorio entre 1 y 6
    return dado1 + dado2; // Devolver la suma de los dos dados
}

function simularLanzamientos() {
    let resultados = new Array(13).fill(0); // Array para contar las sumas (de 2 a 12)

    // Realizar 36,000 lanzamientos
    for (let i = 0; i < 36000; i++) {
        let suma = lanzarDados();
        resultados[suma]++; // Incrementar la cuenta para la suma obtenida
    }

    // Mostrar el número de veces que aparece cada suma
    for (let i = 2; i <= 12; i++) {
        console.log(`Suma ${i}: ${resultados[i]} veces`);
    }
}

// Ejecutar la simulación
simularLanzamientos();
