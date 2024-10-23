// 6.js
let n = parseInt(prompt("Introduce el valor de N:"));
let m = parseInt(prompt("Introduce el valor de M:"));
let suma = 0;

for (let i = n; i <= m; i++) {
    if (i % 2 === 0) {
        suma += i;
    }
}

document.write("La suma de todos los números pares entre " + n + " y " + m + " es: " + suma);
