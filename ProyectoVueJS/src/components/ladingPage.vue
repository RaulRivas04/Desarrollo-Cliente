<script setup>
import { ref } from 'vue';
import LoginUser from './LoginUser.vue';

const showMenu = ref(false);
const selectedOption = ref(false);
const showWelcomeMessage = ref(false);

// Mostrar el menú al pulsar "Comenzar"
function handleStart() {
  selectedOption.value = true;
  showMenu.value = false;
}

// Mostrar mensaje de bienvenida al iniciar sesión
function handleLoginSuccess() {
  showWelcomeMessage.value = true;
}

// Ocultar mensaje de bienvenida al cerrar sesión
function handleLogoutSuccess() {
  showWelcomeMessage.value = false;
}
</script>

<template>
  <div class="lading-container">
    <h1>Bienvenido/a a la Aplicación de Recordatorios</h1>
    <p v-if="!showWelcomeMessage">Administra tus tareas y recordatorios de forma eficiente y organizada.</p>
    <p v-else class="welcome-message">¡Bienvenido/a! Por favor, dirígete a la lista de recordatorios para añadir tus recordatorios.</p>
    <button class="btn-start" @click="handleStart" v-if="!showMenu && !selectedOption">Comenzar</button>

    <!-- Mostrar LoginUser según la opción seleccionada -->
    <LoginUser v-if="selectedOption" @loginSuccess="handleLoginSuccess" @logoutSuccess="handleLogoutSuccess" />
  </div>
</template>

<style scoped>
/* Contenedor principal */
.lading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100vw;
  background-color: #1e1e1e;
  color: white;
  padding: 20px;
  text-align: center;
  box-sizing: border-box;
}

/* Título principal */
h1 {
  margin-bottom: 20px;
}

/* Párrafo */
p {
  margin-bottom: 20px;
}

/* Botón "Comenzar" */
.btn-start {
  padding: 12px 24px;
  font-size: 18px;
  background-color: #1abc9c;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 20px;
}

.btn-start:hover {
  background-color: #16a085;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
}

/* Menú como vertical */
.menu-container {
  margin-top: 20px;
  text-align: center;
}

.menu-container h2 {
  font-size: 24px;
  color: #aaa;
  margin-bottom: 15px;
}

/* Menú */
.menu {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.menu li {
  padding: 10px 20px;
  margin: 10px 0;
  background-color: #2c2c2c;
  color: white;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 18px;
  font-weight: bold;
  width: 100%;
  max-width: 300px;
  text-align: center;
}

.menu li:hover {
  background-color: #1abc9c;
  color: black;
}

/* Mensaje de bienvenida */
.welcome-message {
  font-size: 18px;
  color: #1abc9c;
  margin-top: 20px;
}
</style>
