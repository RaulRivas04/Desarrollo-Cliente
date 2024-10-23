function calcularFactorial(n) {
    let resultado = 1;
    for (let i = 1; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}

function mostrarTabla() {
    const tabla = document.getElementById('tablaFactorial');
    for (let i = 1; i <= 10; i++) {
        const fila = `<tr><td>${i}</td><td>${calcularFactorial(i)}</td></tr>`;
        tabla.innerHTML += fila;
    }
}

// Llamada a la función para mostrar la tabla al cargar la página
mostrarTabla();
