<script setup>
import { ref } from 'vue';

// Definir el evento que se emitirá al agregar una nueva nota
const emit = defineEmits(['altaRecordatorio']);

// Estado reactivo para capturar el texto de la nueva nota
const textoNuevaNota = ref('');

// Método para agregar una nueva nota
const altaNuevaNota = () => {
  if (textoNuevaNota.value.trim()) {
    // Emitir el evento con el texto de la nueva nota
    emit('altaRecordatorio', textoNuevaNota.value.trim());
    // Limpiar el campo de entrada
    textoNuevaNota.value = '';
  } else {
    alert('Por favor, escribe algo antes de añadir.');
  }
};
</script>

<template>
  <div class="cabecera">
    <h1>Proyecto Vue.js - Raúl Rivas</h1>
    <input
      v-model="textoNuevaNota"
      placeholder="¿Qué quieres recordar?"
      @keyup.enter="altaNuevaNota"
      class="nota-input"
    />
    <button @click="altaNuevaNota" class="btn-add">Añadir</button>
  </div>
</template>

<style scoped>
/* Contenedor principal */
.container {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
  width: 90%;
  padding: 20px;
  box-sizing: border-box;
  margin-top: 80px;
}

/* Estilo del encabezado */
.cabecera {
  text-align: center;
  padding: 20px;
  background-color: #2c2c2c;
  border-bottom: 1px solid #444;
}

/* Estilo del encabezado h1 */
.cabecera h1 {
  font-size: 28px;
  font-weight: bold;
  color: #1abc9c;
  margin-bottom: 20px;
}

/* Campo de entrada */
.nota-input {
  width: 100%;
  max-width: 600px;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: #fff;
  color: #333;
  font-size: 16px;
}

/* Placeholder del campo de entrada */
.nota-input::placeholder {
  color: #aaa;
}

/* Botón "Añadir" */
.btn-add {
  padding: 10px 20px;
  background-color: #1abc9c;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
}

/* Hover del botón "Añadir" */
.btn-add:hover {
  background-color: #16a085;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}
</style>
