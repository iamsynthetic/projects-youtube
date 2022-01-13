import { createApp } from 'vue'
import YouTube from 'vue3-youtube'
import App from './App.vue'

const app = createApp(App);
app.use(YouTube);
app.mount('#app')


//createApp(App).mount('#app')
