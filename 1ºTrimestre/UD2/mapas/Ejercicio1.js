function lanzarDado() {
    // Genera un número aleatorio entre 1 y 6
    let resultado = Math.floor(Math.random() * 6) + 1;

    // Muestra el resultado en el párrafo con id "resultado"
    document.getElementById("resultado").textContent = "El dado cayó en: " + resultado;
}
