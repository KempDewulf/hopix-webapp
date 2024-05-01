import './assets/reset.css'
import './assets/style.css'
import '../node_modules/flag-icons/css/flag-icons.min.css';
import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import {createI18n} from "vue-i18n";

const i18n = createI18n({
    locale: localStorage.getItem('language') || 'en',
    fallbackLocale: 'en',
})

const app = createApp(App)
app.config.globalProperties.window = window

app.use(router)
app.use(i18n)

app.mount('#app')
