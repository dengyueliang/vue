import Vue from 'vue'
import App from './App.vue'
import store from './store'

//引入路由
import router from "./router"

//引入自动注册组件
import "./components/_globals"

//引入饿了么ui组件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
