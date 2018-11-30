<template>
   <el-table
    border
    :data="OnLineBusinessList"
    style="width:99%">
    <el-table-column
      prop="userAcount"
      label="登陆名"
      >
    </el-table-column>
    <el-table-column
      prop="userPwd"
      label="登陆密码"
     >
    </el-table-column>
    <el-table-column
      prop="businesPhone"
      label="联系电话"
      >
    </el-table-column>
    <el-table-column
      prop="userMail"
      label="联系邮箱"
      >
    </el-table-column>
    <el-table-column
      prop="businessName"
      label="商家名称"
      >
    </el-table-column>
     <el-table-column
      prop="shopLicenceNum"
      label="营业执照号码"
    >
     </el-table-column>
     <el-table-column
      prop="zip"
      label="营业执照图片"
    >
     </el-table-column>
    <el-table-column
      prop="shopAdd"
      label="营业地址"
    >
     </el-table-column>
     <el-table-column
      prop="shopCorporate"
      label="法人代表"
    >
     </el-table-column>
      <el-table-column
      prop=""
      label="法人照片"
    >
     </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">下线</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>

</template>

<script>
import {mapMutations, mapState,mapGetters, mapActions} from "vuex";

export default {
  data() {
    return {
      OnLineBusinessList: [
        {
          userAcount: "huangtao", //登陆名
          userPwd: "1232dsa", //登陆密码
          userMail: "2803253915@qq.com", //邮箱
          // userType:0,//用户类型
          // userState:0,//用户状态 0 申请中 1可用 2不可用
          businessName: "叫了只鸡", //商家名称、
          businesPhone: "18208166422", //商家联系方式
          shopLicenceNum: "h321973291567320298193", //营业执照号码
          shopLicenceImg: "../url", //x营业执照照片
          shopAdd: "抚琴东南路", //营业地址
          shopCorporate: "黄涛", //法人代表
          shopImg: "../url" //法人照片
        }
      ]
    };
  },
  computed:{
    ...mapState("login",["userType"]),//拿到登陆者的身份类型 0平台管理员  1门店管理员
  },
  mounted(){
    
  },

};
</script>


<style>
</style>
