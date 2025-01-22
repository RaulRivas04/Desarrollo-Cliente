// 12.js
let n = parseInt(prompt("Introduce el valor de N:"));
let primos = [];

function esPrimo(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return num >= 2;
}

let contador = 2;
while (primos.length < n) {
    if (esPrimo(contador)) {
        primos.push(contador);
    }
    contador++;
}

document.write("Los primeros " + n + " números primos son: " + primos.join(", "));
