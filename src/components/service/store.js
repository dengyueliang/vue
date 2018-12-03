
export default {
    namespaced: true,
    state: {
        curPage: 1,
        eachPage: 5,
        maxPage: 0,
        total: 0,
        rows: []
    },
    getters: {

    },
    mutations: {
        addService() {
        },
        getServiceByPageAsync(state, payload) {
            Object.assign(state, payload)
        },
        upDateService(state, payload) {
            Object.assign({}, state.row, payload)
        },
        removeService(state, payload) {
            let arr = []
            for (let i = 0; i < state.rows.length; i++) {
                if (state.rows[i] != payload) {
                    arr.push(state.rows[i])
                }
            }
            state.rows = arr
        },
        setCurPage(state, curPage) {
            state.curPage = curPage
        },
        setEachPage(state, eachPage) {
            state.eachPage = eachPage
        }
    },
    actions: {
        async addService(context, obj) {
            await fetch('/service/addService', {
                method: "POST",
                body: JSON.stringify(obj),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            context.commit('addService')
        },
        async getServiceByPageAsync(context, { curPage = 1, eachPage = 5 } = {}) {
            const data = await fetch(`/service/getServiceByPage?curPage=${curPage}&eachPage=${eachPage}`).then(res => res.json())
            context.commit('getServiceByPageAsync', data)
        },
        async upDateService(context, obj) {
            const data = await fetch('/service/upDateService', {
                method: "POST",
                body: JSON.stringify(obj),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            context.commit('upDateService', obj)
        },
        async removeService(context, obj) {
            await fetch('/service/removeService', {
                method: "POST",
                body: JSON.stringify(obj),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            context.commit('removeService', obj)
        }
    }
}