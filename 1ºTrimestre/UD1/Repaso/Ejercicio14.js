// Cuadrado lleno
for (let i = 0; i < 5; i++) {
    document.write("*****<br>");
}
document.write("<br>");

// Cuadrado hueco
for (let i = 0; i < 5; i++) {
    if (i === 0 || i === 4) {
        document.write("*****<br>");
    } else {
        document.write("*   *<br>");
    }
}
document.write("<br>");

// Tablero de ajedrez
for (let i = 0; i < 8; i++) {
    let row = "";
    for (let j = 0; j < 8; j++) {
        if ((i + j) % 2 === 0) {
            row += "* ";
        } else {
            row += " ";
        }
    }
    document.write(row + "<br>");
}
document.write("<br>");

// Pirámide izquierda
for (let i = 1; i <= 5; i++) {
    let line = "";
    for (let j = 0; j < i; j++) {
        line += "*";
    }
    document.write(line + "<br>");
}
document.write("<br>");

// Pirámide centrada
for (let i = 1; i <= 5; i++) {
    let espacios = " ".repeat(5 - i);
    let estrellas = "*".repeat(2 * i - 1);
    document.write(espacios + estrellas + "<br>");
}
document.write("<br>");

// Pirámide invertida
for (let i = 5; i >= 1; i--) {
    document.write("*".repeat(i) + "<br>");
}
document.write("<br>");

// Diamante
for (let i = 1; i <= 5; i++) {
    let espacios = " ".repeat(5 - i);
    let estrellas = "*".repeat(2 * i - 1);
    document.write(espacios + estrellas + "<br>");
}
for (let i = 4; i >= 1; i--) {
    let espacios = " ".repeat(5 - i);
    let estrellas = "*".repeat(2 * i - 1);
    document.write(espacios + estrellas + "<br>");
}
