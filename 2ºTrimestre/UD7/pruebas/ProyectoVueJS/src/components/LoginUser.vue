<script setup>
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import { useCurrentUser, useFirebaseAuth } from 'vuefire'
import { ref } from 'vue'

const auth = useFirebaseAuth()
const googleAuthProvider = new GoogleAuthProvider()
const user = useCurrentUser()
const error = ref(null)

function iniciarSesion() {
  signInWithPopup(auth, googleAuthProvider)
    .then(() => {
      console.log('Usuario logueado')
    })
    .catch((reason) => {
      console.error('Fallo al iniciar sesión:', reason)
      error.value = reason.message
    })
}

function cerrarSesion() {
  signOut(auth)
    .then(() => {
      console.log('Usuario deslogueado')
    })
    .catch((reason) => {
      console.error('Fallo al cerrar sesión:', reason)
      error.value = reason.message
    })
}
</script>

<template>
  <div>
    <p v-if="user">Hola {{ user.providerData[0]?.displayName || 'Usuario' }}</p>
    <p v-if="error" class="error">{{ error }}</p>

    <button v-if="user" @click="cerrarSesion">Cerrar Sesión</button>
    <button v-else @click="iniciarSesion">Iniciar sesión con Google</button>
  </div>
</template>

<style scoped>
.error {
  color: red;
  font-weight: bold;
}
</style>
