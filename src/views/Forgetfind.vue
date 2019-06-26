<template>
  <div>
  
    <van-nav-bar
  :title="name"
  left-text="返回"
  
  left-arrow
  @click-left="onClickLeft"
  @click-right="onClickRight"
/>
    <van-cell-group>
      <van-field 
      v-model="username" 
      required 
      clearable 
      label="用户名" 
      placeholder="请输入用户名"
      />

      <van-field 
      v-model="password" 
      type="password" 
      label="密码" 
      placeholder="请输入密码" 
      required
      />
      <van-field 
      v-model="password1" 
      type="password" 
      label="确认密码" 
      placeholder="请输入密码" 
      required
      />
    </van-cell-group>

    <van-cell-group>
      <van-field 
      v-model="sms" 
      center clearable 
      label="短信验证码" 
      placeholder="请输入短信验证码"
      >
        <van-button 
        slot="button" 
        size="small" 
        type="default"
        >发送验证码
        </van-button>
      
      </van-field>
    </van-cell-group>

<div class="btn">
  <van-button 
    type="primary" 
    round='' 
    style="width:289px;height:40px;"
    to='/login'
    >
    找回密码
  </van-button>
</div>
    
    
  </div>
</template>


<script>
import Head3 from "@/components/Head3"
export default {
  name: "Forgetfind",
  // 因为上边有v-model所以下面需要有一个data
  data() {
    return {
      username: "",
      password: "",
      password1: "",
      sms:'',
      name: "修改密码"
    }
  },
  mounted() {
    
     this.$emit("tit",this.name)
  },
  components:{
     Head3
  },
  methods:{
    onClickLeft(){
      this.$router.go(-1)
    },
    onClickRight(){}
  }
};
</script>



<style scoped=''>
.btn{
  width: 100%;
  height: 46px;
  margin-top:20px;
  display: flex;
  justify-content: center;

}
</style>
