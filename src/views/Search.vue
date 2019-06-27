<template>
  <div class="container">
    <form action="/">
      <van-search
        v-model="value"
        placeholder="请输入搜索关键词"
        show-action
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>
    <van-card
      v-for="(item, index) in list"
      :key="index"
      :num="item.id"
      :price="item.price"
      :desc="item.desc"
      :title="item.name"
      :thumb="item.photo"
      @click="tap(item.id)"
    />
  </div>
</template>
<script>
import axios from "axios";
import qs from "Qs";
export default {
  name: "Search",
  data() {
    return {
      value: "",
      list: []
    };
  },
  methods: {
    onSearch() {
      let _this = this;
      console.log(_this.value);
      axios({
        url: "http://106.12.45.42:8080/MeledMall/menu/selectChild",
        method: "post",
        data: qs.stringify({})
      }).then(data => {
        console.log(data);
        _this.list = data.data.info;
      });
    },
    onCancel() {
      this.$router.go(-1);
    },
    tap(id) {
      this.$router.push({ name: "Detail", query: { id: id } });
    }
  }
};
</script>
<style scoped>
</style>
