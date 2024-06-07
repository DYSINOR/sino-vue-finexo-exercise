import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'////////////////
import router from './route'
import i18n from './i18n'
// import store from './store';






const pinia = createPinia()//////////////////////////


const app = createApp(App)
app.use(router)
app.use(pinia)////////////////
app.use(i18n)
// app.use(store)
app.mount('#app')



// import { createApp } from 'vue';
// import App from './App.vue';
// import router from './router';
// import store from './store';

// createApp(App).use(store).use(router).mount('#app');