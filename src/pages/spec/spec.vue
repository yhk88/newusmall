<template>

<div class="box1"> <el-button type="primary" @click="whllAdd()">添加</el-button>
 <v-add :info="info" ref="one" ></v-add>
 <v-list @edit="edit($event)"></v-list>
</div>
</template>
<script>
import vAdd from './components/add'
import vList from './components/list'
export default {
components:{
    vAdd,
    vList
},
data(){
return{
 info:{
     isShow:false,
     name:"商品规格添加",
     xg:true
 }
  
    
}
},
methods:{
    whllAdd(){
          this.info.name="商品规格添加"
        this.info.isShow=!this.info.isShow
      this.info.xg=true
      this.$refs.one.emply() 
    },
    edit(id){
        this.info.name="商品规格编辑"
        this.info.isShow=true
        this.info.xg=false
        this.$refs.one.look(id)

    }
},
}
</script>
<style>


</style>