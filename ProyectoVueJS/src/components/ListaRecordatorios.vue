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

/* Obtener recordatorios al montar el componente */
onMounted(() => {
  if (user.value) {
    const q = query(collection(db, "recordatorios"), where("uid", "==", user.value.uid));
    onSnapshot(q, (querySnapshot) => {
      listaRecordatorios.value = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      ordenarNotas(); // Ordenar notas después de obtenerlas
    });
  }
});

/* Observar cambios en el usuario */
watch(user, (newUser) => {
  if (newUser) {
    const q = query(collection(db, "recordatorios"), where("uid", "==", newUser.uid));
    onSnapshot(q, (querySnapshot) => {
      listaRecordatorios.value = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      ordenarNotas(); // Ordenar notas después de obtenerlas
    });
  }
});

/* Alta de nueva nota */
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
    ordenarNotas(); // Ordenar notas después de añadir una nueva
  } catch (error) {
    console.error("Error al agregar documento:", error);
  }
}

/* Borrar tarea */
async function borrarTarea(id) {
  try {
    await deleteDoc(doc(db, "recordatorios", id));
    console.log("Documento borrado con ID:", id);
  } catch (error) {
    console.error("Error al borrar documento:", error);
  }
}

/* Cambiar prioridad de la tarea */
async function cambiarPrioridad(tarea, nuevaPrioridad) {
  try {
    await updateDoc(doc(db, "recordatorios", tarea.id), { prioridad: nuevaPrioridad });
    tarea.prioridad = nuevaPrioridad;
    ordenarNotas(); // Ordenar notas después de cambiar la prioridad
  } catch (error) {
    console.error("Error al actualizar documento:", error);
  }
}

/* Cambiar estado de la tarea */
async function cambiarEstado(tarea) {
  try {
    await updateDoc(doc(db, "recordatorios", tarea.id), { acabada: !tarea.acabada });
    tarea.acabada = !tarea.acabada;
  } catch (error) {
    console.error("Error al actualizar documento:", error);
  }
}

/* Borrar tareas completadas */
async function borrarCompletadas() {
  const tareasCompletadas = listaRecordatorios.value.filter(tarea => tarea.acabada);
  for (const tarea of tareasCompletadas) {
    await borrarTarea(tarea.id);
  }
}

/* Ordenar notas por prioridad */
function ordenarNotas() {
  listaRecordatorios.value.sort((a, b) => {
    const prioridades = { "High": 3, "Normal": 2, "Low": 1 };
    return prioridades[b.prioridad] - prioridades[a.prioridad];
  });
}

/* Calcular tiempo transcurrido desde la creación */
function calcularTiempoTranscurrido(fechaCreacion) {
  const ahora = Date.now();
  const diferencia = ahora - fechaCreacion;
  const minutos = Math.floor(diferencia / 60000);
  return minutos;
}

/* Computar número de tareas pendientes */
const numeroTareasPendientes = computed(() => {
  return listaRecordatorios.value.filter((el) => !el.acabada).length;
});

/* Computar total de tareas */
const totalTareas = computed(() => listaRecordatorios.value.length);

</script>

<template>
  <div class="lista-recordatorios-container">
    <Cabecera @altaRecordatorio="altaNuevaNota" />

    <ResumenTareas :pendientes="numeroTareasPendientes" :total="totalTareas" @borrarCompletadas="borrarCompletadas" />

    <transition-group name="fade" tag="div" class="lista-tareas">
      <div v-for="tarea in listaRecordatorios" :key="tarea.id" class="tarea">
        <Tarea
          :titulo="tarea.titulo"
          :prioridad="tarea.prioridad"
          :acabada="tarea.acabada"
          :tiempo="calcularTiempoTranscurrido(tarea.fechaCreacion)"
          @cambiarPrioridad="cambiarPrioridad(tarea, $event)"
          @cambiarEstado="cambiarEstado(tarea)"
          @borrado="() => borrarTarea(tarea.id)"
        />
      </div>
    </transition-group>
  </div>
</template>

<style scoped>
/* Contenedor principal */
.lista-recordatorios-container {
  background-color: #1e1e1e;
  color: white;
  min-height: 100vh;
  padding: 20px;
  box-sizing: border-box;
  margin: 0;
}

/* Lista de tareas */
.lista-tareas {
  margin: 0 auto;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

/* Estilo de cada tarea */
.tarea {
  display: flex;
  justify-content: space-between;
  padding: 15px;
  border-radius: 8px;
  background-color: #333;
  border: 1px solid #444;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.5s ease;
}

.tarea:hover {
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}

/* Transiciones */
.fade-enter-active, .fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.fade-move {
  transition: transform 0.5s ease;
}

/* Estilo para las prioridades */
.prioridad {
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 14px;
  font-weight: bold;
  color: white;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.prioridad.high {
  background-color: #e74c3c;
}

.prioridad.normal {
  background-color: #f39c12;
}

.prioridad.low {
  background-color: #2ecc71;
}

.prioridad.selected {
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  transform: scale(1.1);
}

.prioridad:hover {
  opacity: 0.9;
}

/* Botón de eliminar */
.btn-delete {
  background-color: #e74c3c;
  color: white;
  font-size: 18px;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-delete:hover {
  background-color: #c0392b;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  transform: scale(1.1);
}
</style>
