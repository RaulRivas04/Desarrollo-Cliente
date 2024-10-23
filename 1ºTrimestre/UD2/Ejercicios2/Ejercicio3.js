let contador = 60;
const intervalId = setInterval(function() {
    if (contador > 0) {
        document.write("Contador: " + contador + " segundos restantes");
        contador--;
    } else {
        document.write("¡Tiempo terminado!");
        clearInterval(intervalId);
    }
}, 1000);