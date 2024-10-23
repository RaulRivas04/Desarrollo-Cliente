// Información de la pantalla (Ejercicio 2)
function extractScreenInfo() {
    const screenInfo = {
        'Ancho de Pantalla': screen.width + ' px',
        'Alto de Pantalla': screen.height + ' px',
        'Ancho Disponible': screen.availWidth + ' px',
        'Alto Disponible': screen.availHeight + ' px',
        'Profundidad de Color': screen.colorDepth + ' bits',
        'Orientación de Pantalla': (screen.orientation || {}).type || 'No soportado',
    };

    for (let key in screenInfo) {
        addRow('screen-info', key, screenInfo[key]);
    }
}
