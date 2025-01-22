// Obtener el valor de una cookie por su nombre
function getCookie(name) {
    const decodedCookies = decodeURIComponent(document.cookie);
    const cookies = decodedCookies.split(';');
    for (let cookie of cookies) {
        const [key, value] = cookie.trim().split('=');
        if (key === name) return value;
    }
    return null;
}

// Establecer una cookie con una duración en minutos
function setCookie(name, value, minutes) {
    const now = new Date();
    now.setTime(now.getTime() + (minutes * 60 * 1000));
    const expires = "expires=" + now.toUTCString();
    document.cookie = `${name}=${encodeURIComponent(value)}; ${expires}; path=/`;
}

// Eliminar una cookie por su nombre
function deleteCookie(name) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
}

// Función para preguntar el nombre del usuario y guardarlo en una cookie
function askForUsername() {
    const username = prompt("Por favor, introduce tu nombre:");
    if (username) {
        setCookie("username", username, 5);
        displayWelcomeMessage(username);
    }
}

// Función para mostrar el mensaje de bienvenida
function displayWelcomeMessage(username) {
    const mensajeDiv = document.getElementById("mensaje");
    mensajeDiv.textContent = `¡Hola, ${username}! Bienvenido de nuevo.`;
    document.getElementById("logoutButton").style.display = "block";
}

// Inicializar la página
window.onload = function () {
    const username = getCookie("username");
    if (username) {
        displayWelcomeMessage(username);
    } else {
        askForUsername();
    }

    // Agregar evento al botón para eliminar la cookie y cerrar sesión
    document.getElementById("logoutButton").onclick = function () {
        deleteCookie("username");
        alert("Has cerrado sesión.");
        location.reload();
    };
};
