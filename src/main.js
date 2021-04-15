import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bpmn-js/dist/assets/diagram-js.css"
import "bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css"
const app = createApp(App);
app.use(router)
app.mount('#app')
