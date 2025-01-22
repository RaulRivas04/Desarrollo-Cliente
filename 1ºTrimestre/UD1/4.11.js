//4.11

let numColumnas = parseInt(prompt("Introduce el número de columnas:"));
let alto = parseInt(prompt("Introduce la altura de las celdas (en píxeles):"));
let ancho = parseInt(prompt("Introduce el ancho de las celdas (en píxeles):"));

document.write('<table border="1" cellspacing="2" bgcolor="black">');
document.write('<tr bgcolor="white" height="' + alto + '">');

for (let i = 0; i < numColumnas; i++) {
    document.write('<td width="' + ancho + '">&nbsp;</td>');
}

document.write('</tr>');
document.write('</table>');