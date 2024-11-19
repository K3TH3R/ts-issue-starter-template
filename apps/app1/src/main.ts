import { createApp } from 'vue'

import PrimeVue from 'primevue/config'

import App from './app/App.vue'
import router from './router'

import './styles.css'
import 'primeicons/primeicons.css'

const app = createApp(App)
app.use(router)
app.use(PrimeVue)
app.mount('#root')
