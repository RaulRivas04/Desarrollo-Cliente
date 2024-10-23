// 7.js
let n = parseInt(prompt("Introduce el valor de N:"));
let suma = 0;

for (let i = 1; i <= n; i++) {
    suma += i;
}

document.write("La sumatoria de los primeros " + n + " números es: " + suma);
