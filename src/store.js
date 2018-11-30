import Vue from 'vue'
import Vuex from 'vuex'
import login from "./components/login/store.js" //登陆的状态机 提供用户的信息

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    login,
  }
})
