import Vue from 'vue'
import Vuex from 'vuex'
import ServiceApp from "./views/service/store.js"
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    ServiceApp
  }
})
