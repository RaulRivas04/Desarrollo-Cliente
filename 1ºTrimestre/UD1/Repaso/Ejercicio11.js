// 11.js
let num = parseInt(prompt("Introduce un número:"));
let sumaDivisores = 0;

for (let i = 1; i < num; i++) {
    if (num % i === 0) {
        sumaDivisores += i;
    }
}

if (sumaDivisores === num) {
    document.write(num + " es un número perfecto.");
} else {
    document.write(num + " no es un número perfecto.");
}
