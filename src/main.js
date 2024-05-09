import './assets/reset.css'
import './assets/style.css'
import '../node_modules/flag-icons/css/flag-icons.min.css';
import '../node_modules/flowbite-vue/dist/index.css'
import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';
import {createI18n} from "vue-i18n";
import en from "@/fallBackLocales/en.json";

const i18n = createI18n({
    locale: localStorage.getItem('language') || 'en',
    fallbackLocale: 'en',
    messages: {
        en
    },
    silentTranslationWarn: true,
    silentFallbackWarn: true
})

const app = createApp(App)
app.config.globalProperties.window = window

app.use(router)
app.use(i18n)
app.use(store)

app.mount('#app')
