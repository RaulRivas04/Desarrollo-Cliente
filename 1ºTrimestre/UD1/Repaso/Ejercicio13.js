// 13.js
let n = parseInt(prompt("Introduce el valor de N:"));
let perfectos = [];

function esPerfecto(num) {
    let suma = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) suma += i;
    }
    return suma === num;
}

let num = 2;
while (perfectos.length < n) {
    if (esPerfecto(num)) {
        perfectos.push(num);
    }
    num++;
}

document.write("Los primeros " + n + " números perfectos son: " + perfectos.join(", "));
