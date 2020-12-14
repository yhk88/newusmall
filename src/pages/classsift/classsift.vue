<template>
  <div>
    <el-button type="primary" @click="wellAdd()">添加</el-button>
    <v-add :info="info" ref="one"></v-add>
    <div class="box"><v-list @edit="edit3($event)"></v-list></div>
  </div>
</template>
<script>
import vAdd from "./components/add";
import vList from "./components/list"
;
export default {
  components: {
    vAdd,
    vList,
  },

  data() {
    return {
      info: {
        isShow: false,
    
        name: "商品分类",
        isAdd: true,
      },
    };
  },
  methods: {
    wellAdd() {
      this.info.isShow = !this.info.isShow;
      this.info.name = "商品分类";
this.$refs.one.emply() 
      this.info.isAdd = true;
    },
    edit3(id) {
      this.info.name = "商品添加";
      this.info.isAdd = false;
      this.info.isShow = true;
      this.$refs.one.look(id);
    },
  },
};
</script>
<style>
.box {
  margin-top: 20px;
}
</style>