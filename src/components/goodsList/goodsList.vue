<template>
    <el-container>
    <el-header>商品列表</el-header>
    <el-main>
        <el-table
        :data="row"
        border
        style="width: 100%">
        <el-table-column
        fixed
        prop="goodsName"
        label="名称">
        </el-table-column>
        <el-table-column
        fixed
        prop="goodsType"
        label="品类">
        </el-table-column>
        <el-table-column
        fixed
        prop="goodsMaterial"
        label="材质或制作方法">
        </el-table-column>
        <el-table-column
        fixed
        prop="goodsCanFor"
        label="适用规格">
        </el-table-column>
        <el-table-column
        fixed
        prop="goodsOnlyFor"
        label="专属规格">
        </el-table-column>
        <el-table-column
        fixed
        prop="goodsSize"
        label="包装规格">
        </el-table-column>
        <el-table-column
        fixed
        prop="goodsTaste"
        label="口味">
        </el-table-column>
        <el-table-column
        fixed
        prop="goodsSpecial"
        label="特殊功用">
        </el-table-column>
        <el-table-column
        fixed
        prop="goodsRegion"
        label="产地">
        </el-table-column>
        <el-table-column
        fixed
        prop="goodsDate"
        label="出厂日期">
        </el-table-column>
        <el-table-column
        fixed
        prop="goodsTime"
        label="保质期">
        </el-table-column>
        <el-table-column
        fixed
        prop="goodsSupplier"
        label="供应商">
        </el-table-column>
        <el-table-column
        fixed
        prop="goodsIntro"
        label="特色说明">
        </el-table-column>
        <el-table-column
        fixed
        prop="goodsPrice"
        label="价格">
        </el-table-column>
        <el-table-column
        fixed="right"
        label="操作"
        width="100">
        <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
            <el-button type="text" size="small"  @click="Iclick(scope.row._id)">上传</el-button>
        </template>
        </el-table-column>
        </el-table>
        <!-- 分页 -->
          <div class="block">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage4"
              :page-sizes="[5, 10, 15, 20]"
              :page-size="100"
              layout="total, sizes, prev, pager, next, jumper"
              :total="total">
            </el-pagination>
            <GoodsListMessageBox />
         </div>
         
    </el-main>
    
    </el-container>
  
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const {
  mapMutations,
  mapState,
  mapGetters,
  mapActions
} = createNamespacedHelpers("GoodsList");
export default {
  watch: {
    curPage() {
      this.getAllAsync({
        curPage: this.curPage - 0,
        eachPage: this.eachPage - 0
      });
    },
    eachPage() {
      this.getAllAsync({
        curPage: this.curPage - 0,
        eachPage: this.eachPage - 0
      });
    }
  },
  methods: {
    Iclick(_id) {
      localStorage.setItem("goodId", JSON.stringify(_id));
      this.setdialogFormVisible(_id);
    },
    handleSizeChange(val) {
      this.seteachPage(val);
    },
    handleCurrentChange(val) {
      this.setCurPage(val);
    },
    handleClick(row) {
      this.$router.push({ path: `/info/goodUpdate/${row._id}` }); // -> /user/123
    },
    ...mapActions(["getAllAsync"]),
    ...mapMutations(["setCurPage", "seteachPage", "setdialogFormVisible"])
  },
  data() {
    return {
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4
    };
  },
  mounted() {
    this.getAllAsync();
  },

  computed: {
    ...mapState([
      "curPage",
      "eachPage",
      "maxPage",
      "row",
      "total",
      "dialogFormVisible"
    ])
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
  text-align: center;
  padding: 0 !important;
}
</style>