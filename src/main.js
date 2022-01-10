import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 按需引入 ECharts
import './plugins/echarts'

createApp(App).use(router).use(store).mount('#app')
