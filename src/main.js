import { createApp, reactive } from 'vue'
import App from './App.vue'
import router from './router'
import GStore from './store'
import 'nprogress/nprogress.css'

// Create a reactive object
const GStore2 = reactive({ flashMessage: '' })
createApp(App)
  .use(router)
  .provide('GStore', GStore)
  .provide('GStore2', GStore2)
  .mount('#app')
