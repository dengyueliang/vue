import Vue from 'vue'
import Router from 'vue-router'
// import Info from "./views/Info.vue"
// import Login from "./views/Login.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'info',
      component: () => import(/* webpackChunkName: "about" */ './views/Info.vue'),
      children: [
        {
          path: 'addService',
          name: 'addService',
          component: () => import(/* webpackChunkName: "about" */ './components/service/addService.vue'),
        },
        {
          path: 'serviceList',
          name: 'serviceList',
          component: () => import(/* webpackChunkName: "about" */ './components/service/serviceList.vue'),
        },
        {
          path: 'addSchedule',
          name: 'addSchedule',
          component: () => import(/* webpackChunkName: "about" */ './components/schedule/addSchedule.vue'),
        },
        {
          path: 'scheduleList',
          name: 'scheduleList',
          component: () => import(/* webpackChunkName: "about" */ './components/schedule/scheduleList.vue'),
        }
      ]
    }
  ]
})
