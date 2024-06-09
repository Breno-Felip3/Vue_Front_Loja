import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import { URL_API } from './config/api'

axios.defaults.baseURL = URL_API

createApp(App)
    .use(router)
    .mount('#app')
