// 10.js
let num = parseInt(prompt("Introduce un número mayor o igual a 2:"));
let esPrimo = true;

if (num < 2) {
    document.write("El número debe ser mayor o igual a 2.");
} else {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            esPrimo = false;
            break;
        }
    }

    if (esPrimo) {
        document.write(num + " es un número primo.");
    } else {
        document.write(num + " no es un número primo.");
    }
}
