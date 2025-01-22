// Pedir al usuario el tamaño de las celdas (el ancho será igual que el alto)
let tamanoCelda = parseInt(prompt("Introduce el tamaño de las celdas (en píxeles):"));

// Generar la tabla
document.write('<table border="1" cellspacing="0" cellpadding="0">');

// Usar dos bucles for anidados para crear el tablero de 8x8
for (let fila = 0; fila < 8; fila++) {
    document.write('<tr>'); // Crear una fila

    for (let columna = 0; columna < 8; columna++) {
        // Alternar colores entre blanco y negro
        if ((fila + columna) % 2 === 0) {
            document.write('<td width="' + tamanoCelda + '" height="' + tamanoCelda + '" bgcolor="white">&nbsp;</td>');
        } else {
            document.write('<td width="' + tamanoCelda + '" height="' + tamanoCelda + '" bgcolor="black">&nbsp;</td>');
        }
    }

    document.write('</tr>'); // Cerrar la fila
}

document.write('</table>'); // Cerrar la tabla
