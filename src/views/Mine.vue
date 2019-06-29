<template>
  <div>
    <van-nav-bar>
      <van-icon
        name="setting"
        slot="right"
        size="22px"
        style="margin-right:10px"
        color="black"
        @click="tap1"
      />
      <van-icon name="location" slot="right" size="22px" color="black" @click="tap" />
    </van-nav-bar>
    <!-- top -->
    <van-row>
      <!-- 头像栏 -->
      <van-row type="flex" justify="space-around" style="display:flex;align-items:center;">
        <van-col
          span="10"
          style="width:100px;height:100px;border-radius:50%;background:url(https://img.yzcdn.cn/vant/cat.jpeg)"
        ></van-col>
        <van-col span="10">{{list.phonenum}}</van-col>
      </van-row>
      <van-row style="margin:5% 0;padding-left:5%">
        <van-col span="24">有钱就要可劲花，高兴买啥就买啥！</van-col>
      </van-row>

      <!-- 余额栏 -->
      <van-row type="flex" justify="space-around">
        <van-col style="display:flex;flex-direction:column;text-align:center">
          <van-row style="color:#f00">0.00</van-row>
          <van-row>余额</van-row>
        </van-col>
        <van-col style="text-align:center">
          <van-row>0</van-row>
          <van-row>优惠券</van-row>
        </van-col>
      </van-row>

      <!-- 我的订单 -->
      <van-collapse v-model="activeNames">
        <van-collapse-item title="我的订单" name="1">您还没有订单</van-collapse-item>
      </van-collapse>
      <van-row type="flex" justify="space-around">
        <van-col class="top">
          <van-row>
            <van-tag type="danger">标签</van-tag>
          </van-row>
          <van-row>代收货</van-row>
        </van-col>
        <van-col class="top">
          <van-row>
            <van-tag type="danger">标签</van-tag>
          </van-row>
          <van-row>代发货</van-row>
        </van-col>
        <van-col class="top">
          <van-row>
            <van-tag type="danger">标签</van-tag>
          </van-row>
          <van-row>待收货</van-row>
        </van-col>
        <van-col class="top">
          <van-row>
            <van-tag type="danger">标签</van-tag>
          </van-row>
          <van-row>已收货</van-row>
        </van-col>
        <van-col class="top">
          <van-row>
            <van-tag type="danger">标签</van-tag>
          </van-row>
          <van-row>售后服务</van-row>
        </van-col>
      </van-row>

      <!-- 在线充值 -->
      <van-row type="flex" justify="space-between" tag="div" class="dingdan">
        <van-col span="24" tag="div">
          <div class="dzong">
            <div class="dshang">
              <p>在线充值</p>
              <van-icon name="arrow" size="24px" tag="p" class="tubiao" />
            </div>
          </div>
        </van-col>
      </van-row>

      <van-row type="flex" justify="space-around" tag="div" class="chonge">
        <van-col span="2"></van-col>
        <van-col span="4" tag="div" class="cxia">
          <p @click="price" ref="price">500</p>
        </van-col>
        <van-col span="4" tag="div" class="cxia">
          <p @click="price">200</p>
        </van-col>
        <van-col span="4" tag="div" class="cxia">
          <p @click="price">100</p>
        </van-col>
        <van-col span="4" tag="div" class="cxia">
          <p @click="price">50</p>
        </van-col>
        <van-col span="2"></van-col>
      </van-row>

      <van-row type="flex" justify="center" style="margin-top:10px;border-bottom:1px solid #333">
        <van-col span="6"></van-col>
        <van-col span="12">
          <van-button
            @click="recharge"
            type="default"
            style="width:200px;height:30px;line-height:30px;margin-bottom:10px"
          >立即充值</van-button>
        </van-col>
        <van-col span="6"></van-col>
      </van-row>
      <!-- 在线充值 -->
      <van-row type="flex" justify="space-between" tag="div" class="dingdan">
        <van-col span="24" tag="div">
          <div class="dzong">
            <div class="dshang"></div>
          </div>
        </van-col>
      </van-row>
    </van-row>

    <!-- con -->
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
import axios from "axios";
import qs from "Qs";
let uid = localStorage.getItem("token");
console.log(uid);
export default {
  name: "Mine",
  data() {
    return {
      active: 4,
      activeNames: ["1"],
      list: [],
      headphoto: "https://img.yzcdn.cn/vant/cat.jpeg",
      jinE: ""
    };
  },
  components: {},
  methods: {
    tap() {
      this.$router.push("/info");
    },
    tap1() {
      this.$router.push("setting");
    },
    toshezhi() {
      this.$router.push("/Setting");
    },

    price() {
      console.log(1);
      this.$refs.price.style.border = "1px solid #f00";
      console.log(this.$refs.price.innerHTML);
      this.jinE = this.$refs.price.innerHTML;
    },
    recharge() {
      console.log(1);
      axios({
        url: "http://106.12.45.42:8080/MeledMall/user/recharge",
        data: qs.stringify({
          balance: this.jinE,
          id: uid
        })
      }).then(data => {
        console.log(data);
      });
    }
  },
  mounted() {
    let _this = this;
    axios({
      url: "http://106.12.45.42:8080/MeledMall/user/mine",
      method: "post",
      data: qs.stringify({
        id: uid
      })
    })
      .then(data => {
        console.log(data.data);
        // _this.headphoto = data.data.info.user.headphoto;
        console.log(_this.headphoto);
        _this.list = data.data.info.user;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>
<style scoped>
p,
span {
  margin: 0;
  padding: 0;
}
.top {
  text-align:center;
}
.top1 {
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: space-around;
}
.top11 {
  width: 88px;
  height: 88px;
  border: 1px solid #ccc;
  border-radius: 50%;
}
.top1 span {
  font-size: 24px;
  line-height: 120px;
}
.right {
  display: flex;
  justify-content: center;
  margin-top: 50px;
  /* margin-left: 50px */
}
/* 余额栏 */
.YuE {
  width: 100%;
  height: 60px;
}

.yu1 {
  width: 100%;
  height: 60px;
  display: flex;
}
.left1 {
  width: 50%;
  height: 54px;
  padding-top: 6px;
}
.left1 p {
  margin: 0 auto;
}
.right1 {
  width: 50%;
  height: 54px;
  padding-top: 6px;
}
.right1 p {
  margin: 0 auto;
}
.left1 p:first-child {
  font-size: 18px;
  width: 35px;
  height: 27px;
  line-height: 27px;
  color: #e51c23;
}
.left1 p:last-child {
  font-size: 14px;
  width: 52px;
  height: 20px;
}
.right1 p:first-child {
  font-size: 18px;
  width: 35px;
  height: 27px;
  line-height: 27px;
  color: #1a1818;
}
.right1 p:last-child {
  font-size: 14px;
  width: 52px;
  height: 20px;
}
/* 订单栏 */
.dingdan {
  width: 100%;
  height: 32px;
  border-top: 1px solid #ccc;
}
.dzong {
  width: 90%;
  height: 32px;
  margin: 0 auto;
}
.dshang {
  width: 100%;
  height: 32px;
  display: flex;
  justify-content: space-between;
  line-height: 32px;
  border-bottom: 1px solid #ccc;
}
.tubiao {
  margin-top: 4px;
}

.xia {
  width: 100%;
  height: 87px;
  /* border-bottom: 1px solid #333; */
  margin-bottom: 20px;
}
.dxia {
  height: 87px;
  margin-bottom: 7px;
}
.dxia dl {
  width: 56px;
  height: 67px;
  padding-top: 10px;
  /* margin-right: 21px; */
}
.dxia dd {
  width: 56px;
  height: 50px;
}
.dxia dt {
  height: 20px;
  font-size: 14px;
  text-align: center;
  color: #101010;
}

/* 充值金额 */
.chonge {
  height: 82px;
  padding-top: 15px;
}
.cxia {
  display: flex;
  justify-content: space-around;
  width: 126px;
  height: 80px;
  text-align: center;
  font-size: 16px;
  line-height: 80px;
}
.cxia p {
  width: 50px;
  height: 50px;
  line-height: 50px;
  border: 1px solid #000;
}
</style>
