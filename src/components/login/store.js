export default {
  namespaced: true,
  state: {
    userId: '',
    userName: '',//用户账号
    userPsw: '',//用户密码
    userType: 0,//用户类型 0平台管理员 1门店管理员
    userMailbox: '',//用户邮箱
    userShop: [],//门店用户门店集合
    userGoods: [],//门店用户商品集合
    userService: []//门店用户服务集合
  },
  mutations: {
    updateUserName(state, userName) {
      state.userName = userName
    },
    updateUserPsw(state, userPsw) {
      state.userPsw = userPsw
    },
    updateUserType(state, userType) {
      state.userType = state.userType === 0 ? 1 : 0
    },
    updateUserMailbox(state, userMailbox) {
      state.userMailbox = userMailbox
    },

    mutationsLogin(state, data) {
      let { userMailbox, userShop, userGoods, userService, _id, userType} = data[0]
      state.userId = _id //用户id
      state.userType = userType//用户类型
      state.userMailbox = userMailbox //用户邮箱
      state.userShop = userShop //门店用户的门店集合
      state.userGoods = userGoods//门店用户的商品集合
      state.userService = userService//门店用户的服务集合
      console.log("login_store")
      console.log(state.userType)
    }

  },
  actions: {
    async loginAsync({ commit, state }) {
      let data = await fetch(`/users/login?userName=${state.userName}&userPsw=${state.userPsw}&userType=${state.userType}`
      ).then(Response => Response.json());
      if(data.state){
        
        commit("mutationsLogin",data.data)
      }
      return data
    }
  }
}
