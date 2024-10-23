// Espera a que el documento esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('enviar').addEventListener('click', formatearPalabra);
});

function formatearPalabra() {
    // Obtener la palabra del input
    const palabra = document.getElementById('entrada').value;
    const longitud = palabra.length;
    let resultado = '';

    // Imprimir la primera fila
    resultado += palabra.split('').join(' ') + '\n';

    // Imprimir las letras en las siguientes filas
    for (let i = 1; i < longitud; i++) {
        // Crear una línea con espacios
        let line = Array((longitud * 2) - 1).fill(' '); // Espacios para la longitud máxima
        line[i * 2 - 1] = palabra[i]; // Posición de la letra
        line[longitud * 2 - 2 - i * 2] = palabra[0]; // Repetir la primera letra en reverso
        resultado += line.join('') + '\n';
    }

    // Imprimir la palabra en reverso
    resultado += palabra.split('').reverse().join(' ');

    // Mostrar el resultado en el elemento 'resultado'
    document.getElementById('resultado').textContent = resultado;
}
