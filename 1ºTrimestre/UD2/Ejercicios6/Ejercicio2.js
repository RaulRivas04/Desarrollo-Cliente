// Mostrar número de imágenes en el documento
document.getElementById('show-images-count').addEventListener('click', function(event) {
    event.preventDefault();
    const images = document.getElementsByTagName('img');
    const result = `Número de imágenes en el documento: ${images.length}`;
    document.getElementById('result').textContent = result;
});

// Mostrar ID de la primera imagen
document.getElementById('show-first-image-id').addEventListener('click', function(event) {
    event.preventDefault();
    const firstImage = document.getElementsByTagName('img')[0];
    const result = `ID de la primera imagen: ${firstImage.id}`;
    document.getElementById('result').textContent = result;
});

// Mostrar número de enlaces en el documento
document.getElementById('show-links-count').addEventListener('click', function(event) {
    event.preventDefault();
    const links = document.getElementsByTagName('a');
    const result = `Número de enlaces en el documento: ${links.length}`;
    document.getElementById('result').textContent = result;
});

// Cambiar título del documento
document.getElementById('change-title').addEventListener('click', function(event) {
    event.preventDefault();
    document.title = "Nuevo Título del Documento";
    const result = "El título del documento ha sido cambiado.";
    document.getElementById('result').textContent = result;
});
