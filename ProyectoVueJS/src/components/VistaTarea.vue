<script setup>
// Definir las propiedades recibidas del componente padre
defineProps(["titulo", "prioridad", "acabada", "tiempo"]);

// Definir los eventos que se emitirán al componente padre
const emit = defineEmits(["borrado", "cambiarPrioridad", "cambiarEstado"]);
</script>

<template>
  <!-- Contenedor principal de la tarea -->
  <div :class="{ 'nota-completada': acabada }" class="nota">
    <!-- Estado de la tarea -->
    <span class="estado" @click="emit('cambiarEstado')">
      <i v-if="acabada" class="icon-check">✔</i>
    </span>
    <!-- Contenido de la tarea -->
    <div class="nota-contenido">
      <h2>{{ titulo }}</h2>
      <p>Prioridad:
        <!-- Botones para cambiar la prioridad de la tarea -->
        <button
          @click="emit('cambiarPrioridad', 'High')"
          class="prioridad high"
          :class="{ selected: prioridad === 'High' }"
        >
          High
        </button>
        <button
          @click="emit('cambiarPrioridad', 'Normal')"
          class="prioridad normal"
          :class="{ selected: prioridad === 'Normal' }"
        >
          Normal
        </button>
        <button
          @click="emit('cambiarPrioridad', 'Low')"
          class="prioridad low"
          :class="{ selected: prioridad === 'Low' }"
        >
          Low
        </button>
      </p>
      <!-- Fecha de creación de la tarea -->
      <p class="fecha">
        <svg class="icon-calendar" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
        Añadido hace {{ tiempo }} minutos
      </p>
    </div>
    <!-- Botón para borrar la tarea -->
    <button class="btn-delete" @click="emit('borrado')">
      <svg class="icon-trash" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="3 6 5 6 21 6"></polyline>
        <path d="M19 6l-2 14H7L5 6"></path>
        <path d="M10 11v6"></path>
        <path d="M14 11v6"></path>
        <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"></path>
      </svg>
    </button>
  </div>
</template>

<style scoped>

/* Contenedor principal de la nota */
.nota {
  display: flex;
  align-items: center;
  padding: 15px;
  margin: 10px 0;
  border: 1px solid #444;
  border-radius: 8px;
  background-color: #2c2c2c;
  color: white;
  transition: all 0.3s ease;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  width: 100%;
}

.nota:hover {
  background-color: #333;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.3);
}

/* Tareas completadas */
.nota-completada {
  text-decoration: line-through;
  color: #1abc9c;
  opacity: 0.8;
  transition: all 0.3s ease;
}

/* Estado (círculo de completado) */
.estado {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  border: 2px solid #1abc9c;
  border-radius: 50%;
  margin-right: 15px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.estado:hover {
  background-color: #1abc9c;
  color: white;
  transform: scale(1.1);
}

/* Icono de check dentro del estado */
.icon-check {
  font-size: 14px;
  color: white;
}

/* Contenido de la nota */
.nota-contenido {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.nota-contenido h2 {
  font-size: 16px;
  margin: 0;
  font-weight: bold;
}

.nota-contenido .fecha {
  font-size: 12px;
  color: #aaa;
  font-style: italic;
  display: flex;
  align-items: center;
}

.icon-calendar {
  width: 16px;
  height: 16px;
  margin-right: 5px;
  stroke: #aaa;
}

/* Botones de prioridad */
.prioridad {
  background: none;
  border: 2px solid transparent;
  color: white;
  padding: 5px 10px;
  margin-left: 5px;
  cursor: pointer;
  border-radius: 6px;
  font-size: 14px;
  font-weight: bold;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}

/* Estilo para la prioridad seleccionada */
.prioridad.selected {
  border-color: white;
  box-shadow: 0px 2px 4px rgba(255, 255, 255, 0.5);
  transform: scale(1.05);
  color: white;
}

/* Colores de las prioridades */
.prioridad.high {
  background-color: red;
}

.prioridad.normal {
  background-color: orange;
}

.prioridad.low {
  background-color: green;
}

.prioridad:hover {
  transform: scale(1.1);
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.3);
}

/* Botón de eliminar */
.btn-delete {
  background: none;
  border: none;
  color: #ff4d4f;
  font-size: 16px;
  cursor: pointer;
  transition: color 0.3s ease, transform 0.3s ease;
}

.btn-delete:hover {
  color: #d9363e;
  transform: scale(1.15);
}

.icon-trash {
  width: 24px;
  height: 24px;
}
</style>
