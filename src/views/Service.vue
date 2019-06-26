<template>
  <div id="section">
    <van-nav-bar title="客户服务" left-text="返回" class="top" left-arrow @click-left="onClickLeft"/>
    <van-row type="flex" justify="space-around" class="aside">
      <van-col span="11" class="icon">
        <van-col span="6">
          <van-icon name="column" tag="span" size="32px" @click="familiar"/>
          <p>常见问题</p>
        </van-col>
      </van-col>
      <van-col span="11" class="icon">
        <van-col span="6">
          <a href="tel:iphoneNumber">
            <van-icon name="service" tag="span" size="32px"/>
          </a>
          <p>在线客服</p>
        </van-col>
      </van-col>
    </van-row>
   
    <van-collapse v-model="activeName" accordion>
      <!-- //反馈问题 -->
      <van-collapse-item title="反馈问题" name="1">在您使用过程中发生了什么问题可以点开常见问题板块来查看你所不明白的问题，如果没有能帮您解决问题的答案，请咨询在线客服来为您解答您的疑惑！祝您购物愉快！！！</van-collapse-item>
      <!-- 服务条款 -->
      <van-collapse-item title="服务条款" name="2">很荣幸您能选择我们美菜商城购物，我们的服务包括：不满意可随时协商退货，也可等价进行调换。我们承诺：只要包装没有烂，找到我们都给换！！！</van-collapse-item>
      <!-- 售后规则 -->
      <van-collapse-item title="售后规则" name="3">本商城属于小本生意，一经售出概不退货。谢谢合作！！！</van-collapse-item>
      <!-- 运费规则 -->
      <van-collapse-item title="运费规则" name="4">在有效范围内都可以免费送货！注：（有效范围仅限于我家对门）</van-collapse-item>
    </van-collapse>
  </div>
</template>
<script>
let iphone = localStorage.getItem("username");
console.log(iphone);
export default {
  name: "Sessage",
  data() {
    return {
      iphoneNumber: iphone,
      activeName: "1"
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    familiar() {
      this.$router.push("/help");
    }
  }
};
</script>
<style scoped>
p {
  margin: 0;
}
.icon {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  /* background: #ccc; */
}
.aside {
  margin-top: 20px;
}
.feedback,
.gather {
  margin: 20px 0;
  font-size: 24px;
  /* background: #ccc; */
  line-height: 50px;
  padding-left: 50px;
  /* border-top: 1px solid #000; */
  /* border-bottom: 1px solid #000; */
}
</style>