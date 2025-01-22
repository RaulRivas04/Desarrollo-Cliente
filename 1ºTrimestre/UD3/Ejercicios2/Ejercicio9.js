function lanzarDados() {
    return [Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1];
}

function simularLanzamientos() {
    let combinaciones = Array.from({ length: 6 }, () => Array(6).fill(0));
    let resultados = Array(13).fill(0);

    for (let i = 0; i < 36000; i++) {
        let [dado1, dado2] = lanzarDados();
        resultados[dado1 + dado2]++;
        combinaciones[dado1 - 1][dado2 - 1]++;
    }

    for (let i = 2; i <= 12; i++) {
        console.log(`Suma ${i}: ${resultados[i]} veces`);
    }

    console.log("\nTabla de combinaciones:");
    console.log("    1  2  3  4  5  6");
    for (let i = 0; i < 6; i++) {
        console.log(`${i + 1} | ${combinaciones[i].join(" ")}`);
    }
}

simularLanzamientos();
