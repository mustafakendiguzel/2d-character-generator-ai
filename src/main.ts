// import './assets/main.css'
import './assets/tailwind.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faArrowLeft,
  faArrowRight,
  faBrush,
  faCheck,
  faDownload,
  faEdit,
  faEraser,
  faFillDrip,
  faTrashAlt,
  faUndo
} from '@fortawesome/free-solid-svg-icons'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { DotLottieVue } from '@lottiefiles/dotlottie-vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faBrush)
library.add(faEraser)
library.add(faDownload)
library.add(faFillDrip)
library.add(faArrowLeft)
library.add(faArrowRight)
library.add(faTrashAlt)
library.add(faUndo)
library.add(faEdit)
library.add(faCheck)

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.component('dotlottie-vue', DotLottieVue)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(createPinia())
app.use(router)

app.mount('#app')
