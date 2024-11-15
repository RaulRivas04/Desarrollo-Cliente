// Función para validar que el valor contiene al menos un carácter en mayúscula
function validarMayuscula(valor) {
    const regex = /[A-Z]/;
    return regex.test(valor);
}

// Función para validar que el valor contiene al menos uno de los caracteres especiales especificados
function validarCaracteresEspeciales(valor) {
    const regex = /[!@#$%^&]/;
    return regex.test(valor);
}

// Función para validar que el valor tiene el formato correcto de un email
function validarCorreo(valor) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(valor);
}

// Función para validar que el valor tiene el formato correcto de una tarjeta de crédito
function validarTarjetaCredito(valor) {
    const regex = /^(\d{4}-){3}\d{4}$|^\d{16}$/;
    return regex.test(valor);
}

// Función para validar que el valor tiene al menos 8 caracteres
function validarLongitud(valor) {
    return valor.length >= 8;
}

// Función para validar que el valor contiene al menos un dígito
function validarNumero(valor) {
    const regex = /\d/;
    return regex.test(valor);
}

// Función para validar todos los campos y mostrar los resultados
function validarCampos() {
    const valor = document.getElementById("inputValue").value;
    const resultadosDiv = document.getElementById("resultados");
    
    // Ejecutamos cada función de validación y almacenamos los resultados
    const resultados = `
        <p>Contiene mayúscula: ${validarMayuscula(valor)}</p>
        <p>Contiene caracteres especiales (!@#$%^&): ${validarCaracteresEspeciales(valor)}</p>
        <p>Formato de correo electrónico: ${validarCorreo(valor)}</p>
        <p>Formato de tarjeta de crédito: ${validarTarjetaCredito(valor)}</p>
        <p>Longitud mínima de 8 caracteres: ${validarLongitud(valor)}</p>
        <p>Contiene al menos un dígito: ${validarNumero(valor)}</p>
    `;
    
    // Mostramos los resultados en el HTML
    resultadosDiv.innerHTML = resultados;
}
