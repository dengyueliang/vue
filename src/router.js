import Vue from 'vue'
import Router from 'vue-router'
import Info from "./views/Info.vue"
import Login from "./views/Login.vue"
import ShopsList from "./components/shops/shopsList.vue"
import ShopsAdd from"./components/shops/Add.vue"
import ShopsUpdata  from"./components/updataShop/updata.vue"
import ShopEmployee from"./components/shops/shopEmployee.vue"
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/info',
      name: 'info',
      component: Info,
      children: [{
        path: '/info/add',
        name: 'shopsAdd',
        component: ShopsAdd
      },
       {
        path: '/info/shopsList',
        name: 'shopsList',
        component:ShopsList
      },{
        path: '/info/shopsUpdata/:_id',
        name: 'shopsUpdata',
        component:ShopsUpdata
      },{
        path: '/info/shopEmployee/:_id',
        name: 'shopEmployee',
        component:ShopEmployee
      }]
    }

  ]
})
