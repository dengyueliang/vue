<template>
<el-container>
  <el-header>修改门店</el-header>
  <el-main>
      <div class="shopAdd" style="" >
        <div>
                <div style=" margin-bottom: 10px;">
                    门店名称：
                    <el-input v-model="shopName" placeholder="请输入内容门店名称"></el-input>
                </div>
                <div  style=" margin-bottom: 10px">
                    门店执照：
                    <el-input v-model="shopLicenceNum" placeholder="请输入门店营业执照"></el-input>
                </div>
                <div  style=" margin-bottom: 10px">
                    门店地址：
                    <el-input v-model="shopAdd" placeholder="请输入门店地址"></el-input>
                </div>
                <div>
                    营业执照：
              
                </div>
        </div>
          <div>
            <div  style=" margin-bottom: 10px">
                <span style="dispa"> 联系电话：</span>
                <el-input v-model="shopTel" placeholder="请输入联系电话"></el-input>
            </div>
             <div  style=" margin-bottom: 10px">
                门店特色：
                <el-input v-model="shopFeature" placeholder="请输入门店特色"></el-input>
            </div>
              <div  style=" margin-bottom: 10px">
                门店法人：
                <el-input v-model="shopCorporate" placeholder="请输入门店法人名字"></el-input>
            </div>
            <div>
                门店头像：
          
            </div>
          </div>
        </div>
        <div class="shopbut">
          <el-button type="primary" @click="Add" round>主要按钮</el-button>
          <el-button type="primary" @click="cancel" round>取消按钮</el-button>
        </div>
         
  </el-main>
</el-container>
</template>
<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState, mapMutations } = createNamespacedHelpers(
  "Updata"
);
export default {
  name: "add",
  mounted() {
    this.getShopsByIdAsyns(this.$route.params._id);
  },
  computed: {
    ...mapState([
      "shopName",
      "shopLicenceNum",
      "shopLicenxeImg",
      "shopAdd",
      "shopLocation",
      "shopCorporate",
      "shopTel",
      "shopImg",
      "shopFeature"
    ]),
    shopName: {
      get() {
        return this.$store.state.Updata.shopName;
      },
      set(shopName) {
        this.$store.commit("Updata/updataShopName", shopName);
      }
    },
    shopLicenceNum: {
      get() {
        return this.$store.state.Updata.shopLicenceNum;
      },
      set(shopLicenceNum) {
        this.$store.commit("Updata/updataShopLicenceNum", shopLicenceNum);
      }
    },
    shopAdd: {
      get() {
        return this.$store.state.Updata.shopAdd;
      },
      set(shopAdd) {
        this.$store.commit("Updata/updataShopAdd", shopAdd);
      }
    },
    shopCorporate: {
      get() {
        return this.$store.state.Updata.shopCorporate;
      },
      set(shopCorporate) {
        this.$store.commit("Updata/updataShopCorporate", shopCorporate);
      }
    },
    shopTel: {
      get() {
        return this.$store.state.Updata.shopTel;
      },
      set(shopTel) {
        this.$store.commit("Updata/updataShopTel", shopTel);
      }
    },
    shopFeature: {
      get() {
        return this.$store.state.Updata.shopFeature;
      },
      set(shopFeature) {
        this.$store.commit("Updata/updataShopFeature", shopFeature);
      }
    }
  },

  methods: {
    ...mapActions(["getShopsByIdAsyns","postyUpdataShops"]),
    open2() {
      this.$confirm("确认新增, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.postyUpdataShops(this.$route.params._id);
          this.$message({
            type: "success",
            message: "成功"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
   
    Add() {
      this.open2()
    }
    ,cancel(){
      this.$router.push({ path: `/info/shopsList` })
    }
  }
};
</script>
<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
  font-size: 20px;
}
.shopbut {
  display: flex;
  justify-content: center;
}
.shopAdd {
  color: #303133;
  display: flex;
  justify-content: space-around;
  font-size: 14px;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>