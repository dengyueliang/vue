<template>
  <div class="login-wraps" :style="{'height':h}">
    <div class="ms-login">
      <div class="ms-title">爱宠邦门店注册</div>
      <el-form label-width="0px" class="ms-content">

          <el-form-item prop="username">
            <el-input placeholder="输入手机号" v-model="userName" @change="handleChangeUserName">
              <el-button slot="prepend" icon="el-icon-phone" ></el-button>
            </el-input>
          </el-form-item>

          <el-form-item prop="userMailbox">
            <el-input placeholder="绑定邮箱" v-model="userMailbox" @change="handleChangeUserMailbox">
              <el-button slot="prepend" icon="el-icon-edit-outline"></el-button>
            </el-input>
          </el-form-item>

          <el-form-item prop="password">
            <el-input type="password" placeholder="6-12位密码" v-model="userPsw" @change="handleChangeUserPsw"> 
              <el-button slot="prepend" icon="el-icon-loading"></el-button>
            </el-input>
          </el-form-item>

           <el-form-item prop="password">
            <el-input type="password" placeholder="确认密码" v-model="confirmPsw" @change="handleChangeConfirmUserPsw"> 
              <el-button slot="prepend" icon="el-icon-info"></el-button>
            </el-input>
          </el-form-item>

          <div class="login-btn">
            <el-button type="primary" @click="handleClickReg">立即注册</el-button>
          </div>

      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      h: window.innerHeight + "px",
      userIsExistence: 1, //用户账号是未被注册 默认未注册
      userNameIsOk:false,//用户账号是否合法
      userPswIsOk:false,//用户密码是否合法
      userConfirmPsw:false,//用户确认密码是否合法
      userMailboxIsOk:false,//用户邮箱是否合法
      userName: "", //注册的账户
      userPsw: "", //注册的密码
      userMailbox: "", //用户邮箱
      confirmPsw: "" //确认密码
    };
  },
  methods: {
    //点击注册
    async handleClickReg() {
      //发送请求查看账户是否被注册
      const data = await fetch(
        `/users/userIsExistence?userName=${this.userName}`
      ).then(Response => Response.json());

      //拿到是否注册的返回的值给状态
      this.userIsExistence = data.state; 

        if(this.userIsExistence){
          this.$message({
            showClose: true,
            message: '账号已存在',
            type: 'error'
          });
        }

        if(!this.userNameIsOk){
          this.$message({
            showClose: true,
            message: '账号格式错误',
            type: 'error'
          });
        }

        if(!this.userPswIsOk){
          this.$message({
            showClose: true,
            message: '密码格式错误',
            type: 'error'
          });
        }

         if(!this.userConfirmPsw){
          this.$message({
            showClose: true,
            message: '两次密码不一致',
            type: 'error'
          });
        }

        if(!this.userMailboxIsOk){
          this.$message({
            showClose: true,
            message: '邮箱格式错误',
            type: 'error'
          });
        }

        if(this.userNameIsOk&&this.userPswIsOk&&this.userConfirmPsw&&this.userMailboxIsOk&&this.userIsExistence===0){
          const data = await fetch(`/users/addUser`, {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            },
            body: `userName=${this.userName}&userPsw=${this.userPsw}&userMailbox=${
              this.userMailbox
            }&userType=1`
          }).then(Response =>{
            Response.json();

            this.$confirm('注册成功是否跳转到登陆界面?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {//确定
              this.$router.push({ path: "/login" });

            }).catch(() => {//取消
              return;
            });
          });
        }


    },

    //账号
    async handleChangeUserName() {
      //发送请求查看账户是否被注册
      const data = await fetch(
        `/users/userIsExistence?userName=${this.userName}`
      ).then(Response => Response.json());

      //拿到是否注册的返回的值给状态
      this.userIsExistence = data.state; 

      //验证手机号码正则
      var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
      this.userNameIsOk = myreg.test(this.userName)

      if(this.userIsExistence){
        this.$notify({
          title: '警告',
          message: '账号重复',
          type: 'warning'
        });
      }else if(this.userNameIsOk){
          this.$notify({
          title: '成功',
          message: '账号可用',
          type: 'success'
        });
      }else{
          this.$notify({
          title: '警告',
          message: '账号格式错误',
          type: 'warning'
        });
      }
    

    

    },

    //密码
    handleChangeUserPsw(){
      //验证密码
      var reg=/^(?![^a-zA-Z]+$)(?!\D+$)/ 
      this.userPswIsOk = reg.test(this.userPsw)

      if(this.userPswIsOk){
        this.$notify({
          title: '成功',
          message: '密码OK',
          type: 'success'
        });
      }else{
        this.$notify({
          title: '警告',
          message: '密码格式错误',
          type: 'warning'
        });
      }


    },

    //确认密码
    handleChangeConfirmUserPsw(){
        if(this.confirmPsw === this.userPsw){
          this.userConfirmPsw = true;
        }else{
           this.userConfirmPsw = false;
        }

        if(this.userConfirmPsw){
          this.$notify({
            title: '成功',
            message: '两次密码一致',
            type: 'success'
          });
        }else{
          this.$notify({
            title: '警告',
            message: '两次密码不一致',
            type: 'warning'
          });
        }
    },

    //邮箱
    handleChangeUserMailbox(){
       let mail =  /^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/
       this.userMailboxIsOk =  mail.test(this.userMailbox)

       if(this.userMailboxIsOk){
        this.$notify({
            title: '成功',
            message: '邮箱OK',
            type: 'success'
          });
       }else{
          this.$notify({
            title: '警告',
            message: '邮箱格式错误',
            type: 'warning'
          });
       }
    }

  }
};
</script>

























<style>
.login-wraps {
  position: relative;
  width: 100%;
  background-image: url(../assets/two.jpg);
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