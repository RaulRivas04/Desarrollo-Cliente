// Función para establecer una cookie con o sin tiempo de expiración
function setCookie(nombre, valor, minutos = null) {
    if (minutos) {
        const d = new Date();
        d.setTime(d.getTime() + (minutos * 60 * 1000));
        const expires = "expires=" + d.toUTCString();
        document.cookie = `${nombre}=${encodeURIComponent(valor)};${expires};path=/`;
    } else {
        document.cookie = `${nombre}=${encodeURIComponent(valor)};path=/`;
    }
}

// Función para obtener el valor de una cookie
function getCookie(nombre) {
    const name = nombre + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookiesArray = decodedCookie.split(';');
    for (let c of cookiesArray) {
        c = c.trim();
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

// Función para borrar todas las cookies
function borrarCookies() {
    setCookie("usuario", "", -1);
    setCookie("configSesion", "", -1);
    location.reload();
}

// Función para saludar al usuario o pedir su nombre si no existe la cookie
function saludarUsuario() {
    let nombreUsuario = getCookie("usuario");
    const saludoDiv = document.getElementById("saludo");

    if (nombreUsuario) {
        saludoDiv.innerText = `¡Hola, ${nombreUsuario}! Bienvenido de nuevo.`;
    } else {
        nombreUsuario = prompt("Por favor, ingresa tu nombre:");
        if (nombreUsuario) {
            setCookie("usuario", nombreUsuario, 5);
            saludoDiv.innerText = `¡Hola, ${nombreUsuario}! Gracias por visitarnos.`;
        } else {
            saludoDiv.innerText = "No se ingresó ningún nombre.";
        }
    }
}

// Función para guardar la configuración y aplicarla inmediatamente
function guardarConfiguracion() {
    const fondoColor = document.getElementById("fondoColor").value;
    const parrafoColor = document.getElementById("parrafoColor").value;
    const tamanoLetra = document.getElementById("tamanoLetra").value;

    // Guardar la configuración en una cookie de sesión
    setCookie("configSesion", JSON.stringify({ fondoColor, parrafoColor, tamanoLetra }));

    // Aplicar la configuración de inmediato
    aplicarConfiguracion();
    alert("Configuración guardada y aplicada correctamente.");
}

// Función para aplicar la configuración guardada
function aplicarConfiguracion() {
    const configSesion = getCookie("configSesion");
    if (configSesion) {
        const { fondoColor, parrafoColor, tamanoLetra } = JSON.parse(configSesion);
        if (fondoColor) document.body.style.backgroundColor = fondoColor;
        const saludoDiv = document.getElementById("saludo");
        if (parrafoColor && saludoDiv) saludoDiv.style.color = parrafoColor;
        if (tamanoLetra && saludoDiv) saludoDiv.style.fontSize = `${tamanoLetra}px`;
    }
}

// Ejecutar las funciones al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    saludarUsuario();
    aplicarConfiguracion();
});
