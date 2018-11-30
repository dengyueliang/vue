<template>
  <div class="login-wrap" :style="{'height':height}">
    <div class="ms-login">
      <div class="ms-title">爱宠邦后台系统</div>
      <el-form label-width="0px" class="ms-content">
        <div class="admin">


          <el-form-item prop="username">
            <el-input placeholder="phone" :value="userName" @input="updateUserName" >
              <el-button slot="prepend" icon="el-icon-phone"></el-button>
            </el-input>
          </el-form-item>

          <el-form-item prop="password">
            <el-input type="password" placeholder="password" :value="userPsw" @input="updateUserPsw">
              <el-button slot="prepend" icon="el-icon-loading"></el-button>
            </el-input>
          </el-form-item>

          <div class="login-btn">
            <el-button type="primary" @click="handleClickLogin">{{userType===0?"平台管理登陆":"门店管理登陆"}}</el-button>
          </div>
        </div>

        <el-button type="primary" @click="updateUserType">{{userType===0?"我是门店管理员":"我是平台管理员"}}</el-button>
        <el-button type="primary"  @click="handleClickReg" style="float:right">还没门店？立即注册</el-button>

      </el-form>
    </div>
  </div>
</template>









<script>
import { createNamespacedHelpers } from "vuex";
const {
  mapMutations,
  mapState,
  mapGetters,
  mapActions
} = createNamespacedHelpers("login");

export default {
  name: "login",
  data() {
    return {
      height: window.innerHeight + "px"
    };
  },

  methods: {
    ...mapMutations([
      "updateUserName",
      "updateUserPsw",
      "updateUserType",
      "updateUserMailbox"
    ]),
    ...mapActions(["loginAsync"]),

    async handleClickLogin() {
      let result = await this.loginAsync();
      if (result.state) {
        // this.$router.({ name: "info", params: {} });
        localStorage.setItem("islogin", JSON.stringify(result.state));//缓存登陆状态
        localStorage.setItem("userType", JSON.stringify(this.userType));//缓存登陆身份
        this.$router.push({name:"info"})
      } else {
        this.$message({
          message: "账号或密码错误",
          type: "warning"
        });
      }
    },
    handleClickReg(){
      this.$router.push({name:"reg"})
    }
  },

  computed: {
    ...mapState({
      userName: state => state.userName, //用户账号
      userPsw: state => state.userPsw, //用户密码
      userType: state => state.userType, //用户类型
      userMailbox: state => state.userMailbox, //用户邮箱
      userShop: state => state.userShop, //用户门店集合
      userGoods: state => state.userGoods, //用户商品集合
      userService: state => state.userService //用户服务集合
    })
  },
  mounted() {}

  // computed: {

  //  async handlogin() {

  //    //获取用户信息
  //     const data = await fetch(
  //       `/users/login?userName=${this.userName}&userPsw=${this.userPsw}&userType=${this.identityType}`
  //     ).then(Response => Response.json());

  //     if(data.state){//信息获取成功
  //       console.log(data.data[0])
  //       this.$router.push({ path: "/" });
  //     }else{
  //       this.$message({
  //         message: '账号或密码错误',
  //         type: 'warning'
  //       });
  //     }

  //   },
  //   handleClickLoginType() {
  //     this.identityType = this.identityType === 0 ? 1 : 0;
  //   },

  //   //点击注册
  //   handchangeReg() {
  //     this.$router.push({ path: "/reg" });
  //   }
  // }
};
</script>























<style>
.login-wrap {
  position: relative;
  width: 100%;
  background-image: url(../assets/login-bg.jpg);
  background-size: 100%;
  background-position: 0px -90px;
}

.ms-title {
  width: 100%;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
  color: #fff;
  border-bottom: 1px solid #ddd;
}

.ms-login {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 400px;
  margin: -190px 0 0 -175px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.3);
  overflow: hidden;
}

.ms-content {
  padding: 30px 30px;
}
.login-btn {
  text-align: center;
}
.login-btn button {
  width: 100%;
  height: 36px;
  margin-bottom: 10px;
}
.login-tips {
  font-size: 12px;
  line-height: 30px;
  color: #999;
}
.admin {
  display: block;
}
</style>