<template>
<el-container>
  <el-header>门店列表</el-header>
  <el-main>
     <el-table
      :data="rows"
      border
      style="width: 100%">
           <el-table-column
            prop="_id"
            label="门店编号"
           >
          </el-table-column>
          <el-table-column
            prop="shopName"
            label="门店名称"
          >
          </el-table-column>
          <el-table-column
            prop="shopLicenceNum"
            label="门店营业执照"
            >     
          </el-table-column>
          <el-table-column
            prop="shopLicenxeImg"
            label="门店图片"
           >
          </el-table-column>
          <el-table-column
            prop="shopAdd"
            label="门店地址"
            >
          </el-table-column>
           <el-table-column
            prop="shopCorporate"
            label="门店法人"
           >
          </el-table-column>
            <el-table-column
            prop="shopTel"
            label="门店联系电话"
            >
          </el-table-column>
            <el-table-column
            prop="shopFeature"
            label="门店特色"
            >
          </el-table-column>
           <el-table-column
            label="店员"
            >
        <template slot-scope="scope">
          <el-button  @click="shopEmployee(scope.row)"  class="el-icon-edit" type="text" size="small">查看</el-button>
        </template>
          </el-table-column>
      <el-table-column
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button  @click="updata(scope.row)"  class="el-icon-edit" type="text" size="small">修改</el-button>
          <el-button type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
        <div class="block">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="curPage"
              :page-sizes="[1, 3, 5, 7,9]"
              :page-size="5"
              layout="total, sizes, prev, pager, next, jumper"
              :total="total">
            </el-pagination>
        </div>
  
  </el-main>
</el-container>
</template>
<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState, mapMutations } = createNamespacedHelpers("Shop");
export default {
  name: "shopList",
  methods: {
    updata(rows) {
      this.$router.push({ path: `/info/shopsUpdata/${rows._id}` }); // -> /user/123
    },
    shopEmployee(rows) {

      this.$router.push({ path: `/info/shopEmployee/${rows._id}` }); // -> /user/123
    },
    handleSizeChange(val) {
      this.seteachPage(val);
    },
    handleCurrentChange(val) {
      this.setCurPage(val);
    },
    ...mapActions(["getShopsByPageAsyns","getShopEmployee"]),
    ...mapMutations(["setCurPage", "seteachPage"]),
    firstPage() {
      if (this.curPage != 1) {
        this.setCurPage(1);
      }
    },
    lastPage() {
      if (this.curPage != this.maxPage) {
        this.setCurPage(this.maxPage);
      }
    },
    previousPage() {
      if (this.curPage > 1) {
        this.setCurPage(this.curPage - 1);
      }
    },
    nextPage() {
      if (this.curPage < this.maxPage) {
        this.setCurPage(this.curPage - 0 + 1);
      }
    }
  },
  watch: {
    curPage() {
      this.getShopsByPageAsyns({
        curPage: this.curPage,
        eachPage: this.eachPage
      });
    },
    eachPage() {
      this.getShopsByPageAsyns({
        eachPage: this.eachPage,
        eachPage: this.eachPage
      });
    }
  },
  mounted() {
    this.getShopsByPageAsyns();
  },
  computed: {
    ...mapState(["rows", "curPage", "eachPage", "maxPage", "total"])
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
}
</style>