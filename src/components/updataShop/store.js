export default ({
    namespaced: true,
    state: {
        shopName: "", //名称
        shopLicenceNum: "", //营业执照ing
        shopLicenxeImg: null, //营业执照图片
        shopAdd: "", //营业地址
        shopLocation: "", //营业定位
        shopCorporate: "", //法人
        shopTel: "", //联系电话
        shopImg: "", //头像
        shopFeature: "" //特色
    },
    mutations: {
        getShopsById(state, payload) {
            Object.assign(state, payload[0])
        },
        updataShopName(state, shopName) {
            state.shopName = shopName
        },
        updataShopLicenceNum(state, shopLicenceNum) {
            state.shopLicenceNum = shopLicenceNum
        },
        updataShopAdd(state, shopAdd) {
            state.shopAdd = shopAdd
        },
        updataShopCorporate(state, shopCorporate) {
            state.shopCorporate = shopCorporate
        },
        updataShopTel(state, shopTel) {
            state.shopTel = shopTel
        },
        updataShopFeature(state, shopFeature) {
            state.shopFeature = shopFeature
        }
    },
    actions: {
        async  getShopsByIdAsyns(context, id) {
            const data = await fetch(`/shop/getById?_id=${id}`)
                .then(response => response.json())
            context.commit("getShopsById", data)
        },
        async postyUpdataShops(context,) {
            let { shopName,
                shopLicenceNum,
                shopLicenxeImg,
                shopAdd,
                shopLocation,
                shopCorporate,
                shopTel,
                shopImg,
                shopFeature,
                _id
            } = this.state.Updata
            const data = await fetch(`/shop/updataShops`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: `_id=${_id}&shopName=${shopName}&shopLicenceNum=${
                    shopLicenceNum
                    }&shopLicenxeImg=${shopLicenxeImg}&shopAdd=${
                    shopAdd
                    }&shopLocation=${shopLocation}&shopCorporate=${
                    shopCorporate
                    }&shopTel=${shopTel}&shopImg=${shopImg}&shopFeature=${
                    shopFeature
                    }`
            });
        }
    }
})