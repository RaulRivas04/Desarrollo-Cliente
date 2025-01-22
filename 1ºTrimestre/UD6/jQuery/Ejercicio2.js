// Seleccionar el botón
const button = document.getElementById('actionButton');

// Función para ocultar todos los elementos
function hideAll() {
    document.querySelectorAll('body *').forEach(element => {
        element.classList.add('hidden');
    });
}

// Función para ocultar el botón
function hideButton() {
    button.classList.add('hidden');
}

// Función para ocultar elementos con la clase "intro"
function hideIntroElements() {
    document.querySelectorAll('.intro').forEach(element => {
        element.classList.add('hidden');
    });
}

// Función para ocultar solo los párrafos con clase específica
function hideParagraphs() {
    document.querySelectorAll('.paragraph').forEach(paragraph => {
        paragraph.classList.add('hidden');
    });
}

// Función para ocultar el primer elemento de la primera lista
function hideFirstListItem() {
    const firstList = document.querySelector('ul'); // Selecciona la primera lista
    if (firstList && firstList.firstElementChild) {
        firstList.firstElementChild.classList.add('hidden'); // Oculta el primer elemento
    }
}

// Añadir evento al botón
button.addEventListener('click', function () {
    // Ejecutar todas las acciones
    hideAll();            // Ocultar todo
    hideButton();         // Ocultar el botón
    hideIntroElements();  // Ocultar encabezado y primer párrafo
    hideParagraphs();     // Ocultar párrafos con clase específica
    hideFirstListItem();  // Ocultar el primer elemento de la primera lista
});
