// Función para obtener y mostrar la fecha y hora actual usando document.write
function mostrarFechaActual() {
    // Crear un objeto Date para la fecha actual
    const fechaActual = new Date();

    // Usar document.write para escribir directamente en el documento
    document.write(
        "Año actual: " + fechaActual.getFullYear() + "<br>" +
        "Mes actual: " + (fechaActual.getMonth() + 1) + "<br>" +
        "Día actual: " + fechaActual.getDate() + "<br>" +
        "Hora actual: " + fechaActual.getHours() + "<br>" +
        "Minutos actuales: " + fechaActual.getMinutes() + "<br>" +
        "Segundos actuales: " + fechaActual.getSeconds() + "<br>"
    );
}

// Llamar a la función para que escriba la fecha en el documento
mostrarFechaActual();

