// Número aleatorio entre 0 y 1
var numero = Math.random();
document.write("Número aleatorio entre 0 y 1: " + numero + "<br>");

// Número aleatorio entre 100 y 200
var numero = Math.random() * (200 - 100) + 100;
document.write("Número aleatorio entre 100 y 200: " + numero + "<br>");

// Número Aleatorio entre el primer número y el segundo
let numero1 = parseInt(prompt("Introduce el primer número:"));
let numero2 = parseInt(prompt("Introduce el segundo número:"));

let min = Math.min(numero1, numero2);
let max = Math.max(numero1, numero2);
let n = Math.random() * (max - min) + min;
document.write("Número aleatorio entre numero1 y numero2: " + n + "<br>");
