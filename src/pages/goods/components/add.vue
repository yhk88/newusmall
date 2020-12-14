<template>
  <div>
    <el-dialog :title="info.name" :visible.sync="info.isShow">
      <el-form :model="form">
        <el-form-item label="一级分类">
          <el-select v-model="form.first_cateid" placeholder="--请选择菜单--">
            <el-option label="顶级菜单" :value="0"></el-option>

            <el-option
              v-for="item in cateList"
              :key="item.id"
              :label="item.catename"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
         
  <el-form-item label="二级分类">
          <el-select v-model="form.second_cateid" placeholder="--请选择菜单--">
            <el-option label="顶级菜单" :value="0"></el-option>

            <el-option
              v-for="item in cateList"
              :key="item.id"
              :label="item.catename"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>


        <el-form-item label="商品名称" label-width="70px">
          <el-input v-model="form.goodsname" autocomplete="off"></el-input>
        </el-form-item>
         <el-form-item label="价格" label-width="70px">
          <el-input v-model="form.price" autocomplete="off"></el-input>
        </el-form-item>
         <el-form-item label="市场价格" label-width="70px">
          <el-input v-model="form.market_price" autocomplete="off"></el-input>
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

  <el-form-item label="商品规格">
          <el-select v-model="form.specsattr" placeholder="--请选择菜单--">
            <el-option label="顶级菜单" :value="0"></el-option>

            <el-option
              v-for="item in specList"
              :key="item.id"
              :label="item.catename"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>

  <el-form-item label="规格属性">
          <el-select v-model="form.specsid" placeholder="--请选择菜单--">
            <el-option label="顶级菜单" :value="0"></el-option>

            <el-option
              v-for="item in secondSpec"
              :key="item.id"
              :label="item.catename"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>

    <el-form-item label="是否新品" >
    <el-radio v-model="form.isnew" :label="1" >是</el-radio>
  <el-radio v-model="form.isnew" :label="2"  >否</el-radio>
      
    </el-form-item>
        <el-form-item label="是否热卖" >
    <el-radio v-model="form.ishot" :label="1" >是</el-radio>
  <el-radio v-model="form.ishot" :label="2"  >否</el-radio>
      
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
<el-form-item>
    <textarea name="" id="" cols="30" rows="10" v-model="form.description"></textarea>
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
import { goodsadd , goodscount ,} from "../../../util/request";
// 发送请求，点击添加把数据存起来

// 引入路由
export default {
  props: ["info"],
  computed: {
    ...mapGetters({
      cateList: "cate/list",
      specList:'spec/list'
      
      // 调用menu里面的list方法
    }),
  },
  components: {},
  data() {
     
    return {
        imageUrl:'',
      isShow: true,
      width: "160px",
      secondCate:[],
    secondSpec:[],
      form: {
        first_cateid:0,
        second_cateid:0,
        goodsname:'',
        price:0,
        market_price:0,
       
        description:'',
        specsid:0,
        specsattr:[],
        isnew:1,
        ishot:1,
        status:1
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
changeCate(){
this.secondCate=this.cateList.find((item)=>{return item.id==this.form.first_cateid})
},
    add() {
      goodsadd(this.form).then((res) => {

       this.requseCatelist();
        this.hide();
     
      });
    },
    emply() {
      this.form = {
        form: {
      first_cateid:0,
        second_cateid:0,
        goodsname:'',
        price:0,
        market_price:0,
       
        description:'',
        specsid:0,
        specsattr:[],
        isnew:1,
        ishot:1,
        status:1
        },
      };
    },
    ...mapActions({

      requseCatelist:'cate/requseCatelist',
      requestuserCount:"spec/requestuserCount"
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
      this.requestuserCount()
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