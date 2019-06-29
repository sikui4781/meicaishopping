<template>
  <div>
    <Head3 :tit="name"></Head3>
    <!-- top -->

    <van-card
      :tag="yyy"
      :price="item.price"
      :desc="item.desc"
      :title="item.name"
      :thumb="item.photo"
      origin-price="2000.00"
      v-for="(item, index) in list"
      :key="index"
      class="card"
    >
      <div slot="footer">
        <!-- <van-checkbox v-model="checked" :checked="item.checked" @click="singerShopSelected(item)" class="check" ></van-checkbox> -->

        <input
          class="check"
          type="checkbox"
          :checked="item.checked"
          @click="singerShopSelected(item)"
        />

        <!-- 单选 -->

        <van-stepper
          v-model="item.num"
          min="1"
          max="50"
          @change="onChange(item.num,item.id)"
          integer
          input-width="70px"
        />
        <!-- 计数器 -->

        <span>总价:{{item.num*item.price}}</span>

        <van-button size="mini" @click="del(item,item.id)">删除</van-button>
      </div>
    </van-card>

    <!-- 商品卡片 -->

    <van-submit-bar :price="totalPrice" button-text="提交订单" @submit="onSubmit(totalPrice)">
      <input type="checkbox" :checked="isSelectedAll" @click="selectedAll(isSelectedAll)" />全选
    </van-submit-bar>

    <!-- 总金额，结算 -->

    <van-tabbar v-model="active" active-color="#07c160" inactive-color="#000">
      <van-tabbar-item icon="home-o" to="/main">首页</van-tabbar-item>
      <van-tabbar-item icon="smile-comment-o" to="/vegetable">全部菜品</van-tabbar-item>
      <van-tabbar-item icon="wap-nav" to="/ulist">常用清单</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart" to="/cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="manager" to="/mine">我的</van-tabbar-item>
    </van-tabbar>
    <!-- 底部选项卡 -->
  </div>
</template>
<script>
import Head3 from "@/components/Head3";
import axios from "axios";
import qs from "Qs";
import { Toast } from "vant";
export default {
  // inject: ["reload"],
  name: "Cart",
  data() {
    return {
      active: 3,
      name: "购物列表",
      imageURL: "",
      value: 1,

      isSelectedAll: false,
      list: [],
      imageURL: "",
      yyy: "热卖",
      totalPrice: 0
    };
  },
  components: {
    Head3
  },
  methods: {
    selectedAll(flag) {
      this.isSelectedAll = !flag;
      this.list.forEach((item, i) => {
        if (typeof item.checked == "undefined") {
          this.$set(item, "checked", !flag);
        } else {
          item.checked = !flag;
        }
      });
      this.getAllShopPrice();
    },
    onSubmit(money) {
      this.$router.push({ name: "Paymoney", query: { money: money } });
    },
    onChange(num, id) {
      axios({
        url: "http://106.12.45.42:8080/MeledMall/shopCar/showShopCar",
        method: "post",
        data: qs.stringify({
          mid: mid,
          uid: uid,
          mname: name,
          mprice: price,
          mphoto: photo
        })
      }).then(data => {
        console.log(data.data);
      });
      this.getAllShopPrice();
    },
    // 更新购物车中的数量
    // del(p, id) {
    //   // console.log(id,p);

    //   this.list = this.list.filter(item => item !== p);
    //   Toast.success("删除成功");
    //   this.getAllShopPrice();

    //   var _this = this;
    //   axios({
    //     url: "http://jx.xuzhixiang.top/ap/api/cart-delete.php",
    //     params: {
    //       uid: 12441,
    //       pid: id
    //     }
    //   }).then(data => {
    //     //  console.log(data);
    //     // this.reload();
    //   });
    //   this.getAllShopPrice();
    // },
    // 删除商品

    // getAllShopPrice() {
    //   let totalPrice = 0;
    //   this.list.forEach((item, i) => {
    //     if (item.checked) {
    //       totalPrice += item.pprice * item.pnum * 100;
    //     }
    //   });
    //   this.totalPrice = totalPrice;
    // },
    // 计算总价
    // singerShopSelected(item) {
    //   if (typeof item.checked == "undefined") {
    //     this.$set(item, "checked", true);
    //   } else {
    //     item.checked = !item.checked;
    //   }
    //   this.getAllShopPrice();
    //   this.hasSelectedAll();
    // },
    // 单选

    // hasSelectedAll() {
    //   let flag = true;
    //   this.list.forEach((item, i) => {
    //     if (!item.checked) {
    //       flag = false;
    //     }
    //   });
    //   this.isSelectedAll = flag;
    // }

    // 判断是否全选
  },
  mounted() {
    //购物车展示
    let _this = this;
    let uid = localStorage.getItem("token");
    console.log(uid);
    axios({
      url: "http://106.12.45.42:8080/MeledMall/shopCar/showShopCar",
      method: "post",
      data: qs.stringify({
        id: uid
      })
    })
      .then(res => {
        console.log(res.data.info);
        _this.list = res.data;
        console.log(_this.list);
        // document.write(res.data.info)
        // _this.list = res.data.info;
        // console.log(_this.recommend);
      })
      .catch(error => {
        console.log(error);
      });
    // 获取购物车中的数据
    this.getAllShopPrice();
  }
};
</script>
<style scoped>
.check {
  position: absolute;
  top: 48px;
  left: 2px;
}
.card {
  margin-top: 20px;
}
</style>
