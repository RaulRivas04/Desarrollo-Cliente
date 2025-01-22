// Seleccionar el botón y otros elementos
const button = document.getElementById('actionButton');

// Función para ocultar todos los elementos
function hideAll() {
    document.querySelectorAll('body *').forEach(element => {
        element.classList.add('hidden');
    });
}

// Función para ocultar solo el botón
function hideButton() {
    button.classList.add('hidden');
}

// Función para ocultar elementos con la clase "intro"
function hideIntroElements() {
    document.querySelectorAll('.intro').forEach(element => {
        element.classList.add('hidden');
    });
}

// Añadir evento al botón
button.addEventListener('click', function () {
    // Cumple los tres requisitos
    hideAll();            // Oculta todo
    hideButton();         // Oculta el botón
    hideIntroElements();  // Oculta solo los elementos con clase "intro"
});
