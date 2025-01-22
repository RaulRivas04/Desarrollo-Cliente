let notas = [];

// Función para actualizar el tiempo transcurrido
function actualizarTiempoNota() {
    const notasElementos = document.querySelectorAll('.nota');
    notasElementos.forEach(nota => {
        const timestamp = parseInt(nota.querySelector('.tiempo').getAttribute('data-timestamp'));
        const tiempoTranscurrido = Math.floor((Date.now() - timestamp) / 60000); // Tiempo en minutos
        const tiempoTexto = `Creada hace ${tiempoTranscurrido} minutos`;
        nota.querySelector('.tiempo').innerText = tiempoTexto;
    });
}

// Función para agregar una nueva nota
function agregarNota(notaObj) {
    const nuevaNota = document.createElement('div');
    nuevaNota.className = 'nota';
    nuevaNota.style.left = (notaObj.posX || 0) + 'px';
    nuevaNota.style.top = (notaObj.posY || 0) + 'px';

    nuevaNota.innerHTML = `
        <h3 contenteditable="true" class="editable">${notaObj.titulo}</h3>
        <p contenteditable="true" class="editable">${notaObj.contenido}</p>
        <span class="tiempo" data-timestamp="${notaObj.timestamp}">Creada hace 0 minutos</span>
        <button class="eliminar">Eliminar</button>
    `;

    const contenedorNotas = document.getElementById('contenedorNotas');
    contenedorNotas.appendChild(nuevaNota);

    // Agregar la funcionalidad de arrastrar
    nuevaNota.addEventListener('mousedown', function (event) {
        let offsetX = event.clientX - nuevaNota.offsetLeft;
        let offsetY = event.clientY - nuevaNota.offsetTop;

        function moverNota(event) {
            nuevaNota.style.left = event.clientX - offsetX + 'px';
            nuevaNota.style.top = event.clientY - offsetY + 'px';
        }

        function soltarNota() {
            document.removeEventListener('mousemove', moverNota);
            document.removeEventListener('mouseup', soltarNota);
        }

        document.addEventListener('mousemove', moverNota);
        document.addEventListener('mouseup', soltarNota);
    });

    // Función para eliminar la nota
    nuevaNota.querySelector('.eliminar').addEventListener('click', function () {
        nuevaNota.remove();
        notas = notas.filter(nota => nota.timestamp !== notaObj.timestamp); // Eliminar de las notas guardadas
    });

    // Actualizar el tiempo de la nota
    setInterval(actualizarTiempoNota, 60000); // Cada minuto actualizar el tiempo
}

// Event listener para crear una nueva nota
document.getElementById('crearNotaBtn').addEventListener('click', function () {
    const titulo = document.getElementById('tituloNota').value;
    const contenido = document.getElementById('contenidoNota').value;

    if (titulo && contenido) {
        const nuevaNota = {
            titulo: titulo,
            contenido: contenido,
            timestamp: Date.now(),
            posX: Math.random() * 500, // Posición aleatoria X
            posY: Math.random() * 400  // Posición aleatoria Y
        };

        notas.push(nuevaNota);
        agregarNota(nuevaNota);
        document.getElementById('tituloNota').value = '';
        document.getElementById('contenidoNota').value = '';
    }
});
