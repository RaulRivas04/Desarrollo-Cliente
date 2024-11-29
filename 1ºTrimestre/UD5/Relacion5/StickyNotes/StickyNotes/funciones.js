window.onload = () => {
    const submit = document.getElementById('submit');
    const nombre = document.getElementById("nombre");
    const descripcion = document.getElementById("descripcion");
    const divNotas = document.getElementById("mis-notas");

    // Función para arrastrar las notas
    const arrastrarNota = (nota) => {
        nota.onmousedown = function(event) {
            const posX = event.clientX - nota.getBoundingClientRect().left;
            const posY = event.clientY - nota.getBoundingClientRect().top;

            nota.style.position = 'absolute';
            nota.style.zIndex = 1000;

            const mover = (pageX, pageY) => {
                nota.style.left = pageX - posX + 'px';
                nota.style.top = pageY - posY + 'px';
            };

            mover(event.pageX, event.pageY);

            const onMouseMove = (event) => {
                mover(event.pageX, event.pageY);
            };

            document.addEventListener('mousemove', onMouseMove);

            nota.onmouseup = () => {
                document.removeEventListener('mousemove', onMouseMove);
                nota.onmouseup = null;
            };
        };

        nota.ondragstart = () => false;
    };

    // Función para crear notas
    const crearNota = (nombre, descripcion) => {
        const cajaNota = document.createElement('div');
        cajaNota.className = "notas";

        cajaNota.innerHTML = `
            <h3>${nombre}</h3>
            <p>${descripcion}</p>
        `;

        divNotas.appendChild(cajaNota);

        // Habilitar el arrastre en la nueva nota
        arrastrarNota(cajaNota);

        // Eliminar la nota al hacer clic derecho
        cajaNota.addEventListener('contextmenu', (event) => {
            event.preventDefault(); 
            cajaNota.remove();

            // Eliminar la nota del LocalStorage
            notasGuardadas = notasGuardadas.filter(nota => nota.nombre !== nombre || nota.descripcion !== descripcion);
            localStorage.setItem('notas', JSON.stringify(notasGuardadas));
        });
    };

    // Cargar las notas del LocalStorage y crearlas en la página
    let notasGuardadas = JSON.parse(localStorage.getItem('notas'));
    if (!notasGuardadas) {
        notasGuardadas = [];
    }

    notasGuardadas.forEach(nota => {
        crearNota(nota.nombre, nota.descripcion);
    });

    // Función para agregar notas del formulario
    submit.addEventListener('click', () => {
        const valorN = nombre.value.trim();
        const valorD = descripcion.value.trim();

        if (valorN === "" || valorD === "") {
            console.log("Algún campo no está completo");
            return;
        }

        const nota = {
            nombre: valorN,
            descripcion: valorD
        };

        notasGuardadas.push(nota);
        localStorage.setItem('notas', JSON.stringify(notasGuardadas));

        crearNota(nota.nombre, nota.descripcion);

        // Limpiar campos del formulario
        nombre.value = "";
        descripcion.value = "";
    });
};
