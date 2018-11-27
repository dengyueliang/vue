<template>
     <div class="login-wrap">
        <div class="ms-login">
            <div class="ms-title">爱宠邦后台管理系统</div>
            <el-form  label-width="0px" class="ms-content">
                <el-form-item prop="username">
                    <el-input placeholder="phone">
                        <el-button slot="prepend" icon="el-icon-phone"></el-button>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" placeholder="password">
                        <el-button slot="prepend" icon="el-icon-loading"></el-button>
                    </el-input>
                </el-form-item>
                <div class="login-btn">
                    <el-button type="primary" >登录</el-button>
                </div>
                <p class="login-tips">Tips :测试账号密码为  123  abc</p>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
    name:"login"
}

</script>
<style>

   .login-wrap{
        position: relative;
        width:100%;
        height:657px;
        background-image: url(../assets/login-bg.jpg);
        background-size: 100%;
        background-position: 0px -90px;;
    }
    
    .ms-title{
        width:100%;
        line-height: 50px;
        text-align: center;
        font-size:20px;
        color: #fff;
        border-bottom: 1px solid #ddd;
    }
    
    .ms-login{
        position: absolute;
        left:50%;
        top:50%;
        width:350px;
        margin:-190px 0 0 -175px;
        border-radius: 5px;
        background: rgba(255,255,255, 0.3);
        overflow: hidden;
    }
    
    .ms-content{
        padding: 30px 30px;
    }
    .login-btn{
        text-align: center;
    }
    .login-btn button{
        width:100%;
        height:36px;
        margin-bottom: 10px;
    }
    .login-tips{
        font-size:12px;
        line-height:30px;
        color:#999;
    } 

</style>
