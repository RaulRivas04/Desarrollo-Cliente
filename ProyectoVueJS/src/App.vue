<script setup>
import { useRouter } from 'vue-router';
import { getCurrentUser, useCurrentUser, useFirebaseAuth } from 'vuefire';
import { signOut } from 'firebase/auth';
import { ref } from 'vue';
import PiePagina from './components/PiePagina.vue';
import logo from './assets/logo.png';

// Obtén la instancia del enrutador
const router = useRouter();
const auth = useFirebaseAuth();
const currentUser = useCurrentUser();
const error = ref(null);

// Configura el guardia de navegación
router.beforeEach(async (to) => {
  try {
    console.log("Guardia de navegación activado");
    if (to.meta.requiresAuth) {
      const user = await getCurrentUser();
      if (!user) {
        console.log("Usuario no autenticado, redirigiendo a Login");
        return { path: '/login', query: { message: 'Debes iniciar sesión para acceder a esta página' } }; // Redirige al usuario
      } else {
        console.log("Usuario autenticado, permitiendo navegación");
        return true; // Permite la navegación si el usuario está autenticado
      }
    } else {
      return true; // Permite la navegación si no se requiere autenticación
    }
  } catch (error) {
    console.error("Error en el guardia de navegación:", error);
    return { path: '/error' }; // Redirige a una página de error en caso de fallo
  }
});

// Cerrar sesión
function cerrarSesion() {
  signOut(auth)
    .then(() => {
      console.log('Usuario deslogueado');
      router.push('/'); // Redirige al usuario a la página de inicio
    })
    .catch((reason) => {
      console.error('Fallo al cerrar sesión:', reason);
      error.value = reason.message;
    });
}
</script>

<template>
  <div id="app">
    <!-- Barra de navegación -->
    <nav>
      <div class="nav-logo">
        <img :src="logo" alt="Logo" class="logo" />
        <span class="nav-title">AppNotes</span>
      </div>
      <div class="nav-links">
        <RouterLink to="/" class="nav-link">Inicio</RouterLink>
        <RouterLink to="/recordatorios" class="nav-link">Lista Recordatorios</RouterLink>
        <button v-if="currentUser" @click="cerrarSesion" class="nav-link">Cerrar Sesión</button>
      </div>
    </nav>
    <!-- Renderiza el contenido de la ruta actual -->
    <div class="main-content">
      <RouterView></RouterView>
    </div>
    <!-- Pie de página -->
    <PiePagina />
  </div>
</template>

<style scoped>
/* Contenedor principal */
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
  background-color: #1e1e1e;
  color: white;
  font-family: 'Roboto', Arial, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Estilo para enlaces de navegación */
nav {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 20px;
  background-color: #333;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}

.nav-logo {
  display: flex;
  align-items: center;
  margin-right: 20px;
}

.logo {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin-right: 10px;
}

.nav-title {
  font-size: 24px;
  font-weight: bold;
  color: #1abc9c;
}

.nav-links {
  display: flex;
  gap: 50px;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-weight: bold;
  padding: 10px 15px;
  transition: all 0.3s ease;
  background-color: #1abc9c;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 0 10px;
}

.nav-link:hover {
  color: white;
  background-color: #16a085;
  text-decoration: none;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}

/* Clase para el enlace activo */
.router-link-active {
  color: white;
  background-color: #16a085;
  font-weight: bold;
  text-decoration: none;
}

/* Estilo para el contenido principal */
.main-content {
  margin-top: 80px;
  flex: 1;
  width: 100%;
  background-color: #1e1e1e;
}

/* Estilo para cuerpo general */
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  min-height: 100%;
  background-color: #1e1e1e;
  font-family: 'Roboto', Arial, sans-serif;
  box-sizing: border-box;
}

</style>
