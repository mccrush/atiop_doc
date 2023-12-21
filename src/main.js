import './scss/styles.scss'

import { Offcanvas } from 'bootstrap'

import { createApp } from 'vue'
import App from './App.vue'

let app

if (!app) {
  app = createApp(App).mount('#app')
}