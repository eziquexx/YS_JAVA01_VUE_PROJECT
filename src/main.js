import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// createApp(App).use(router).mount('#app')

import store from './store'
createApp(App).use(router).use(store).mount('#app')

