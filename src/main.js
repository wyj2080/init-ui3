import { createApp } from 'vue'
import App from './App.vue'
import router from "@/common/router";
import axios from "axios";
import vueAxios from 'vue-axios'
import request from '@/common/request'

// 5. 创建并挂载根实例
const app = createApp(App)
app.config.globalProperties.$https = request
app.use(router)
app.use(vueAxios, axios)
app.mount('#app')
