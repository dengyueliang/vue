export default ({
    namespaced: true,
    state: {
        curPage: 1,
        eachPage: 5,
        total: 0,
        maxPage: 0,
        rows: [],
        arr:[],
        dialogFormVisible: false,
    },
    mutations: {
        getShopsByPage(state,payload){
           Object.assign(state,payload)
        },
        getshopEmployee(state,payload){
            state.arr=payload[0].shopEmployee
         },
         setdialogFormVisible(state){
             state.dialogFormVisible=!state.dialogFormVisible
             console.log(state.dialogFormVisible)
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
            const data=await fetch(`/shop/getById?_id=${id}`)
            .then(response=>response.json())
            context.commit("getshopEmployee",data)
          }
    }
})