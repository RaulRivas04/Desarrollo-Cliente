// Ejemplo de funciones en el modelo

let notes = []; // Array que contendrá las notas

// Crear nueva nota
function createNote(title, text) {
  const note = {
    id: Date.now(),
    title,
    text,
    creationTime: new Date()
  };
  notes.push(note);
  saveNotesToStorage();
  return note;
}

// Eliminar nota
function deleteNote(id) {
  notes = notes.filter(note => note.id !== id);
  saveNotesToStorage();
}

// Actualizar contenido de una nota
function updateNote(id, newText) {
  const note = notes.find(note => note.id === id);
  if (note) {
    note.text = newText;
    saveNotesToStorage();
  }
}

// Calcular el tiempo transcurrido
function getTimeElapsed(creationTime) {
  const now = new Date();
  const diff = Math.floor((now - new Date(creationTime)) / 60000); // en minutos
  return diff;
}

// Guardar notas en localStorage
function saveNotesToStorage() {
  localStorage.setItem('notes', JSON.stringify(notes));
}

// Cargar notas desde localStorage
function loadNotesFromStorage() {
  const savedNotes = JSON.parse(localStorage.getItem('notes'));
  if (savedNotes) {
    notes = savedNotes;
  }
}
