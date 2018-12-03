<template>
<el-container>
  <el-header>店员列表</el-header>
  <el-main>
      <el-table
      :data="arr"
      style="width: 100%">
      <el-table-column
        prop="empName"
        label="店员姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="empPhone"
        label="电话"
        width="180">
      </el-table-column>
      <el-table-column
        prop="empLevel"
        label="职位">
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
      <el-button @click="onCLASD">取 消</el-button>
      <el-button type="text" @click="dialogFormVisible = true">新增店员</el-button>
        <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
        <el-form :model="form">
            <el-form-item label="店员名字" :label-width="formLabelWidth">
            <el-input v-model="form.empName" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="店员电话" :label-width="formLabelWidth">
           <el-input v-model="form.empPhone" autocomplete="off"></el-input>
            </el-form-item>
              <el-form-item label="店员职务" :label-width="formLabelWidth">
           <el-input v-model="form.empLevel" autocomplete="off"></el-input>
            </el-form-item>
        </el-form>
        
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="onAdd">确 定</el-button>
        </div>
        </el-dialog>
  </el-main>
</el-container>
</template>
<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState, mapMutations } = createNamespacedHelpers(
  "Shop"
);
export default {
  name: "shopList",
  data() {
    return {
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        empName: "",
        empPhone: "",
        empLevel: ""
      },
      formLabelWidth: "120px"
    };
  },
   computed: {
    ...mapState(["arr"])
  },
  mounted(){
    this.getShopEmployee(this.$route.params._id)
  },
  methods: {
      ...mapActions(["getShopEmployee",]),
      onCLASD(){
          console.log(this)
      },
    onAdd() {
      this.dialogFormVisible = false;
      this.postAddShops(this.form);
    },
    async postAddShops(from) {
      let id = this.$route.params._id;
      let msg=JSON.stringify(from)
      const data = await fetch(`/shop/postById`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `_id=${id}&shopEmployee=${msg}`
      });
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
}
</style>