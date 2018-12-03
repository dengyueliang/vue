<template>
    <el-dialog title="上传图片" :visible.sync="dialogFormVisible" :before-close="handleClose">
       <el-upload
            action="/goodsImgs/upload"
            list-type="picture-card"
            :data="params"
            :before-upload="beforeUpload"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove">
            <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
        <div slot="footer" class="dialog-footer">
            <el-button @click="Iclick">取 消</el-button>
            <el-button type="primary" @click="Iclick">确 定</el-button>
        </div>
    </el-dialog>
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
  data() {
    return {
      params: {id: JSON.stringify({goodId: 123})},
      dialogImageUrl: "",
      dialogVisible: false,
      formLabelWidth: "120px"
    };
  },

  methods: {
    beforeUpload(file) {
      this.params.id =  JSON.stringify({goodId:JSON.parse(localStorage.getItem('goodId'))});
    },
    handleClose() {
      this.setdialogFormVisible();
    },
    Iclick() {
      this.setdialogFormVisible();
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    ...mapMutations(["setdialogFormVisible"])
  },
  computed: {
    ...mapState(["dialogFormVisible"])
  }
};
</script>

<style>
</style>

