import './assets/reset.css'
import './assets/style.css'
import '../node_modules/flag-icons/css/flag-icons.min.css';
import {createApp} from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.config.globalProperties.window = window

app.use(router)

app.mount('#app')

