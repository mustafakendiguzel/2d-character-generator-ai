// import './assets/main.css'
import './assets/tailwind.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { DotLottieVue } from '@lottiefiles/dotlottie-vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.component('dotlottie-vue', DotLottieVue)
app.use(createPinia())
app.use(router)

app.mount('#app')
