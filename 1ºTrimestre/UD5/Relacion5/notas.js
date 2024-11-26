document.addEventListener("DOMContentLoaded", () => {
    const contenedorNotas = document.getElementById("contenedorNotas");
    const crearNotaBtn = document.getElementById("crearNota");

    let notas = JSON.parse(localStorage.getItem("notas")) || [];

    const renderNotas = () => {
        contenedorNotas.innerHTML = "";
        notas.forEach((nota, index) => {
            const notaDiv = document.createElement("div");
            notaDiv.className = "nota";
            notaDiv.style.left = `${nota.posX}px`;
            notaDiv.style.top = `${nota.posY}px`;
            notaDiv.draggable = true;

            notaDiv.innerHTML = `
                <div class="titulo" contenteditable="true">${nota.titulo}</div>
                <div class="contenido" contenteditable="true">${nota.texto}</div>
                <div class="tiempo">Creada hace: ${Math.floor(
                    (new Date() - new Date(nota.creado)) / 60000
                )} minutos</div>
                <button class="eliminarNota">Eliminar</button>
            `;

            notaDiv.querySelector(".eliminarNota").addEventListener("click", () => {
                eliminarNota(index);
            });

            notaDiv.addEventListener("dragstart", (e) => {
                e.dataTransfer.setData("text/plain", index);
            });

            notaDiv.addEventListener("dragend", (e) => {
                const rect = contenedorNotas.getBoundingClientRect();
                notas[index].posX = e.clientX - rect.left;
                notas[index].posY = e.clientY - rect.top;
                guardarNotas();
                renderNotas();
            });

            contenedorNotas.appendChild(notaDiv);
        });
    };

    const guardarNotas = () => {
        localStorage.setItem("notas", JSON.stringify(notas));
    };

    const eliminarNota = (index) => {
        notas.splice(index, 1); // Elimina la nota del array
        guardarNotas();        // Actualiza el localStorage
        renderNotas();         // Vuelve a renderizar las notas
    };

    crearNotaBtn.addEventListener("click", () => {
        const nuevaNota = {
            titulo: "Nueva Nota",
            texto: "Contenido de la nota...",
            creado: new Date().toISOString(),
            posX: Math.random() * (contenedorNotas.clientWidth - 200),
            posY: Math.random() * (contenedorNotas.clientHeight - 100),
        };
        notas.push(nuevaNota);
        guardarNotas();
        renderNotas();
    });

    contenedorNotas.addEventListener("dragover", (e) => {
        e.preventDefault();
    });

    renderNotas();
});
