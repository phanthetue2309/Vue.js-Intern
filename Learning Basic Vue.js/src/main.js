import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App).mount('#app')

app.config.globalProperties.$filters = {
  currencyUSD(so_tien) {
    return so_tien.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
  }
}