// 9.js
let num = parseInt(prompt("Introduce un número:"));
document.write("Los divisores de " + num + " son: <br>");

for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
        document.write(i + "<br>");
    }
}
