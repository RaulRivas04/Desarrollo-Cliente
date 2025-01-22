<script setup>
defineProps(['pendientes', 'total']);
const emit = defineEmits(['borrarCompletadas']);
</script>

<template>
  <div class="resumen">
    <p>
      {{ pendientes }} Tareas pendientes de un total de {{ total }} |
      <a href="#" @click.prevent="emit('borrarCompletadas')">Borrar tareas completadas</a>
    </p>
  </div>
</template>

<style scoped>
/* Contenedor del resumen */
.resumen {
  text-align: center;
  margin: 20px auto;
  color: #aaa;
  font-size: 18px;
  font-weight: 500;
  background-color: #222;
  padding: 15px;
  border-radius: 8px;
  max-width: 900px;
}


/* Enlaces dentro del resumen */
.resumen a {
  color: #1abc9c;
  text-decoration: none;
  font-weight: bold;
  border-bottom: 1px solid transparent;
  transition: color 0.3s ease, border-bottom 0.3s ease;
}

.resumen a:hover {
  text-decoration: none;
  color: #16a085;
  border-bottom: 1px solid #1abc9c;
}

/* Responsividad */
@media screen and (max-width: 768px) {
  .resumen {
    font-size: 16px;
    padding: 10px;
  }
}
</style>
