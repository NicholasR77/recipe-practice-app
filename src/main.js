import { createApp } from 'vue';
import PrimeVue from 'primevue/config';

import App from './App.vue';
import router from './router';
import 'primevue/resources/themes/aura-dark-amber/theme.css';
import 'primeicons/primeicons.css'

const app = createApp(App);

app.use(router);
app.use(PrimeVue);

app.mount('#app');
