// 8.js
let n = parseInt(prompt("Introduce un número para calcular su factorial:"));
let factorial = 1;

for (let i = 1; i <= n; i++) {
    factorial *= i;
}

document.write("El factorial de " + n + " es: " + factorial);
