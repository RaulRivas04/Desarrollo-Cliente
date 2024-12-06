window.onload = function () {
    const botonCrear = document.getElementById('crearNota');
    const inputTitulo = document.getElementById('titulo');
    const inputContenido = document.getElementById('contenido');
    const contenedorNotas = document.getElementById('notasContainer');

    let notasGuardadas = JSON.parse(localStorage.getItem('notasGuardadas')) || [];

    // Función para mover las notas libremente
    function hacerDraggable(nota, notaObj) {
        nota.onmousedown = function (evento) {
            const offsetX = evento.clientX - nota.getBoundingClientRect().left;
            const offsetY = evento.clientY - nota.getBoundingClientRect().top;

            nota.style.position = 'absolute';
            nota.style.zIndex = 1000;

            function moverNota(pageX, pageY) {
                nota.style.left = pageX - offsetX + 'px';
                nota.style.top = pageY - offsetY + 'px';
            }

            moverNota(evento.pageX, evento.pageY);

            function moverConMouse(evento) {
                moverNota(evento.pageX, evento.pageY);
            }

            document.addEventListener('mousemove', moverConMouse);

            nota.onmouseup = function () {
                document.removeEventListener('mousemove', moverConMouse);
                nota.onmouseup = null;

                // Guardar posición de la nota
                const posX = parseInt(nota.style.left || 0, 10);
                const posY = parseInt(nota.style.top || 0, 10);
                notaObj.posX = posX;
                notaObj.posY = posY;
                guardarNotas();
            };
        };

        nota.ondragstart = function () {
            return false;
        };
    }

    // Crear una nueva nota
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
        contenedorNotas.appendChild(nuevaNota);

        // Nota draggable
        hacerDraggable(nuevaNota, notaObj);

        // Actualizar el tiempo transcurrido
        actualizarTiempo(nuevaNota);

        // Campos editables y guardar cambios
        const camposEditables = nuevaNota.querySelectorAll('.editable');
        camposEditables.forEach(function (campo, index) {
            campo.addEventListener('input', function () {
                if (index === 0) notaObj.titulo = campo.textContent;
                if (index === 1) notaObj.contenido = campo.textContent;
                guardarNotas();
            });
        });

        // Botón de eliminación
        const botonEliminar = nuevaNota.querySelector('.eliminar');
        botonEliminar.addEventListener('click', function () {
            nuevaNota.remove();
            notasGuardadas = notasGuardadas.filter(function (n) {
                return n.timestamp !== notaObj.timestamp;
            });
            guardarNotas();
        });
    }

    // Guardar notas en LocalStorage
    function guardarNotas() {
        localStorage.setItem('notasGuardadas', JSON.stringify(notasGuardadas));
    }

    // Crear nota desde el formulario
    botonCrear.addEventListener('click', function () {
        const titulo = inputTitulo.value.trim();
        const contenido = inputContenido.value.trim();

        if (!titulo || !contenido) {
            console.error('Por favor, completa todos los campos.');
            return;
        }

        const nuevaNotaObj = {
            titulo: titulo,
            contenido: contenido,
            timestamp: Date.now(),
            posX: 0,
            posY: 0
        };

        notasGuardadas.push(nuevaNotaObj);
        guardarNotas();

        agregarNota(nuevaNotaObj);

        inputTitulo.value = '';
        inputContenido.value = '';
    });

    // Mostrar tiempo transcurrido
    function actualizarTiempo(nota) {
        const elementoTiempo = nota.querySelector('.tiempo');
        const timestamp = parseInt(elementoTiempo.dataset.timestamp, 10);

        function actualizar() {
            const minutosTranscurridos = Math.floor((Date.now() - timestamp) / 60000);
            elementoTiempo.textContent = 'Creada hace ' + minutosTranscurridos + ' minutos';
        }

        actualizar();
        setInterval(actualizar, 60000);
    }

    // Cargar notas desde LocalStorage
    notasGuardadas.forEach(agregarNota);
};
