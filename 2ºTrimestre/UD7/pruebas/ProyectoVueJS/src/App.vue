<script setup>
import { useRouter } from 'vue-router';
import { getCurrentUser } from 'vuefire';
import Login from './components/LoginUser.vue';
import PiePagina from './components/PiePagina.vue';

// Obtén la instancia del enrutador
const router = useRouter();

// Configura el guardia de navegación
router.beforeEach(async (to) => {
  console.log("Guardia de navegación activado");
  if (to.meta.requiresAuth) {
    const user = await getCurrentUser();
    if (!user) {
      console.log("Usuario no autenticado, cancelando navegación");
      return false; // Cancela la navegación si el usuario no está autenticado
    } else {
      console.log("Usuario autenticado, permitiendo navegación");
      return true; // Permite la navegación si el usuario está autenticado
    }
  } else {
    return true; // Permite la navegación si no se requiere autenticación
  }
});
</script>

<template>
  <div id="app">
    <nav>
      <RouterLink to="/">Inicio</RouterLink>
      <RouterLink to="/recordatorios">Lista Recordatorios</RouterLink>
      <Login></Login>
    </nav>
    <!-- Renderiza el contenido de la ruta actual -->
    <RouterView></RouterView>
    <PiePagina />
  </div>
</template>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

nav {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: #007bff;
  color: white;
}

nav a {
  color: white;
  text-decoration: none;
  margin: 0 10px;
}

nav a:hover {
  text-decoration: underline;
}

RouterView {
  flex: 1;
}
</style>
