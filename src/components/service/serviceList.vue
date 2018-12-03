<template>
  <el-container>
    <div class="box">
      <el-header class="listHeader">服务列表</el-header>
      <el-main class="listMain">
        <el-table :data="rows" border style="width: 100%">
          <el-table-column prop="serviceName" label="服务名称" width="120"></el-table-column>
          <el-table-column prop="serviceType" label="服务类型" width="120"></el-table-column>
          <el-table-column prop="serviceCanFor" label="适用规格" width="120"></el-table-column>
          <el-table-column prop="serviceTime" label="服务耗时" width="120"></el-table-column>
          <el-table-column prop="serviceGrade" label="服务等级" width="120"></el-table-column>
          <el-table-column prop="servicePrice" label="服务价格" width="120"></el-table-column>
          <el-table-column fixed="right" label="操作" width="100">
            <template slot-scope="scope">
              <el-button type="text" size="small" @click="update(scope.row)">修改</el-button>
              <el-button type="text" size="small" @click="remove(scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>

        <el-dialog title="修改服务" :visible.sync="dialogFormVisible">
          <el-form :model="updateRow">
            <el-form-item label="服务名称" :label-width="formLabelWidth">
              <el-input v-model="updateRow.serviceName" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="服务类型" :label-width="formLabelWidth">
              <el-select v-model="updateRow.serviceType" placeholder="请选择服务类型">
                <el-option label="宠物美容" value="宠物美容"></el-option>
                <el-option label="宠物护理" value="宠物护理"></el-option>
                <el-option label="摄影服务" value="摄影服务"></el-option>
                <el-option label="知识服务" value="知识服务"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="适用规格" :label-width="formLabelWidth">
              <el-select v-model="updateRow.serviceCanFor" placeholder="请选择适用规格">
                <el-option label="小型犬" value="小型犬"></el-option>
                <el-option label="中小型犬" value="中小型犬"></el-option>
                <el-option label="中型犬" value="中型犬"></el-option>
                <el-option label="大型犬" value="大型犬"></el-option>
                <el-option label="任意规格" value="任意规格"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="服务耗时" :label-width="formLabelWidth">
              <el-select v-model="updateRow.serviceTime" placeholder="请选择服务耗时">
                <el-option label="1小时" value="1小时"></el-option>
                <el-option label="2小时" value="2小时"></el-option>
                <el-option label="3小时" value="3小时"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="服务等级" :label-width="formLabelWidth">
              <el-select v-model="updateRow.serviceGrade" placeholder="请选择服务等级">
                <el-option label="一级" value="一级"></el-option>
                <el-option label="二级" value="二级"></el-option>
                <el-option label="三级" value="三级"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="服务价格" :label-width="formLabelWidth">
              <el-select v-model="updateRow.servicePrice" placeholder="请选择服务价格">
                <el-option label="88元" value="88元"></el-option>
                <el-option label="128元" value="128元"></el-option>
                <el-option label="198元" value="198元"></el-option>
                <el-option label="258元" value="258元"></el-option>
                <el-option label="388元" value="388元"></el-option>
              </el-select>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="confirmUpdate">确定修改</el-button>
          </div>
        </el-dialog>
      </el-main>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="curPage"
        :page-sizes="[5, 10]"
        :page-size="5"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </div>
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
      dialogTableVisible: false,
      dialogFormVisible: false,
      updateRow: {
        serviceName: "",
        serviceType: "",
        serviceCanFor: "",
        serviceTime: "",
        serviceGrade: "",
        servicePrice: ""
      },
      formLabelWidth: "120px"
    };
  },
  methods: {
    ...mapActions(["getServiceByPageAsync", "upDateService", "removeService"]),
    ...mapMutations(["setEachPage", "setCurPage"]),
    update(row) {
      this.updateRow = row;
      this.dialogFormVisible = true;
    },
    confirmUpdate() {
      this.upDateService(this.updateRow);
      this.dialogFormVisible = false;
      this.$message({
        message: "修改成功!",
        type: "success",
        center: true
      });
    },
    remove(row) {
      this.$confirm("此操作将永久删除此服务, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.removeService(row);
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    handleSizeChange(val) {
      this.setEachPage(val);
    },
    handleCurrentChange(val) {
      this.setCurPage(val);
    }
  },
  mounted() {
    this.getServiceByPageAsync();
  },
  computed: {
    ...mapState(["rows", "curPage", "eachPage", "maxPage", "total"])
  },
  watch: {
    curPage() {
      this.getServiceByPageAsync({
        curPage: this.curPage,
        eachPage: this.eachPage
      });
    },
    eachPage() {
      this.getServiceByPageAsync({ eachPage: this.eachPage });
    }
  }
};
</script>
<style>
.listHeader {
  /* background-color: #316fda; */
  color: black;
  text-align: center;
  line-height: 60px;
  font-size: 22px;
}
.listMain {
  /* background-color: rgb(90, 142, 219); */
  color: white;
  text-align: center;
}
.box {
  margin: 60px auto;
  padding: 30px;
  border: 1px solid rgb(212, 210, 210);
}
.el-dialog .el-input__inner {
  width: 380px;
}
.el-pagination {
  text-align: center;
}
</style>


