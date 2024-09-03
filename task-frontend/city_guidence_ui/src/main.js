import { createApp } from 'vue'
import App from './App.vue'
import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
import axios from "axios";

const app = createApp(App)
app.use(ArcoVue)
app.use(ArcoVueIcon)

app.config.productionTip = false;

let serverHost;
let navigatePort;
let taskPort

axios.get('./static/config.json').then((res) => {
    serverHost = res.data.serverHost;
    navigatePort = res.data.navigatePort;
    taskPort = res.data.taskPort;
    app.config.globalProperties.$axios= axios
    axios.defaults.withCredentials = false
    axios.defaults.headers.common['Access-Control-Allow-Origin']="*"
    axios.defaults.baseURL = "http://"+serverHost+":"+taskPort
    axios.defaults.headers.post['Content-Type']= 'application/x-www-form-urlencoded'

    app.config.globalProperties.$WsUriPrefix = "ws://"+serverHost+":"+taskPort ;
    app.config.globalProperties.$Ws2UriPrefix = "ws://"+serverHost+":"+navigatePort ;
    console.log("Service Config is",res.data)
    app.mount('#app')
})





