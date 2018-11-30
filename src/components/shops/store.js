export default ({
    namespaced: true,
    state: {
        curPage: 1,
        eachPage: 5,
        total: 0,
        maxPage: 0,
        rows: [],
        arr:[],
    },
    mutations: {
        getShopsByPage(state,payload){
           Object.assign(state,payload)
        },
        getshopEmployee(state,payload){
            Object.assign(state,payload)
         },
        setCurPage(state,curPage){
            state.curPage=curPage
        },
        seteachPage(state,eachPage){
            state.eachPage=eachPage
        }
    },
    actions: {
          async  getShopsByPageAsyns(context,{curPage=1,eachPage=5}={}){
            const data=await fetch(`/shop/getShops?curPage=${curPage}&eachPage=${eachPage}`)
            .then(response=>response.json())
            context.commit("getShopsByPage",data)
          },
          async  getShopEmployee(context,id){
            const data=await fetch(`/shop/getShops?_id${id}`)
            .then(response=>response.json())
            context.commit("getshopEmployee",data)
          }
    }
})