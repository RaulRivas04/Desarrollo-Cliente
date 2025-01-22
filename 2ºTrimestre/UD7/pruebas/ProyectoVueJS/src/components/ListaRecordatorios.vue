<script setup>
import { ref, computed, onMounted, watch } from "vue";
import Cabecera from "./CabeceraPrincipal.vue";
import Tarea from "./VistaTarea.vue";
import ResumenTareas from "./ResumenTareas.vue";
import { useFirestore, useCurrentUser } from 'vuefire';
import { collection, addDoc, query, where, onSnapshot, deleteDoc, doc, updateDoc } from 'firebase/firestore';

const db = useFirestore();
const user = useCurrentUser();
const listaRecordatorios = ref([]);

onMounted(() => {
  if (user.value) {
    const q = query(collection(db, "recordatorios"), where("uid", "==", user.value.uid));
    onSnapshot(q, (querySnapshot) => {
      listaRecordatorios.value = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    });
  }
});

watch(user, (newUser) => {
  if (newUser) {
    const q = query(collection(db, "recordatorios"), where("uid", "==", newUser.uid));
    onSnapshot(q, (querySnapshot) => {
      listaRecordatorios.value = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    });
  }
});

async function altaNuevaNota(texto) {
  let nuevoRecordatorio = {
    titulo: texto,
    prioridad: "Normal",
    fechaCreacion: Date.now(),
    acabada: false,
    uid: user.value.uid
  };

  try {
    const docRef = await addDoc(collection(db, "recordatorios"), nuevoRecordatorio);
    console.log("Documento agregado con ID:", docRef.id);
    // No es necesario agregar la tarea a la lista local aquí, ya que onSnapshot se encargará de actualizar la lista
  } catch (error) {
    console.error("Error al agregar documento:", error);
  }
}

async function borrarTarea(id) {
  try {
    await deleteDoc(doc(db, "recordatorios", id));
    console.log("Documento borrado con ID:", id);
  } catch (error) {
    console.error("Error al borrar documento:", error);
  }
}

async function cambiarPrioridad(tarea, nuevaPrioridad) {
  try {
    await updateDoc(doc(db, "recordatorios", tarea.id), { prioridad: nuevaPrioridad });
    tarea.prioridad = nuevaPrioridad;
    ordenarNotas();
  } catch (error) {
    console.error("Error al actualizar documento:", error);
  }
}

async function cambiarEstado(tarea) {
  try {
    await updateDoc(doc(db, "recordatorios", tarea.id), { acabada: !tarea.acabada });
    tarea.acabada = !tarea.acabada;
  } catch (error) {
    console.error("Error al actualizar documento:", error);
  }
}

async function borrarCompletadas() {
  const tareasCompletadas = listaRecordatorios.value.filter(tarea => tarea.acabada);
  for (const tarea of tareasCompletadas) {
    await borrarTarea(tarea.id);
  }
}

function ordenarNotas() {
  listaRecordatorios.value.sort((a, b) => {
    const prioridades = { "High": 3, "Normal": 2, "Low": 1 };
    return prioridades[b.prioridad] - prioridades[a.prioridad];
  });
}

const numeroTareasPendientes = computed(() => {
  return listaRecordatorios.value.filter((el) => !el.acabada).length;
});

const totalTareas = computed(() => listaRecordatorios.value.length);

</script>

<template>
  <Cabecera @altaRecordatorio="altaNuevaNota" />

  <div class="resumen">
    <p>{{ numeroTareasPendientes }} tareas pendientes de un total de {{ totalTareas }}</p>
  </div>

  <ResumenTareas :pendientes="numeroTareasPendientes" :total="totalTareas" @borrarCompletadas="borrarCompletadas" />

  <transition-group name="fade" tag="div">
    <div v-for="tarea in listaRecordatorios" :key="tarea.id">
      <Tarea
        :titulo="tarea.titulo"
        :prioridad="tarea.prioridad"
        :acabada="tarea.acabada"
        @cambiarPrioridad="cambiarPrioridad(tarea, $event)"
        @cambiarEstado="cambiarEstado(tarea)"
        @borrado="() => borrarTarea(tarea.id)"
      />
    </div>
  </transition-group>
</template>

<style scoped>
/* Estilo para las tareas completadas */
.tarea-completada {
  text-decoration: line-through;
  color: gray;
}

/* Animación para la transición */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active en versiones anteriores de Vue */ {
  opacity: 0;
}

.resumen {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}
</style>
