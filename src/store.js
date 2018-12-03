import Vue from 'vue'
import Vuex from 'vuex'
import GoodsList from './components/goodsList/store.js'
import Update from './components/update/store.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    GoodsList,
    Update
  }
})
