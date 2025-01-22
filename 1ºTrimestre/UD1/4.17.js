//4.17

document.write('<h2>Tablas de Multiplicar</h2>');

for (let i = 1; i <= 10; i++) {
    document.write('<h3>Tabla del ' + i + '</h3>'); 
    for (let j = 1; j <= 10; j++) {
        document.write(i + ' x ' + j + ' = ' + (i * j) + '<br>'); 
    }
    document.write('<br>'); 
}