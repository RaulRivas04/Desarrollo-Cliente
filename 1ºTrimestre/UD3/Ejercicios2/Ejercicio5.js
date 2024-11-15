function paresImpares() {
    // Crear un array de 100 números aleatorios del 1 al 1000
    let numeros = Array.from({ length: 100 }, () => Math.floor(Math.random() * 1000) + 1);
  
    // Mostrar el contenido original del array
    console.log("Array original:", numeros);
  
    // Separar los números en pares e impares
    let pares = numeros.filter(num => num % 2 === 0);
    let impares = numeros.filter(num => num % 2 !== 0);
  
    // Combinar los pares e impares
    let organizado = [...pares, ...impares];
  
    // Mostrar el array organizado
    console.log("Array organizado (pares primero, impares después):", organizado);
  }
  
  // Llamar a la función
  paresImpares();
  