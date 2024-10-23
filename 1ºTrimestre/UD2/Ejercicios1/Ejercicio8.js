const imagenes = [
    'https://via.placeholder.com/300/FF5733/FFFFFF?text=Imagen+1',
    'https://via.placeholder.com/300/33FF57/FFFFFF?text=Imagen+2',
    'https://via.placeholder.com/300/3357FF/FFFFFF?text=Imagen+3'
];

const imagenAleatoria = document.getElementById('imagenAleatoria');
const indiceAleatorio = Math.floor(Math.random() * imagenes.length);
imagenAleatoria.src = imagenes[indiceAleatorio];
