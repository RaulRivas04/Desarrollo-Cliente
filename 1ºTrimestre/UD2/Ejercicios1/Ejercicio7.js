const tabla = document.getElementById('tabla');

for (let i = 0; i <= 10; i++) {
    const fila = document.createElement('tr');
    const celdaNumero = document.createElement('td');
    const celdaSeno = document.createElement('td');

    celdaNumero.textContent = i;
    celdaSeno.textContent = Math.sin(i).toFixed(4); // Redondeamos a 4 decimales

    fila.appendChild(celdaNumero);
    fila.appendChild(celdaSeno);
    tabla.appendChild(fila);
}
