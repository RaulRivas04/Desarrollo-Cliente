// Función para renderizar una nueva nota
function renderNote(note) {
    const noteElement = document.createElement('div');
    noteElement.classList.add('note');
    noteElement.setAttribute('data-id', note.id);
    
    // Título, texto y tiempo transcurrido
    noteElement.innerHTML = `
      <h3>${note.title}</h3>
      <p>${note.text}</p>
      <span>Tiempo: ${model.getTimeElapsed(note.creationTime)} minutos</span>
      <button onclick="controller.deleteNote(${note.id})">Eliminar</button>
      <button onclick="controller.updateNote(${note.id})">Editar</button>
    `;
    document.getElementById('notesContainer').appendChild(noteElement);
  }
  