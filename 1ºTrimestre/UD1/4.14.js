//4.14

let numColumnas = parseInt(prompt("Introduce el número de columnas:"));
let alto = parseInt(prompt("Introduce la altura de las celdas (en píxeles):"));
let ancho = parseInt(prompt("Introduce el ancho de las celdas (en píxeles):"));

document.write('<table border="1" cellspacing="2" bgcolor="black">');
document.write('<tr bgcolor="white" height="' + alto + '">');

let i = 0;

while (i < numColumnas) {
    if (i % 2 == 0) {
        document.write('<td width="' + ancho + '" bgcolor="white">&nbsp;</td>');
    } else {
        document.write('<td width="' + ancho + '" bgcolor="black">&nbsp;</td>');
    }
    i++;
}

document.write('</tr>');
document.write('</table>');
