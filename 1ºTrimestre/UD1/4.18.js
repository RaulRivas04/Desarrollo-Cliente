//4.18

let numColumnas = parseInt(prompt("Introduce el número de columnas:"));
let numFilas = parseInt(prompt("Introduce el número de filas:"));
let alto = parseInt(prompt("Introduce la altura de las celdas (en píxeles):"));
let ancho = parseInt(prompt("Introduce el ancho de las celdas (en píxeles):"));

document.write('<table border="1" cellspacing="2" cellpadding="2" bgcolor="black">');

for (let i = 0; i < numFilas; i++) {
    document.write('<tr>');


    for (let j = 0; j < numColumnas; j++) {
        document.write('<td width="' + ancho + '" height="' + alto + '" bgcolor="white">&nbsp;</td>'); // Crear una celda
    }

    document.write('</tr>');
}
document.write('</table>');