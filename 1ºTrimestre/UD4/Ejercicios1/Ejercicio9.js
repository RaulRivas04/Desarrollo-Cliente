const image = document.getElementById('imagen-pruebamovimiento');

let isDragging = false;
let offsetX = 0;
let offsetY = 0;

// Inicia el arrastre al hacer clic
image.addEventListener('mousedown', function(e) {
    isDragging = true;
    offsetX = e.clientX - image.getBoundingClientRect().left;
    offsetY = e.clientY - image.getBoundingClientRect().top;
    image.style.position = 'absolute'; 
    image.style.cursor = 'grabbing';
});

// Termina el arrastre al soltar el botón
document.addEventListener('mouseup', function() {
    isDragging = false;
    image.style.cursor = 'grab';
});

// Mueve la imagen mientras el botón esté presionado
document.addEventListener('mousemove', function(e) {
    if (isDragging) {
      
        image.style.left = (e.clientX - offsetX) + 'px';
        image.style.top = (e.clientY - offsetY) + 'px';
    }
});
