function validarNombreUsuario() {
    const username = document.getElementById("username").value;
    const lowercase = document.getElementById("lowercase");
    const uppercase = document.getElementById("uppercase");
    const minLength = document.getElementById("minLength");
    const submitBtn = document.getElementById("submitBtn");

    // Expresiones regulares para cada condición
    const hasLowercase = /[a-z]/.test(username);
    const hasUppercase = /[A-Z]/.test(username);
    const hasMinLength = username.length >= 6;

    // Actualizar clases de validación según cada condición
    if (hasLowercase) {
        lowercase.classList.remove("invalid");
        lowercase.classList.add("valid");
    } else {
        lowercase.classList.remove("valid");
        lowercase.classList.add("invalid");
    }

    if (hasUppercase) {
        uppercase.classList.remove("invalid");
        uppercase.classList.add("valid");
    } else {
        uppercase.classList.remove("valid");
        uppercase.classList.add("invalid");
    }

    if (hasMinLength) {
        minLength.classList.remove("invalid");
        minLength.classList.add("valid");
    } else {
        minLength.classList.remove("valid");
        minLength.classList.add("invalid");
    }

    // Habilitar el botón de envío si todas las condiciones son válidas
    if (hasLowercase && hasUppercase && hasMinLength) {
        submitBtn.disabled = false;
    } else {
        submitBtn.disabled = true;
    }
}
