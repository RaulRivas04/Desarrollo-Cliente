<script setup>
defineProps(["titulo", "prioridad", "acabada"]);

const emit = defineEmits(["borrado", "cambiarPrioridad", "cambiarEstado"]);
</script>

<template>
  <div :class="{ 'tarea-completada': acabada }">
    <h1>{{ titulo }}</h1>
    <button @click="emit('cambiarEstado')">Cambiar Estado</button>
    <button @click="emit('cambiarPrioridad', 'High')">Alta</button>
    <button @click="emit('cambiarPrioridad', 'Normal')">Normal</button>
    <button @click="emit('cambiarPrioridad', 'Low')">Baja</button>
    <button @click="emit('borrado')">Borrar</button>
  </div>
</template>

<style scoped>
div {
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #f9f9f9;
  margin-bottom: 8px;
  transition: all 0.3s ease;
}

div.tarea-completada {
  text-decoration: line-through;
  color: gray;
}

h1 {
  font-size: 18px;
  margin: 0 0 8px;
  color: #333;
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
