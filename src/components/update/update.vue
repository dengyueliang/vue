<template>
    <el-container>
    <el-header>修改商品:{{goodsName}}</el-header>
    <el-container>
        <el-aside width="50%">
            <div>
                <span style="width:80px;display:inline-block">名称:</span><el-input v-model="goodsName" placeholder="请输入内容" style="width:200px;" ></el-input>
            </div>
            <div>
                <span style="width:80px;display:inline-block">品类:</span><el-input v-model="goodsType" placeholder="请输入内容" style="width:200px;"></el-input>
            </div>
            <div>
                <span style="width:80px;display:inline-block">口味:</span><el-input v-model="goodsTaste" placeholder="请输入内容" style="width:200px;"></el-input>
            </div>
            <div>
                <span style="width:80px;display:inline-block">产地:</span><el-input v-model="goodsRegion" placeholder="请输入内容" style="width:200px;"></el-input>
            </div>
            <div>
                <span style="width:80px;display:inline-block">价格:</span><el-input v-model="goodsPrice" placeholder="请输入内容" style="width:200px;"></el-input>
            </div>
            <div>
                <span style="width:80px;display:inline-block">专属规格:</span><el-input v-model="goodsOnlyFor" placeholder="请输入内容" style="width:200px;"></el-input>
            </div>
            <div>
                <span style="width:80px;display:inline-block">包装规格:</span><el-input v-model="goodsSize" placeholder="请输入内容" style="width:200px;"></el-input>
            </div>
            <div>
                <span style="width:80px;display:inline-block;padding:0 5px 0 0;box-sizing: border-box">材质或制作方法:</span><el-input v-model="goodsMaterial" placeholder="请输入内容" style="width:200px;"></el-input>
            </div>
      
        </el-aside>
        <el-main>
            <div>
                <span style="width:80px;display:inline-block;margin-top:30px;">特殊功用:</span><el-input v-model="goodsSpecial" placeholder="请输入内容" style="width:200px;"></el-input>
            </div>
            <div>
                <span style="width:80px;display:inline-block">适用规格:</span><el-input v-model="goodsCanFor" placeholder="请输入内容" style="width:200px;"></el-input>
            </div>
            <div>
                <span style="width:80px;display:inline-block">出厂日期:</span><el-input v-model="goodsDate" placeholder="请输入内容" style="width:200px;"></el-input>
            </div>
            <div>
                <span style="width:80px;display:inline-block">保质期:</span><el-input v-model="goodsTime" placeholder="请输入内容" style="width:200px;"></el-input>
            </div>
            <div>
                <span style="width:80px;display:inline-block">供应商:</span><el-input v-model="goodsSupplier" placeholder="请输入内容" style="width:200px;"></el-input>
            </div>
            <div>
                <span style="width:80px;display:inline-block">特色说明:</span><el-input v-model="goodsIntro" placeholder="请输入内容" style="width:200px;"></el-input>
            </div>
            <div>
                <span style="width:80px;display:inline-block">图片:</span>
            </div>
            
        </el-main>
    </el-container>
        <el-footer>
            <el-row>
                <el-button type="success" round @click="add">确认修改</el-button>
                <el-button type="danger" round  @click="cancel">取消</el-button>
            </el-row>
        </el-footer>
    </el-container>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const {
  mapMutations,
  mapState,
  mapGetters,
  mapActions
} = createNamespacedHelpers("Update");
export default {
  mounted() {
    let goodId = this.$router.history.current.params.id;
    this.getGoodByIdAsync(goodId);
  },
  methods: {
    ...mapActions(["getGoodByIdAsync", "postRequest"]),
    cancel() {
      console.log(this.goodsName);
    },
    open2() {
      let goodId = this.$router.history.current.params.id;
      this.$confirm("此操作将永久添加该数据, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.postRequest(goodId);
          this.$message({
            type: "success",
            message: "添加成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消添加"
          });
        });
    },
    add() {
      this.open2();
    }
  },
  computed: {
    goodsName: {
      get() {
        return this.$store.state.Update.goodsName;
      },
      set(goodsName) {
        this.$store.commit("Update/updateGoodsName", goodsName);
      }
    },
    goodsType: {
      get() {
        return this.$store.state.Update.goodsType;
      },
      set(goodsType) {
        this.$store.commit("Update/updategoodsType", goodsType);
      }
    },
    goodsMaterial: {
      get() {
        return this.$store.state.Update.goodsMaterial;
      },
      set(goodsMaterial) {
        this.$store.commit("Update/goodsMaterial", goodsMaterial);
      }
    },
    goodsCanFor: {
      get() {
        return this.$store.state.Update.goodsCanFor;
      },
      set(goodsCanFor) {
        this.$store.commit("Update/goodsCanFor", goodsCanFor);
      }
    },
    goodsOnlyFor: {
      get() {
        return this.$store.state.Update.goodsOnlyFor;
      },
      set(goodsOnlyFor) {
        this.$store.commit("Update/goodsOnlyFor", goodsOnlyFor);
      }
    },
    goodsSize: {
      get() {
        return this.$store.state.Update.goodsSize;
      },
      set(goodsSize) {
        this.$store.commit("Update/goodsSize", goodsSize);
      }
    },
    goodsTaste: {
      get() {
        return this.$store.state.Update.goodsTaste;
      },
      set(goodsTaste) {
        this.$store.commit("Update/goodsTaste", goodsTaste);
      }
    },
    goodsSpecial: {
      get() {
        return this.$store.state.Update.goodsSpecial;
      },
      set(goodsSpecial) {
        this.$store.commit("Update/goodsSpecial", goodsSpecial);
      }
    },
    goodsRegion: {
      get() {
        return this.$store.state.Update.goodsRegion;
      },
      set(goodsRegion) {
        this.$store.commit("Update/goodsRegion", goodsRegion);
      }
    },
    goodsDate: {
      get() {
        return this.$store.state.Update.goodsDate;
      },
      set(goodsDate) {
        this.$store.commit("Update/goodsDate", goodsDate);
      }
    },
    goodsTime: {
      get() {
        return this.$store.state.Update.goodsTime;
      },
      set(goodsTime) {
        this.$store.commit("Update/goodsTime", goodsTime);
      }
    },
    goodsSupplier: {
      get() {
        return this.$store.state.Update.goodsSupplier;
      },
      set(goodsSupplier) {
        this.$store.commit("Update/goodsSupplier", goodsSupplier);
      }
    },
    goodsIntro: {
      get() {
        return this.$store.state.Update.goodsIntro;
      },
      set(goodsIntro) {
        this.$store.commit("Update/goodsIntro", goodsIntro);
      }
    },
    goodsPrice: {
      get() {
        return this.$store.state.Update.goodsPrice;
      },
      set(goodsPrice) {
        this.$store.commit("Update/goodsPrice", goodsPrice);
      }
    },
  }
};
</script>
<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  height: 500px;
  text-align: center;
}
.el-aside {
  background-color: #e9eef3;
  color: #333;
  height: 500px;
  padding: 20px;
  text-align: center;
}
.el-aside div,
.el-main div {
  margin-bottom: 6px;
}
.el-footer {
  background-color: #e9eef3;
  text-align: center;
}
</style>