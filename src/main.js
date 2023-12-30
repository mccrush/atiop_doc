import './scss/styles.scss'

import { Offcanvas } from 'bootstrap'

import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

import { createApp } from 'vue'
import App from './App.vue'

Fancybox.bind("[data-fancybox]", {
  // Your custom options
});

let app

if (!app) {
  app = createApp(App).mount('#app')
}