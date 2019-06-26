<template>
  <div>
    <van-cell-group>
      <van-field v-model="username" required clearable label="用户名" placeholder="请输入手机号"/>

      <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" required/>
      <van-field v-model="password1" type="password" label="确认密码" placeholder="请输入密码" required/>
    </van-cell-group>
    <div class="btn" @click="register">
      <van-button type="info" style="width:289px;height:40px;" round>注册</van-button>
    </div>
  </div>
</template>


<script>
import axios from "axios";
export default {
  name: "Register",

  // 因为上边有v-model所以下面需要有一个data
  data() {
    return {
      username: "",
      password: "",
      password1: "",
      sms: "",
      name: "注册"
    };
  },
  mounted() {
    this.$emit("tit", this.name);
  },
  methods: {
    register() {
      let _this = this;
      let iphone = _this.username;
      console.log(iphone);
       
      if (/^1[3|4|5|8][0-9]\d{8}$/.test(iphone)) {
        axios
          .get("http://jx.xuzhixiang.top/ap/api/reg.php", {
            params: {
              username: _this.username,
              password: _this.password
            }
          })
          .then(res => {
            console.log(res.data);
            alert(res.data.msg);
            _this.$router.push('/login')
          });
      }else{
        alert('请正确填写手机号码')
      }
     }
  }
}
</script>



<style scoped>
.btn {
  width: 100%;
  height: 46px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
</style>
