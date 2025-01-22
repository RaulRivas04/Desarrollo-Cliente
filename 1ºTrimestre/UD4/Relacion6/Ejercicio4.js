// a) Función para crear una cookie con un identificador, valor y opcionalmente una fecha de expiración
function CrearCookie(identificador, valor, fechaExpiracion = null) {
    console.log("Intentando crear la cookie con identificador:", identificador, "y valor:", valor);
    if (fechaExpiracion) {
        const d = new Date(fechaExpiracion);
        const expires = "expires=" + d.toUTCString();
        document.cookie = identificador + "=" + encodeURIComponent(valor) + ";" + expires + ";path=/";
        console.log("Cookie creada con expiración:", expires);
    } else {
        document.cookie = identificador + "=" + encodeURIComponent(valor) + ";path=/";
        console.log("Cookie creada de sesión.");
    }
}

// b) Función para leer el valor de una cookie por su identificador
function LeerCookie(identificador) {
    const name = identificador + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookiesArray = decodedCookie.split(';');

    for (let i = 0; i < cookiesArray.length; i++) {
        let cookie = cookiesArray[i].trim();
        if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    return null;
}

// c) Función para borrar una cookie por su identificador
function BorrarCookie(identificador) {
    document.cookie = identificador + "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/";
    console.log("Cookie borrada:", identificador);
}
