<template>
  <div>
    <van-nav-bar title="常见问题" left-text="返回" class="top" left-arrow @click-left="onClickLeft"/>
    <van-collapse v-model="activeNames">
      <van-collapse-item title="一、账户问题" name="1">
        <van-row>1.更改密码：方法登录百度网站自行解决</van-row>
        <van-row>2.绑定手机号：收到短信就自动绑定</van-row>
        <van-row>3.上传头像：上传自己的照片就可以了</van-row>
        <van-row>4.解除绑定：对不起，已经绑定不提供解绑</van-row>
      </van-collapse-item>
      <van-collapse-item title="二、订购问题" name="2">
        <van-row>1.下单后可以取消问题：提交订单后不可以取消</van-row>
        <van-row>2.运费问题：本站不提供包邮，运费自行承担。</van-row>
        <van-row>3.不接受打折优惠</van-row>
      </van-collapse-item>
      <van-collapse-item title="三、发票问题" name="3">本站小本生意，不提供发票</van-collapse-item>
    </van-collapse>
  </div>
</template>
<script>

export default {
  name: "Help",
  data() {
    return {
      activeNames: ["1"]
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>
<style scoped>
.box {
  background: #ff0;
  height: 35px;
  line-height: 35px;
  padding-top: 8px;
  margin: 15px 0;
}
.on {
  background: rgb(132, 134, 129);
  width: 10px;
  height: 28px;
  margin: 0 15px;
}
</style>


