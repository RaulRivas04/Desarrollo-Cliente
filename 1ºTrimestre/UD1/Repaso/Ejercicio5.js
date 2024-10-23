// 5.js
let numero = prompt("Introduce un número:");
let suma = 0;
let esNumeroValido = /^\d+$/.test(numero); // Validar que solo contiene dígitos

if (esNumeroValido) {
    for (let i = 0; i < numero.length; i++) {
        suma += parseInt(numero[i]);
    }
    document.write("La suma de los dígitos es: " + suma);
} else {
    document.write("Por favor, introduce un número válido.");
}
