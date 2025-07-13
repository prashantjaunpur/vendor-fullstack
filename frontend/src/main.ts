import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Vue3Toastify, { type ToastContainerOptions } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import './style.css'
import App from './App.vue'

const toastOptions: ToastContainerOptions = {
  autoClose: 3000,
  position: 'top-right',
  pauseOnHover: true
}

const app = createApp(App)
app.use(Vue3Toastify, toastOptions)
app.use(createPinia())
app.mount('#app')
