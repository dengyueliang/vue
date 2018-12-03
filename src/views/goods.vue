<template>
    <el-container>
    <el-header>添加商品</el-header>
    <el-container>
        <el-aside width="50%">
            <div>
                <span style="width:80px;display:inline-block">名称:</span><el-input v-model="goodsName" placeholder="请输入内容" style="width:200px;"></el-input>
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
                <el-button type="success" round @click="add">确认添加</el-button>
                <el-button type="danger" round>取消</el-button>
            </el-row>
        </el-footer>
    </el-container>
</template>

<script>
export default {
  data() {
    return {
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
    };
  },
  methods: {
       open2() {
        this.$confirm('此操作将永久添加该数据, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.postRequest("/goods/pushGoods");
          this.$message({
            type: 'success',
            message: '添加成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消添加'
          });          
        });
      }
    ,
    async postRequest(url) {
      const data = await fetch(`${url}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `goodsName=${this.goodsName}&goodsType=${this.goodsType}&goodsMaterial=${this.goodsMaterial}&goodsCanFor=${this.goodsCanFor}&goodsOnlyFor=${this.goodsOnlyFor}&goodsSize=${this.goodsSize}&goodsTaste=${this.goodsTaste}&goodsSpecial=${this.goodsSpecial}&goodsRegion=${this.goodsRegion}&goodsDate=${this.goodsDate}&goodsTime=${this.goodsTime}&goodsSupplier=${this.goodsSupplier}&goodsIntro=${this.goodsIntro}&goodsPrice=${this.goodsPrice}`
      })
    },
    add() {
        this.open2()
    }
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
