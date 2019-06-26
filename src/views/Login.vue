<template>
  <div>
   
    <van-cell-group>
      <van-field v-model="username" ref="user" required clearable label="用户名" placeholder="请输入手机号"/>
      <van-field
        v-model="password"
        type="password"
        ref="pass"
        label="密码"
        placeholder="请输入密码"
        required
      />
    </van-cell-group>

    <div class="btn">
      <van-button type="primary" round @click="login()" style="width:289px;height: 40px;">登录</van-button>
    </div>

    <div class="luyou">
      <router-link to="/register" style="color:#333">忘记密码</router-link>
      <router-link to="/forgetfind" style="color:#333">修改密码</router-link>
    </div>
  </div>
</template>


<script>
import axios from "axios";
export default {
  name: "Login",

  // 因为上边有v-model所以下面需要有一个data
  data() {
    return {
      username: "",
      password: "",
      name: "登录"
    };
  },
  methods: {
    login() {
      let username = this.$refs.user.value;
      let password = this.$refs.pass.value;
      console.log(username, password);
      if (/^1[3|4|5|8][0-9]\d{8}$/.test(username)) {
        alert("登录成功");
        //登录请求
        axios
          .get("http://jx.xuzhixiang.top/ap/api/login.php", {
            params: {
              username: username,
              password: password
            }
          })
          .then(data => {
            console.log(data);
            if (data.data.code == 1) {
              localStorage.setItem("token", data.data.data.id);
              localStorage.setItem("username", data.data.data.username);
            } else {
              alert(data.data.msg);
            }
          });
        this.$router.push("/main");
      } else {
        alert("请正确填写手机号");
      }
    },
    mounted() {
      this.$emit("tit", this.name);
    }
  }
};
</script>



<style scoped>
.btn {
  width: 100%;
  height: 46px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
.luyou {
  width: 90%;
  height: 20px;
  margin: 10px auto;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  line-height: 20px;
}
</style>
