<template>
  <div class="box1">
    <div class="box">
      <div class="fl">
        <h2>登录</h2>
        <div class="dl"><input type="text" placeholder="请输入账号" v-model="user.username" /></div>
        <div class="dl"><input type="password" placeholder="请输入密码"  v-model="user.password"/></div>
        <div class="dl"><button @click="login">登录</button></div>
      </div>
    </div>
  </div>
</template>
<script> 
import {requserlogin} from '../../util/request'
export default {
  components: {},
  data() {
    return {
        user:{
          username:"",
          password:""
        }
       
    };
  },
  methods: {
    login(){
      requserlogin(this.user).then(res=>{
        if(res.data.code==200){
            this.$router.push("/index/home")
        }else{
          alert(res.data.msg)
        }
      
      })
    }
  },
};
</script>
<style>
.box1 {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to right, #563443, #303d60);
  overflow: hidden;
}
.box {
  width: 498px;
  height: 300px;
  background: white;
  border-radius: 10px;
  margin: 100px auto;
}
.fl {
  width: 100%;
  height: 100%;
  text-align: center;
}
.dl {
  margin-top: 20px;
}

input {
  width: 361px;
  height: 40px;
  font-size: 23px;
  color: #c0c4d6;
}
h2 {
  width: 100%;
  height: 20px;
  padding-top: 30px;
}
button {
  width: 361px;
  height: 40px;
  font-size: 23px;
  color: white;
  background: #409eff;
  border: none;
  outline: none;
}
</style>