export default ({
    namespaced: true,
    state: {
        goodsName: "",
        goodsType: "",
        goodsMaterial: "",
        goodsCanFor: "",
        goodsOnlyFor: "",
        goodsSize: "",
        goodsTaste: "",
        goodsSpecial: "",
        goodsRegion: "",
        goodsDate: "",
        goodsTime: "",
        goodsSupplier: "",
        goodsIntro: "",
        goodsPrice: ""
    },
    mutations: {
        goodsById(state, payload) {
            Object.assign(state, payload[0])
        },
        updateGoodsName(state, goodsName) {
            state.goodsName = goodsName
        },
        updategoodsType(state, updategoodsType) {
            state.updategoodsType = updategoodsType
        },
        goodsMaterial(state, goodsMaterial) {
            state.goodsMaterial = goodsMaterial
        },
        goodsCanFor(state, goodsCanFor) {
            state.goodsCanFor = goodsCanFor
        },
        goodsOnlyFor(state, goodsOnlyFor) {
            state.goodsOnlyFor = goodsOnlyFor
        },
        goodsSize(state, goodsSize) {
            state.goodsSize = goodsSize
        },
        goodsTaste(state, goodsTaste) {
            state.goodsTaste = goodsTaste
        },
        goodsSpecial(state, goodsSpecial) {
            state.goodsSpecial = goodsSpecial
        },
        goodsRegion(state, goodsRegion) {
            state.goodsRegion = goodsRegion
        },
        goodsDate(state, goodsDate) {
            state.goodsDate = goodsDate
        },
        goodsTime(state, goodsTime) {
            state.goodsTime = goodsTime
        },
        goodsSupplier(state, goodsSupplier) {
            state.goodsSupplier = goodsSupplier
        },
        goodsIntro(state, goodsIntro) {
            state.goodsIntro = goodsIntro
        },
        goodsPrice(state, goodsPrice) {
            state.goodsPrice = goodsPrice
        },

    },
    actions: {
        async getGoodByIdAsync(context, id) {
            const data = await fetch(`/goods/getGoodById?id=${id}`)
                .then(response => response.json())
            context.commit("goodsById", data)
        },
        async postRequest(context, id) {
            let {
                goodsName,
                goodsType,
                goodsMaterial,
                goodsCanFor,
                goodsOnlyFor,
                goodsSize,
                goodsTaste,
                goodsSpecial,
                goodsRegion,
                goodsDate,
                goodsTime,
                goodsSupplier,
                goodsIntro,
                goodsPrice
            } = this.state.Update
            const data = await fetch("/goods/updateGoodById", {
                method: "post",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: `_id=${id}&goodsName=${goodsName}&goodsType=${goodsType}&goodsMaterial=${goodsMaterial}&goodsCanFor=${goodsCanFor}&goodsOnlyFor=${goodsOnlyFor}&goodsSize=${goodsSize}&goodsTaste=${goodsTaste}&goodsSpecial=${goodsSpecial}&goodsRegion=${goodsRegion}&goodsDate=${goodsDate}&goodsTime=${goodsTime}&goodsSupplier=${goodsSupplier}&goodsIntro=${goodsIntro}&goodsPrice=${goodsPrice}`
            })
        },
    },
 
})