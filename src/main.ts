import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import "./plugins/fontawesome"

createApp(App)
  .use(createPinia())
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount('#app')
