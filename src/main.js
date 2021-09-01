import { createApp } from 'vue'
import App from './App.vue'
import router from "@/common/router";
import axios from "axios";
import vueAxios from 'vue-axios'

// 5. 创建并挂载根实例
const app = createApp(App)
app.use(router)
app.use(vueAxios, axios)
app.mount('#app')
