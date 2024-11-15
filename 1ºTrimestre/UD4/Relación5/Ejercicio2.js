// Función para validar el nombre (sólo letras y espacios)
function validarNombre() {
    const nombre = document.getElementById("nombre").value;
    const nombreError = document.getElementById("nombreError");
    const expresion = /^[a-zA-ZÁÉÍÓÚáéíóúÑñ\s]+$/;

    if (expresion.test(nombre)) {
        nombreError.textContent = "Nombre válido";
        nombreError.style.color = "green";
    } else {
        nombreError.textContent = "Nombre inválido. Sólo letras y espacios.";
        nombreError.style.color = "red";
    }
}

// Función para validar los apellidos (sólo letras y espacios)
function validarApellidos() {
    const apellidos = document.getElementById("apellidos").value;
    const apellidosError = document.getElementById("apellidosError");
    const expresion = /^[a-zA-ZÁÉÍÓÚáéíóúÑñ\s]+$/;

    if (expresion.test(apellidos)) {
        apellidosError.textContent = "Apellidos válidos";
        apellidosError.style.color = "green";
    } else {
        apellidosError.textContent = "Apellidos inválidos. Sólo letras y espacios.";
        apellidosError.style.color = "red";
    }
}

// Función para validar el DNI (Formato: 8 dígitos y una letra)
function validarDNI() {
    const dni = document.getElementById("dni").value;
    const dniError = document.getElementById("dniError");
    const expresion = /^\d{8}[A-Za-z]$/;

    if (expresion.test(dni)) {
        dniError.textContent = "DNI válido";
        dniError.style.color = "green";
    } else {
        dniError.textContent = "DNI inválido. Debe tener 8 dígitos y una letra.";
        dniError.style.color = "red";
    }
}

// Función para validar el teléfono (Formato: 9 dígitos)
function validarTelefono() {
    const telefono = document.getElementById("telefono").value;
    const telefonoError = document.getElementById("telefonoError");
    const expresion = /^\d{9}$/;

    if (expresion.test(telefono)) {
        telefonoError.textContent = "Teléfono válido";
        telefonoError.style.color = "green";
    } else {
        telefonoError.textContent = "Teléfono inválido. Debe tener 9 dígitos.";
        telefonoError.style.color = "red";
    }
}

// Función para validar el correo electrónico
function validarCorreo() {
    const email = document.getElementById("email").value;
    const emailError = document.getElementById("emailError");
    const expresion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (expresion.test(email)) {
        emailError.textContent = "Correo válido";
        emailError.style.color = "green";
    } else {
        emailError.textContent = "Correo inválido. Formato incorrecto.";
        emailError.style.color = "red";
    }
}

// Función para validar el nombre de usuario
function validarNombreUsuario() {
    const username = document.getElementById("username").value;
    const usernameError = document.getElementById("usernameError");
    const expresion = /^(?=.*[0-9])(?=.*[!@#\$%\^&\*.,_-])[A-Za-z0-9!@#\$%\^&\*.,_-]{8,}$/;

    if (expresion.test(username)) {
        usernameError.textContent = "Nombre de usuario válido";
        usernameError.style.color = "green";
    } else {
        usernameError.textContent = "Nombre de usuario inválido. Debe tener al menos 8 caracteres, un número y un signo de puntuación.";
        usernameError.style.color = "red";
    }
}
