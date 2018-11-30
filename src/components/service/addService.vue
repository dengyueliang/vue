<template>
  <el-container class="el_container">
    <el-header class="addHeader">新增服务</el-header>
    <el-main class="addMain">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
        <el-form-item prop="serviceName">
          <span>服务名称：</span>
          <el-input v-model="ruleForm.serviceName" placeholder="请输入服务名称"></el-input>
        </el-form-item>
        <el-form-item prop="serviceType">
          <span>服务类型：</span>
          <el-select v-model="ruleForm.serviceType" placeholder="请选择服务类型">
            <el-option label="宠物美容" value="宠物美容"></el-option>
            <el-option label="宠物护理" value="宠物护理"></el-option>
            <el-option label="摄影服务" value="摄影服务"></el-option>
            <el-option label="知识服务" value="知识服务"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item prop="serviceCanFor">
          <span>适用规格：</span>
          <el-select v-model="ruleForm.serviceCanFor" placeholder="请选择适用规格">
            <el-option label="小型犬" value="小型犬"></el-option>
            <el-option label="中小型犬" value="中小型犬"></el-option>
            <el-option label="中型犬" value="中型犬"></el-option>
            <el-option label="大型犬" value="大型犬"></el-option>
            <el-option label="任意规格" value="任意规格"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item prop="serviceTime">
          <span>服务耗时：</span>
          <el-select v-model="ruleForm.serviceTime" placeholder="请选择服务耗时">
            <el-option label="1小时" value="1小时"></el-option>
            <el-option label="2小时" value="2小时"></el-option>
            <el-option label="3小时" value="3小时"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item prop="serviceGrade">
          <span>服务等级：</span>
          <el-select v-model="ruleForm.serviceGrade" placeholder="请选择服务等级">
            <el-option label="一级" value="一级"></el-option>
            <el-option label="二级" value="二级"></el-option>
            <el-option label="三级" value="三级"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item prop="servicePrice">
          <span>服务价格：</span>
          <el-select v-model="ruleForm.servicePrice" placeholder="请选择服务价格">
            <el-option label="88元" value="88元"></el-option>
            <el-option label="128元" value="128元"></el-option>
            <el-option label="198元" value="198元"></el-option>
            <el-option label="258元" value="258元"></el-option>
            <el-option label="388元" value="388元"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">立即添加</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-main>
  </el-container>
</template>
<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions, mapMutations } = createNamespacedHelpers(
  "ServiceApp"
);
export default {
  data() {
    return {
      ruleForm: {
        serviceName: "",
        serviceType: "",
        serviceCanFor: "",
        serviceTime: "",
        serviceGrade: "",
        servicePrice: ""
      },
      rules: {
        serviceName: [
          { required: true, message: "请输入服务名称", trigger: "blur" }
        ],
        serviceType: [
          { required: true, message: "请选择服务类型", trigger: "change" }
        ],
        serviceCanFor: [
          { required: true, message: "请选择适用规格", trigger: "change" }
        ],
        serviceTime: [
          { required: true, message: "请选择服务耗时", trigger: "change" }
        ],
        serviceGrade: [
          { required: true, message: "请选择服务等级", trigger: "change" }
        ],
        servicePrice: [
          { required: true, message: "请选择服务价格", trigger: "change" }
        ]
      }
    };
  },
  methods: {
    ...mapActions(["addService"]),
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let addContent = {
            serviceName: this.ruleForm.serviceName,
            serviceType: this.ruleForm.serviceType,
            serviceCanFor: this.ruleForm.serviceCanFor,
            serviceTime: this.ruleForm.serviceTime,
            serviceGrade: this.ruleForm.serviceGrade,
            servicePrice: this.ruleForm.servicePrice
          };
          this.addService(addContent);
          this.$message({
            message: "新增成功!",
            type: "success",
            center: true
          });
          this.$refs[formName].resetFields();
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style>
.el_container {
  width: 600px;
  margin: 20px auto;
}
.addHeader {
  /* background-color: #242f42; */
  color: black;
  text-align: center;
  line-height: 60px;
  font-size: 22px;
}
.addMain {
  /* background-color: rgb(50, 65, 87); */
  color: black;
  text-align: center;
  /* height: 550px; */
  border: 1px solid rgb(212, 210, 210);
}
.el-main .el-input {
  margin: 5px 0;
  width: 380px;
}
.el-form-item__error {
  position: absolute;
  left: 150px;
}
</style>