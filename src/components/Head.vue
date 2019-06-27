<template>
  <div>
    <div class="container">
      <van-icon name="service" tag="span" class="tubiao" size="22px" @click="tap"/>
      <van-search shape="round" placeholder="请输入搜索关键词" v-model="value" @focus="onSearch"/>
      <van-icon name="chat" tap="span" size="22px" @click="tap1"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "Head",
  data() {
    return {
      value: ""
    };
  },
  props: ["tits"],
  methods: {
    onSearch() {
      console.log(1)
      this.$router.push("/search");
    },
    tap() {
      this.$router.push("/service");
    },
    tap1() {
      this.$router.push("/info");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  display: flex;
  height: 50px;

  justify-content: space-around;
  align-items: center;
}
</style>
