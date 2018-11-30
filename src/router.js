import Vue from 'vue'
import Router from 'vue-router'
import Info from "./views/Info.vue"
import Login from "./views/Login.vue"
import Reg from "./views/Reg.vue"

//2级组件路由
import Hello from "./components/Hello.vue"
import OnLineBusinessList from "./components/OnLineBusinessList.vue"


function aJurisdiction(to, from, next,massage){//平台用户的权限判断放
  if (JSON.parse(localStorage.getItem("userType"))) {//门店管理员
    alert(massage) 
  }else{//平台管理员
    next()
  }
}

function bJurisdiction(to, from, next,massage){//门店用户的权限判断放
  console.log("dsadsa")
  if (JSON.parse(localStorage.getItem("userType"))) {//平台管理员
    next()
    
  }else{//门店管理员
    alert(massage) 
  }
}



Vue.use(Router)

const router = new Router({
  routes: [
    {
      // meta: { requireAuth: true },
      path: "/login",
      name: "login",
      component: Login
    },
    {
      // meta: { requireAuth: true },
      path: "/reg",
      name: "reg",
      component: Reg
    },
    {
      path: '/',
      name: 'info',
      meta: { requireAuth: true },
      component: Info,
      children: [
        {
          path: "/info/hello",
          name: "hello",
          component: Hello
        },
        {
          path: "/info/onLineBusinessList",//商家列表
          name: "onLineBusinessList",
          component: OnLineBusinessList,
          beforeEnter: (to, from, next) => {aJurisdiction(to, from, next,"你是门店管理员,无此权限!")},
        },
        {
          path: "/info/toexamineBusinessList",//待审商家
          name: "onLineBusinessList",
          component: OnLineBusinessList,
          beforeEnter: (to, from, next) => {aJurisdiction(to, from, next,"你是门店管理员,无此权限!")},
        },
        {
          path: "/info/userList",//客户列表
          name: "onLineBusinessList",
          component: OnLineBusinessList,
          beforeEnter: (to, from, next) => {aJurisdiction(to, from, next,"你是门店管理员,无此权限!")},
        },
        {
          path: "/info/shopAdd",//新增门店
          name: "shopAdd",
          component: OnLineBusinessList,
          beforeEnter: (to, from, next) => {bJurisdiction(to, from, next,"你是平台管理员,无此权限!")},
        },
        {
          path: "/info/shopList",//门店列表
          name: "shopList",
          component: OnLineBusinessList,
          beforeEnter: (to, from, next) => {bJurisdiction(to, from, next,"你是平台管理员,无此权限!")},
        },
        {
          path: "/info/addService",//新增服务
          name: "addService",
          component: OnLineBusinessList,
          beforeEnter: (to, from, next) => {bJurisdiction(to, from, next,"你是平台管理员,无此权限!")},
        },
        {
          path: "/info/serviceList",//服务列表
          name: "serviceList",
          component: OnLineBusinessList,
          beforeEnter: (to, from, next) => {bJurisdiction(to, from, next,"你是平台管理员,无此权限!")},
        },
        {
          path: "/info/addGoods",//新增商品
          name: "addGoods",
          component: OnLineBusinessList,
          beforeEnter: (to, from, next) => {bJurisdiction(to, from, next,"你是平台管理员,无此权限!")},
        },
        {
          path: "/info/goodsList",//商品列表
          name: "goodsList",
          component: OnLineBusinessList,
          beforeEnter: (to, from, next) => {bJurisdiction(to, from, next,"你是平台管理员,无此权限!")},
        },
        {
          path: "/info/addPets",//新增宠物
          name: "addPets",
          component: OnLineBusinessList,
          beforeEnter: (to, from, next) => {bJurisdiction(to, from, next,"你是平台管理员,无此权限!")},
        },
        
      ]
    },
 
    
  ]
});

router.beforeEach((to, from, next) => {
  
  if (to.meta.requireAuth) {//如果访问的页面开启了路由守卫

    if (JSON.parse(localStorage.getItem("islogin"))) {//如果登陆了
      next();//就加载要访问的那个页面
    } else {//否则没登陆
      next({
        path: "/login"//加载login界面
      });
    }


  } else {//没有开启路由守卫 直接加载页面
    next();
  }


  // console.log(to.fullPath)
  // if (to.fullPath === "/login") {//如果要访问登陆界面
  //   if (JSON.parse(localStorage.getItem("islogin"))) {//如果登陆了
  //     next({
  //       path: from.fullPath
  //     });
  //   } else {
  //     next();
  //   }
  // }
});



export default router;
