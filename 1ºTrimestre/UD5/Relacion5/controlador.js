// Ejemplo de funciones del controlador

// Cargar notas al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    loadNotes();
  });
  
  // Crear una nueva nota
  function createNote() {
    const title = document.getElementById('noteTitle').value;
    const text = document.getElementById('noteText').value;
    const newNote = model.createNote(title, text);
    view.renderNote(newNote);
    view.clearForm();
  }
  
  // Eliminar una nota
  function deleteNote(id) {
    model.deleteNote(id);
    view.removeNoteFromUI(id);
  }
  
  // Actualizar una nota
  function updateNote(id) {
    const newText = prompt('Editar nota:');
    if (newText) {
      model.updateNote(id, newText);
      view.updateNoteContent(id, newText);
    }
  }
  
  // Renderizar notas en la vista
  function loadNotes() {
    const notes = model.getNotes();
    notes.forEach(note => {
      view.renderNote(note);
    });
  }
  