import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'     // 引入 Element-plus 的 CSS 樣式
import store from './store/theme.js'


const app = createApp(App)

app.use(ElementPlus)
app.use(store)
app.mount('#app')