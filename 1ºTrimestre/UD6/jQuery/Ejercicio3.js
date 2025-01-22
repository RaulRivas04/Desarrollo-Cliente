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

// Función para ocultar los primeros elementos de ambas listas
function hideFirstListItems() {
    // Seleccionar todas las listas
    const lists = document.querySelectorAll('ul');
    lists.forEach(list => {
        if (list.firstElementChild) {
            list.firstElementChild.classList.add('hidden'); // Ocultar el primer elemento
        }
    });
}

// Añadir evento al botón
button.addEventListener('click', function () {
    // Ejecutar todas las acciones
    hideAll();             // Ocultar todo
    hideButton();          // Ocultar el botón
    hideIntroElements();   // Ocultar encabezado y primer párrafo
    hideParagraphs();      // Ocultar párrafos con clase específica
    hideFirstListItems();  // Ocultar los primeros elementos de ambas listas
});
