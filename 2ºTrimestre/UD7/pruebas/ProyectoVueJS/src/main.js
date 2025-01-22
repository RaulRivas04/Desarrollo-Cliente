import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { firebaseApp } from './firebase'
import { VueFire, VueFireAuth } from 'vuefire'
import { createMemoryHistory, createRouter } from 'vue-router'
import landing from './components/ladingPage.vue'
import recordatorios from './components/ListaRecordatorios.vue'
const routes = [
  { path: '/', component: landing, meta: {requiresAuths: false} },
  { path: '/recordatorios', component:  recordatorios, meta: {requiresAuth: true}},
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})



const app = createApp(App)
app.use(VueFire, {
  // imported above but could also just be created here
  firebaseApp,
  modules: [
    // we will see other modules later on
    VueFireAuth(),
  ],
})
app.use(router);

app.mount('#app');
