// Función para calcular y mostrar las fechas
function mostrarFechas() {
    // Crear el objeto Date para la fecha actual
    const fechaHoy = new Date();

    // Crear fecha 85 días después de la fecha actual
    const fecha85 = new Date(fechaHoy);
    fecha85.setDate(fechaHoy.getDate() + 85);

    // Crear fecha 187 días antes de la fecha actual
    const fecha187 = new Date(fechaHoy);
    fecha187.setDate(fechaHoy.getDate() - 187);

    // Añadir 2 años a la fecha 85 días después
    fecha85.setFullYear(fecha85.getFullYear() + 2);

    // Restar 24 horas a la fecha 187 días antes
    fecha187.setHours(fecha187.getHours() - 24);

    // Calcular la diferencia entre las dos fechas en milisegundos
    const fechaResto = fecha85 - fecha187;

    // Mostrar los resultados usando document.write
    document.write("Fecha de hoy: " + fechaHoy + "<br>");
    document.write("Fecha 85 días después (más 2 años): " + fecha85 + "<br>");
    document.write("Fecha 187 días antes (menos 24 horas): " + fecha187 + "<br>");
    document.write("Diferencia entre fecha85 y fecha187 (en milisegundos): " + fechaResto + "<br>");
}

// Llamar a la función para mostrar los resultados
mostrarFechas();
