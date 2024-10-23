// Ejercicio 7

function esPalindromo(cad_arg) {
    // Convertimos la cadena a minúsculas y eliminamos espacios y caracteres no alfabéticos
    cad_arg = cad_arg.toLowerCase().replace(/[^a-z]/g, '');
    let longitud = cad_arg.length;

    // Comparamos los caracteres de la cadena
    for (let i = 0; i < longitud / 2; i++) {
        if (cad_arg[i] !== cad_arg[longitud - 1 - i]) {
            return false;  // No es un palíndromo si hay una discrepancia
        }
    }
    return true;  // Es un palíndromo si todos los caracteres coinciden
}

// Solicita al usuario ingresar una cadena de texto
let cadena = prompt("Ingresa una cadena de texto:");

// Verifica si la cadena es un palíndromo y almacena el resultado
let resultado = esPalindromo(cadena);

document.write("La cadena \"" + cadena + "\" " + (resultado ? 'es' : 'no es') + " un palíndromo.");
