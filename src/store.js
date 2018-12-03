import Vue from 'vue'
import Vuex from 'vuex'
import Shop from "./components/shops/store.js"
import Updata from "./components/updataShop/store.js"
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Shop,
    Updata
  }
})
