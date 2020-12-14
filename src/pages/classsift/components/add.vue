<template>
  <div>
    <el-dialog :title="info.name" :visible.sync="info.isShow">
      <el-form :model="form">
        <el-form-item label="上级分类">
          <el-select v-model="form.pid" placeholder="--请选择菜单--">
            <el-option label="顶级菜单" :value="0"></el-option>

            <el-option
              v-for="item in cateList"
              :key="item.id"
              :label="item.catename"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="分类名称" label-width="70px">
          <el-input v-model="form.catename" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="图片" class="sd">
          <el-upload
            class="avatar-uploader"
            action="#"
            :show-file-list="false"
            :on-change="changeImg"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>

        <el-form-item label="状态">
          <el-switch
            v-model="form.status"
            active-color="#409eff"
            inactive-color="#dde1e5"
            :active-value="1"
            :inactive-value="2"
          >
          </el-switch>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="hide()">取 消</el-button>
        <el-button type="primary" v-if="info.isAdd" @click="add()"
          >添 加</el-button
        >
        <el-button type="primary" v-else @click="updata()">修 改</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
// 引入vuex的方法和属性值
import { reqCateadd, reqCateinfo,requseRedite,cateeDit } from "../../../util/request";
// 发送请求，点击添加把数据存起来

// 引入路由
export default {
  props: ["info"],
  computed: {
    ...mapGetters({
      cateList: "cate/list",
      // 调用menu里面的list方法
    }),
  },
  components: {},
  data() {
    return {
      isShow: true,
      width: "160px",
      imageUrl: "",
      form: {
        
        pid: "",
        catename: "",
        img: null,
        status: 1,
      },
    };
  },
  methods: {
    changeImg(e) {
      var file = e.raw;
      console.log(e);
      this.imageUrl = URL.createObjectURL(file);
      this.form.img = file;
    },
    hide() {
      this.info.isShow = false;
       this.requseCatelist();
    },

    add() {
      reqCateadd(this.form).then((res) => {

       this.requseCatelist();
        this.hide();
     
      });
    },
    emply() {
      this.form = {
        form: {
          pid: "",
          catename: "",
          img: null,
          status: 1,
        },
      };
    },
    ...mapActions({

      requseCatelist:'cate/requseCatelist'
    }),
    // 由于后端要的是字符串数组，而获取的是数组，所以要转
    // 获取一条数据的方法
    look(id) {
      reqCateinfo({id: id}).then((res) => {
        this.form = res.data.list;

        this.form.id = id;
        this.imageUrl=this.$preImg+res.data.img
        
     
      });
    },
    updata() {
      cateeDit(this.form).then((res) => {
         this.requseCatelist();
        this.hide();
       
      });
    },
  },

  mounted() {
    // 调用方法

    if (this.cateList.length == 0) {
      this.requseCatelist();
    }
  },
};
</script>
<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  margin-left: 5px;
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
.sd {
  margin-left: 25px;
}
</style>