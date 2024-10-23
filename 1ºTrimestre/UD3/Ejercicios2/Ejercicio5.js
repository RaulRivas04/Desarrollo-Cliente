function paresImpares() {
    // Crear un array con 100 números aleatorios entre 1 y 1000
    let numeros = [];
    for (let i = 0; i < 100; i++) {
        numeros.push(Math.floor(Math.random() * 1000) + 1);
    }

    // Mostrar el array original
    console.log("Array original:", numeros);

    // Separar los números pares e impares
    let pares = numeros.filter(num => num % 2 === 0);
    let impares = numeros.filter(num => num % 2 !== 0);

    // Organizar el array: primero los pares, luego los impares
    let arrayOrdenado = [...pares, ...impares];

    // Mostrar el array reorganizado
    console.log("Array reorganizado (pares primero):", arrayOrdenado);
}

paresImpares();
