// Ejercicio 2
function informacionCadena(cad_arg) {
    // Si la cadena es igual a sí misma en mayúsculas, es solo mayúsculas
    if (cad_arg === cad_arg.toUpperCase()) {
        return "La cadena está formada solo por mayúsculas.";
    }
    // Si la cadena es igual a sí misma en minúsculas, es solo minúsculas
    else if (cad_arg === cad_arg.toLowerCase()) {
        return "La cadena está formada solo por minúsculas.";
    }
    // Si no cumple ninguna de las dos, tiene una mezcla de mayúsculas y minúsculas
    else {
        return "La cadena tiene una mezcla de mayúsculas y minúsculas.";
    }
}

let cadena = prompt("Ingresa una cadena de texto:");

let resultado = informacionCadena(cadena);

document.write(resultado);