<script setup>
import { ref } from 'vue';

const emit = defineEmits(['altaRecordatorio']);
const textoNuevaNota = ref('');

const altaNuevaNota = () => {
  if (textoNuevaNota.value.trim()) {
    emit('altaRecordatorio', textoNuevaNota.value.trim());
    textoNuevaNota.value = '';
  }
};
</script>

<template>
  <h1>Notas</h1>
  <div>
    <input
      v-model="textoNuevaNota"
      placeholder="Escribe texto de la nota"
      @keyup.enter="altaNuevaNota"
    />
    <button @click="altaNuevaNota">Añadir Nota</button>
  </div>
</template>

<style scoped>
h1 {
  font-family: Arial, sans-serif;
  color: #333;
}

input {
  padding: 8px;
  margin-right: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 8px 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
