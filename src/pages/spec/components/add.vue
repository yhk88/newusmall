<template>
  <div class="box">
    <el-dialog :title="info.name" :visible.sync="info.isShow">
      <el-form :model="form">
        <el-form-item label="规格名称" label-width="70px">
          <el-input autocomplete="off" v-model="form.specsname"></el-input>
        </el-form-item>

        <el-form-item
          label="规格属性"
          v-for="(item, index) in arr"
          :key="index"
        >
          <el-input
            autocomplete="off"
            v-model="item.value"
            class="inp1"
          ></el-input>
          <el-button type="primary" @click="nww" v-if="index == 0"
            >新增规格属性</el-button
          >
          <el-button type="danger" @click="delArr(index)" v-else
            >删除</el-button
          >
        </el-form-item>

        <el-form-item label="状态">
          <el-switch
            v-model="form.status"
            active-color="#13ce66"
            inactive-color="#ff4949"
            :active-value="1"
            :inactive-value="2"
          >
          </el-switch>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="hide">取 消</el-button>
        <el-button type="success" @click="add" v-if="info.xg">添加</el-button>
        <el-button type="success" v-else @click="updata">修 改</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { specsadd, specscount,specsinfo,specsedit} from "../../../util/request";
import { mapActions, mapGetters } from "vuex";
export default {

  props: ["info"],
  computed:{
 ...mapGetters({
      slist: "spec/list",

    }),
  },
  components: {},
  data() {
    return {
      width: "160px",

      form: {
        specsname: "",
        attrs: "",
        status: 1,
      },
      arr: [
        {
          value: "",
        },
      ],
    };
  },
  methods: {
     ...mapActions({
           reqspecslist: "spec/reqspecslist",
       
      }),
      mounted() {
  this.reqspecslist()
},
    hide() {
      this.info.isShow = false;
    },
    add() {
      this.form.attrs = JSON.stringify(
        this.arr.map((item) => {
          return item.value;
          
        }),
          this.reqspecslist(),
        this.hide(),
       
     
        
      );
      specsadd(this.form).then((res) => {});
    },
      emply() {
      this.form = {
        form: {
   specsname: "",
        attrs: "",
        status: 1,
        },
      };
    },
    updata() {
specsedit(this.form).then(res=>{
    
}), this.hide(),
         this.reqspecslist()
    },
    nww() {
      this.arr.push({
        value: "",
      });
    },
    delArr(index) {
      this.arr.splice(index, 1);
    },
    look(id){
      specsinfo({id:id}).then(res=>{
        this.form=res.data.list[0]
        this.form.id=id 
        this.arr=JSON.parse(this.form.attrs).map(item=>{
          return {value:item}
        })
      })
    }
  },
};
</script>
<style scoped>
.box {
  margin-top: 10px;
}
.inp1 {
  width: 64%;
}
.inp2 {
  width: 85.5%;
}
</style>