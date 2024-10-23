
//a
function invierteCadena(cad_arg) {
    let resultado = "";
   
    for (let i = cad_arg.length - 1; i >= 0; i--) {
        resultado += cad_arg[i];
    }
    return resultado
}

let x= prompt("Haz una cadena");
document.write("La cadena Invertida es: " +invierteCadena(x));


//b
function inviertePalabras(cad_arg) {
    let resultado = "";
    let cadenaTrasSplit = cad_arg.split(" ");
    for (let i = 0; i < cadenaTrasSplit.length; i++) {
        resultado += invierteCadena(cadenaTrasSplit[i]) + " ";
    }
   
    return resultado.trim(); // trim para eliminar el espacio extra al final
}

// Ejemplo de uso
document.write(inviertePalabras("Ejercicio segundo"));


//c
function encuentraPalabraMasLarga(cad_arg) {
    // Dividir la cadena en palabras usando un espacio como delimitador
    const palabras = cad_arg.split(" ");
    let maxLongitud = 0;

    // Iterar sobre cada palabra para encontrar la longitud máxima
    for (let i = 0; i < palabras.length; i++) {
        // Obtener la longitud de la palabra actual
        const longitudActual = palabras[i].length;
        // Actualizar maxLongitud si la longitud actual es mayor
        if (longitudActual > maxLongitud) {
            maxLongitud = longitudActual;
        }
    }
    return maxLongitud; // Retornar la longitud de la palabra más larga
}

let cadena1 = prompt("Ingresa una cadena de texto:");
let longitudPalabraMasLarga = encuentraPalabraMasLarga(cadena);
document.write("La longitud de la palabra más larga es: " + longitudPalabraMasLarga);


//d
function filtraPalabrasMasLargas(cad_arg, i) {

    const palabras = cad_arg.split(" ");
    let contador = 0;

    for (let palabra of palabras) {
        if (palabra.length > i) {
            contador++;
        }
    }
    return contador;
}


let cadena2 = prompt("Ingresa una cadena de texto:");
let longitudMinima = parseInt(prompt("Ingresa un número entero:"));
let cantidadPalabrasLargas = filtraPalabrasMasLargas(cadena2, longitudMinima);
document.write("Número de palabras más largas que " + longitudMinima + " " + "caracteres" + ": " + cantidadPalabrasLargas);


//e
function cadenaBienFormada(cad_arg) {
    // Verificar si la cadena está vacía
    if (cad_arg.length === 0) return "";

    // Convertir la primera letra a mayúscula y el resto a minúscula
    return cad_arg.charAt(0).toUpperCase() + cad_arg.slice(1).toLowerCase();
}

let cadenaInput = prompt("Ingresa una cadena:");
let cadenaFormateada = cadenaBienFormada(cadenaInput);
document.write("Cadena bien formada: " + cadenaFormateada);
