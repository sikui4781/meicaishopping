<template>
  <div>
    <van-nav-bar
      title="设置"
      fixed
      left-text="返回"
      
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div class="container">
      <!-- 账户与安全 -->
      <!-- <van-cell title="账户与安全" is-link to="forgetfind" /> -->
      <van-row type="flex" justify="space-between" tag="div" class="yi">
        <van-col span="2"></van-col>
        <van-col span="20" tag="div" class="zhanghu">
          <div class="zhang1" @click="toxiugai()">
            <p>账户与安全</p>
            <van-icon name="arrow" size="24px" style="margin-top:23px" />
          </div>
        </van-col>
        <van-col span="2"></van-col>
      </van-row>

      <!-- 我的收货地址 -->
      <van-row type="flex" justify="space-between" tag="div" class="yi">
        <van-col span="2"></van-col>
        <van-col span="20" tag="div" class="zhanghu">
          <div class="zhang1"  @click="toshouhuo()">
            <p>我的收货地址</p>
            <van-icon name="arrow" size="24px" style="margin-top:23px"/>
          </div>
        </van-col>
        <van-col span="2"></van-col>
      </van-row>

      <!-- 检查更新 -->
      <van-row type="flex" justify="space-between" tag="div" class="yi">
        <van-col span="2"></van-col>
        <van-col span="20" tag="div" class="zhanghu">
          <div class="zhang1">
            <p>检查更新</p>

            <span style="line-height:70px;margin-left:20px">当前版本(v2.0)</span>
            <van-icon name="arrow" size="24px" style="margin-top:23px"/>
          </div>
        </van-col>
        <van-col span="2"></van-col>
      </van-row>

      <!-- 退出按钮 -->
      <van-row type="flex" justify="center" tag="div" class="btn">
        <van-col span="2"></van-col>
        <van-col span="20" tag="div" class="btnm">
            <van-button type="info" style="width:248px;height:56px;" @click="tologin()">退出登录</van-button>
        </van-col>
        <van-col span="2"></van-col>
      </van-row>
      
    </div>
  </div>
</template>

<script>
export default {
  name: "Setting",
  data() {
    return {};
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {},
    toxiugai() {
      this.$router.push("/Forgetfind");
    },
    toshouhuo() {
      this.$router.push("/dizhilist");
    },
    tologin(){

    }
  }
};
</script>

<style scoped="">
p,span{
margin: 0;
padding:0;
}
 .container{
   padding-top: 46px
} 
.yi {
  width: 100%;
  height: 70px;
  border-bottom: 1px solid #ccc;
}
.zhang1 {
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
}
.zhang1 p {
  font-size: 20px;
  line-height: 70px;
}

.zhang1 span {
  font-size: 14px;
  color: #ccc;
}
.btn{
    width: 100%;
    height:56px;
    padding-top:10px; 
}
.btnm{
    display: flex;
    justify-content: center;
}
</style>