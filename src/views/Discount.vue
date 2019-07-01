<template>
  <div>
    <van-nav-bar title="我的优惠券" left-text="返回" left-arrow @click-left="onClickLeft" />

    <van-coupon-cell :coupons="coupons" :chosen-coupon="chosenCoupon" @click="showList = true" />
    <van-popup v-model="showList" position="bottom">
      <van-coupon-list
        :coupons="coupons"
        :chosen-coupon="chosenCoupon"
        :disabled-coupons="disabledCoupons"
        @change="onChange"
        @exchange="onExchange"
      />
    </van-popup>
  </div>
</template>

<script>
import axios from "axios";
import qs from "Qs";
let uid = localStorage.getItem("token");
const coupon = {
  available: 1,
  condition: "无使用门槛\n最多优惠12元",
  reason: "",
  value: 150,
  name: "优惠券名称",
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: "1.5",
  unitDesc: "元"
};
export default {
  name: "Discount",
  data() {
    return {
      showList: "",
      chosenCoupon: -1,
      coupons: [],
      disabledCoupons: []
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
    },
    onExchange(code) {
      this.coupons.push(coupon);
    }
  },
  mounted() {
    let _this = this;
    axios({
      url: "http://106.12.45.42:8080/MeledMall/coupon/showCoupon",
      method: "post",
      data: qs.stringify({
        id: uid
      })
    })
      .then(data => {
        console.log(data.data);
        // _this.coupons = data.data.info;
      })
      .catch(error => {
        console.log(error);
      });
    axios({
      url: "http://106.12.45.42:8080/MeledMall/coupon/showFailureCoupon",
      method: "post",
      data: qs.stringify({
        id: uid
      })
    })
      .then(data => {
        console.log(data);
        // _this.disabledCoupons = data.data;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style>
</style>
