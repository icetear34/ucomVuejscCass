

import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import { createPinia } from 'pinia';
import router from './router';

createApp(App).use(createPinia()).use(router).mount('#app')
