<script setup>
defineProps(['pendientes', 'total']);
const emit = defineEmits(['borrarCompletadas']);
</script>

<template>
  <div class="resumen">
    <p>
      {{ pendientes }} tareas pendientes de un total de {{ total }} |
      <a href="#" @click.prevent="emit('borrarCompletadas')">Borrar tareas completadas</a>
    </p>
  </div>
</template>

<style scoped>
.resumen {
  text-align: center;
  color: #fff;
  margin-bottom: 20px;
}
a {
  color: #1abc9c;
  text-decoration: none;
  cursor: pointer;
}
</style>
