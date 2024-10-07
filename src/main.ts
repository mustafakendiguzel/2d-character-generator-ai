// import './assets/main.css'
import './assets/tailwind.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBrush, faEraser } from '@fortawesome/free-solid-svg-icons'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { DotLottieVue } from '@lottiefiles/dotlottie-vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faBrush)
library.add(faEraser)

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.component('dotlottie-vue', DotLottieVue)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(createPinia())
app.use(router)

app.mount('#app')
