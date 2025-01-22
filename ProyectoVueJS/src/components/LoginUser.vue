<script setup>
import { signInWithPopup, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { useCurrentUser, useFirebaseAuth } from 'vuefire';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const auth = useFirebaseAuth();
const googleAuthProvider = new GoogleAuthProvider();
const githubAuthProvider = new GithubAuthProvider();
const currentUser = useCurrentUser();
const error = ref(null);

const email = ref('');
const password = ref('');
const firstName = ref('');
const lastName = ref('');
const isRegistering = ref(false);
const showEmailForm = ref(false);

const emit = defineEmits(['loginSuccess', 'logoutSuccess']);

// Validación del formato del correo electrónico
function validarEmail(email) {
  const re = /^[^\s@]+@[a-zA-Z0-9.-]+\.(com|es|net|org|gmx|gmail|outlook)$/;
  return re.test(email);
}

// Iniciar sesión con Google sin vincular la cuenta
function iniciarSesionConGoogle() {
  signInWithPopup(auth, googleAuthProvider)
    .then(() => {
      console.log('Usuario logueado con Google');
      emit('loginSuccess');
    })
    .catch((reason) => {
      console.error('Fallo al iniciar sesión con Google:', reason);
      error.value = reason.message;
    });
}

// Iniciar sesión con GitHub sin vincular la cuenta
function iniciarSesionConGitHub() {
  signInWithPopup(auth, githubAuthProvider)
    .then((result) => {
      console.log("Usuario logueado con GitHub", result.user);
      emit('loginSuccess');
    })
    .catch((reason) => {
      console.error("Fallo al iniciar sesión con GitHub:", reason);
      error.value = reason.message;
    });
}

// Iniciar sesión con correo y contraseña
function iniciarSesionConEmail() {
  if (!validarEmail(email.value)) {
    error.value = 'Por favor, introduce un correo electrónico válido.';
    return;
  }

  signInWithEmailAndPassword(auth, email.value, password.value)
    .then(() => {
      console.log('Usuario logueado con correo/contraseña');
      emit('loginSuccess');
    })
    .catch((reason) => {
      if (reason.code === 'auth/user-not-found') {
        error.value = 'No se encontró ninguna cuenta con este correo.';
      } else if (reason.code === 'auth/wrong-password') {
        error.value = 'Contraseña incorrecta. Intenta nuevamente.';
      } else {
        console.error('Fallo al iniciar sesión con correo/contraseña:', reason);
        error.value = reason.message;
      }
    });
}

// Registrar un nuevo usuario
function registrarUsuario() {
  if (!firstName.value || !lastName.value) {
    error.value = 'Por favor, introduce tu nombre y apellido.';
    return;
  }

  if (!validarEmail(email.value)) {
    error.value = 'Por favor, introduce un correo electrónico válido.';
    return;
  }

  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      return updateProfile(userCredential.user, {
        displayName: `${firstName.value} ${lastName.value}`
      }).then(() => {
        console.log('Usuario registrado y perfil actualizado');
        emit('loginSuccess');
      });
    })
    .catch((reason) => {
      console.error('Fallo al registrar usuario:', reason);
      error.value = reason.message;
    });
}

// Cerrar sesión
function cerrarSesion() {
  signOut(auth)
    .then(() => {
      console.log('Usuario deslogueado');
      emit('logoutSuccess');
      router.push('/'); // Redirige al usuario a la página de inicio
    })
    .catch((reason) => {
      console.error('Fallo al cerrar sesión:', reason);
      error.value = reason.message;
    });
}

// Mostrar formularios de inicio de sesión o registro
function mostrarFormularioInicioSesion() {
  showEmailForm.value = true;
  isRegistering.value = false;
}

function mostrarFormularioRegistro() {
  showEmailForm.value = false;
  isRegistering.value = true;
}
</script>

<template>
  <div>
    <p v-if="currentUser">Hola {{ currentUser.providerData[0]?.displayName || 'Usuario' }}</p>
    <p v-if="error" class="error">{{ error }}</p>

    <button v-if="currentUser" @click="cerrarSesion">Cerrar Sesión</button>
    <div v-else>
      <button @click="iniciarSesionConGoogle">Iniciar sesión con Google</button>
      <button @click="iniciarSesionConGitHub">Iniciar sesión con GitHub</button>
      <button @click="mostrarFormularioInicioSesion">Iniciar sesión con Email</button>
      <button @click="mostrarFormularioRegistro">Registrarse</button>

      <div v-if="showEmailForm && !isRegistering">
        <input v-model="email" type="email" placeholder="Correo electrónico" />
        <input v-model="password" type="password" placeholder="Contraseña" />
        <button @click="iniciarSesionConEmail">Iniciar sesión</button>
      </div>

      <div v-if="isRegistering">
        <input v-model="firstName" type="text" placeholder="Nombre" />
        <input v-model="lastName" type="text" placeholder="Apellidos" />
        <input v-model="email" type="email" placeholder="Correo electrónico" />
        <input v-model="password" type="password" placeholder="Contraseña" />
        <button @click="registrarUsuario">Registrar</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Contenedor principal */
.auth-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  background-color: #1e1e1e;
  color: white;
  font-family: 'Roboto', Arial, sans-serif;
}

/* Contenedor de botones de autenticación */
.auth-buttons {
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-bottom: 30px;
  width: 100%;
  max-width: 400px;
}

/* Botones de autenticación */
button {
  padding: 15px;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: bold;
  color: white;
  background-color: #333;
  width: 100%;
  margin-bottom: 20px;
}

button:hover {
  background-color: #444;
  transform: translateY(-2px);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
}

/* Formulario de autenticación */
.auth-form {
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  max-width: 400px;
}

/* Inputs del formulario */
input {
  padding: 15px;
  border: 1px solid #555;
  border-radius: 8px;
  background-color: #333;
  color: white;
  font-size: 16px;
  width: 100%;
}

input::placeholder {
  color: #aaa;
}

/* Errores */
.error {
  color: #e74c3c;
  font-weight: bold;
  margin-bottom: 10px;
  background-color: rgba(231, 76, 60, 0.1);
  padding: 10px;
  border-radius: 5px;
  text-align: center;
}

/* Responsividad */
@media screen and (max-width: 768px) {
  .auth-buttons, .auth-form {
    width: 100%;
  }

  input {
    width: 100%;
  }
}
</style>
