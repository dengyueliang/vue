export default ({
    namespaced: true,
    state: {
        curPage: 1,
        eachPage: 5,
        maxPage: 0,
        row: [],
        total: 0,
        _id:'',
        dialogFormVisible:false
    },
    mutations: {
        getAllGoods(state, payload) {
            Object.assign(state, payload)
        },
        setCurPage(state, curPage) {
            state.curPage = curPage
        },
        seteachPage(state, eachPage) {
            state.eachPage = eachPage
        },
        setdialogFormVisible(state,_id) {
            state._id=_id
            state.dialogFormVisible = !state.dialogFormVisible 
        }
    },
    actions: {
        async getAllAsync(context,{curPage = 1,eachPage = 4}={}) {
            const data = await fetch(`/goods/getAll?curPage=${curPage}&eachPage=${eachPage}`)
                .then(response => response.json())
            context.commit("getAllGoods", data)
        }
    },
    getters: {

    }
})