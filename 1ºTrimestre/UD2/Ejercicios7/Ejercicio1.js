function FuncionLocalizacion(posicion) {
    console.log("La Geolocalización se ha activado");

    // Obtenemos las coordenadas del usuario
    const lat = posicion.coords.latitude;
    const lon = posicion.coords.longitude;

    // Limpiamos el contenido anterior de la página para evitar duplicados
    document.body.innerHTML = "";

    // Mostramos la latitud y longitud en la página
    document.write("Estás en " + lat + " , " + lon);

    // Crear o actualizar el mapa en la ubicación del usuario
    const map = L.map('map').setView([lat, lon], 13);

    // Agregar los tiles del mapa de OpenStreetMap
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Agregar un marcador en la ubicación del usuario
    L.marker([lat, lon]).addTo(map)
        .bindPopup('Estás aquí.')
        .openPopup();
}

function funcionError(error) {
    console.log("Error al obtener la geolocalización. Código de error: " + error.code);
    console.log("Mensaje de error: " + error.message);

    // Manejamos los errores directamente, sin usar switch
    let mensaje = "Error desconocido.";
    if (error.code === 1) {
        mensaje = "El usuario ha denegado la solicitud de geolocalización.";
    } else if (error.code === 2) {
        mensaje = "La información de ubicación no está disponible.";
    } else if (error.code === 3) {
        mensaje = "La solicitud para obtener la ubicación ha expirado.";
    }

    document.write(mensaje);
}

if (navigator.geolocation) {
    document.write("Perfecto, la geolocalización funciona correctamente.");
    
    // Obtenemos la ubicación del usuario y la actualizamos constantemente
    navigator.geolocation.watchPosition(FuncionLocalizacion, funcionError);
} else {
    document.write("Debes usar un navegador más moderno que soporte geolocalización.");
}
