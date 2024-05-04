import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import pinia from '@/stores';

// CSS 
import 'normalize.css';
import '@/assets/scss/index.scss';

createApp(App).use(router).use(pinia).mount('#app');
