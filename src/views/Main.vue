<template>
  <div>
    <header>
      <Head :tits="msga"></Head>
    </header>
    <!-- 头部 -->
<!-- 用户登录界面 -->
    <!-- 子路由显示处 -->
    <section style="overflow:auto;flex:1">
      <!-- //用户名显示 退出入口 -->
      <van-row type="flex" justify="space-around" style="margin-bottom:10px">
        <router-link to="/login" v-if="userId?!seen:seen">登录</router-link>
        <router-link to="/register" v-if="userId?!seen:seen">免费注册</router-link>
        <van-col v-if="userId?seen:!seen">
          欢迎
          <router-link to="/info">{{user}}</router-link>回来
        </van-col>
        <span v-if="userId?seen:!seen" @click="quit">
          <van-row>退出</van-row>
        </span>
      </van-row>
      <!-- 轮播开始 -->
      <van-row>
        <van-swipe :autoplay="3000" indicator-color="white">
          <van-swipe-item v-for="(item, index) in list" :key="index" @click="tapLb(item.mid)">
            <van-image width="100%" height="150" :src="item.picture" />
          </van-swipe-item>
        </van-swipe>
      </van-row>
      <!-- 轮播结束 -->
      <!-- 分类展示 -->
      <van-row
        type="flex"
        justify="space-around"
        style="display:flex;flex-wrap:wrap;justify-content:space-around;text-align:center;"
      >
        <van-col
          span="4"
          v-for="(item, index) in classify"
          :key="index"
          style="margin: 5% 1%;font-size:12px"
        >
          <van-col span="24" style="width:100%;height:80%">
            <van-image @click="tapItem(item.id)" width="100%" height="100%" :src="item.photo" />
            {{item.menu}}
          </van-col>
        </van-col>
      </van-row>

      <!-- 分类展示结束 -->
      <!-- 秒杀开始 -->
      <van-row style="padding:5%; ">
        <van-col span="6">超值秒杀</van-col>
        <van-col span="18" ref="miaoSha" v-if="show" style="font-size:12%;">   
          <van-col span="24">距离活动开始还剩：{{h}}时{{m}}分{{s}}秒</van-col>  
        </van-col>
        <van-col span="18" v-if="show1">秒杀开始</van-col>
      </van-row>
      <van-row type="flex" justify="space-around">
        <van-col span="6">
          <router-link
            to="/vegetable"
            style="display:flex;flex-direction:column;align-items:center;"
          >
            <van-image
              width="80%"
              height="80%"
              src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2379182273,2095371221&fm=27&gp=0.jpg"
            />西红柿
            <van-card desc="￥4.75元/每袋" price="0.95元/每斤" origin-price="1.18" />
          </router-link>
        </van-col>
        <van-col span="6">
          <router-link
            to="/vegetable"
            style="display:flex;flex-direction:column;align-items:center;"
          >
            <van-image
              width="100%"
              height="100%"
              src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2388195594,3422785024&fm=26&gp=0.jpg"
            />熟食
            <van-card desc="￥1.75元/每袋" price="0.95元/每斤" origin-price="1.18" />
          </router-link>
        </van-col>
        <van-col span="6">
          <router-link
            to="/vegetable"
            style="display:flex;flex-direction:column;align-items:center;"
          >
            <van-image
              width="60%"
              height="60%"
              src="data:image/jpeg;base64,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"
            />龙虾
            <van-card desc="￥4.75元/每袋" price="0.95元/每斤" origin-price="1.18" />
          </router-link>
        </van-col>
      </van-row>

      <!-- 秒杀结束 -->
      <van-row type="flex" justify="space-around">
        <van-col span="24" class="thumbnail-box">
          <router-link to="/vegetable" class="thumbnail-left">
            <van-image
              width="100%"
              height="130"
              src="https://img.alicdn.com/imgextra/i1/2200649160970/O1CN01JLA8Fi1J2IisxH6A7_!!2200649160970.jpg"
            />海鲜冻货
          </router-link>

          <van-col span="14" class="thumbnail">
            <router-link to="/vegetable" class="thumbnail_chirden">
              <van-image
                width="100"
                height="70"
                src="https://img.alicdn.com/imgextra/i3/2454130188/O1CN01Ei7d6G1DG8zHwh8As_!!2454130188.jpg"
              />蔬菜特惠
            </router-link>

            <router-link to="/vegetable" class="thumbnail_chirden">
              <van-image
                width="100"
                height="70"
                src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4138584931,3453873069&fm=26&gp=0.jpg"
              />粮油专区
            </router-link>
          </van-col>
        </van-col>
      </van-row>
      <!-- 为你推荐 -->
      <van-tabs v-model="act">
        <van-tab title="为你推荐">
          <van-card
            :desc="item.desc"
            :price="item.price"
            :title="item.name"
            :thumb="item.photo"
            v-for="(item, index) in recommend"
            :key="index"
            @click="tap(item.id)"
          />
        </van-tab>
        <van-tab title="常用清单">
          <van-card
            :price="item.price"
            :desc="item.desc"
            :title="item.name"
            :thumb="item.photo"
            v-for="(item, index) in recommend"
            :key="index"
            @click="tap(item.id)"
          />
        </van-tab>
      </van-tabs>
      <!-- 为你推荐和常用清单结束 -->
    </section>
    <!-- 子路由显示处结束 -->

    <footer>
      <van-tabbar v-model="active" active-color="#07c160" inactive-color="#000">
        <van-tabbar-item icon="home-o" to="/main">首页</van-tabbar-item>
        <van-tabbar-item icon="smile-comment-o" to="/vegetable">全部菜品</van-tabbar-item>
        <van-tabbar-item icon="wap-nav" to="/ulist">常用清单</van-tabbar-item>
        <van-tabbar-item icon="shopping-cart" to="/cart">购物车</van-tabbar-item>
        <van-tabbar-item icon="manager" to="/mine">我的</van-tabbar-item>
      </van-tabbar>
    </footer>
    <!-- 底部选项卡 -->
  </div>
</template>
<script>
import Head from "@/components/Head";
import axios from "axios";
import qs from "Qs";
let id = localStorage.getItem("token");
let username = localStorage.getItem("username");
export default {
  name: "Main",
  data() {
    return {
      active: 0,
      msga: "",
      list: [],
      listItem: [],
      recommend: [],
      userId: "",
      seen: true,
      user: username,
      act: 2,
      h: "",
      m: "",
      s: "",
      show: true,
      show1: false,
      classify: []
    };
  },

  components: {
    Head
  },
  mounted() {
    let _this = this;
    _this.userId = username;
    console.log(_this.userId);
    //轮播图请求
    axios({
      url: "http://106.12.45.42:8080/MeledMall/sildeShow/show",
      method: "post",
      data: qs.stringify({})
      // headers:{'Content-Type':'application/x-www-form-urlencoded'}
    })
      .then(function(response) {
        console.log(response.data.info);
        _this.list = response.data.info;
      })
      .catch(function(error) {
        console.log(error);
      });
    //为你推荐和常用清单
    axios({
      url: "http://106.12.45.42:8080/MeledMall/menu/recommend",
      method: "post",
      data: qs.stringify({})
    })
      .then(res => {
        _this.recommend = res.data.info;
        console.log(_this.recommend);
      })
      .catch(error => {
        console.log(error);
      });

    //秒杀倒计时
    let itemTime = setInterval(function() {
      let day = new Date();
      let stopTime = new Date("2019-7-27 23:00:00");
      let sx = stopTime - day;
      _this.h = toS(parseInt(sx / 1000 / 60 / 60));
      _this.m = toS(parseInt((sx / 1000 / 60) % 60));
      _this.s = toS(parseInt((sx / 1000) % 60));
      // _this.sum = h + "时" + m + "分" + s + "秒";
      function toS(num) {
        num = num + "";
        if (num.length < 2) {
          num = "0" + num;
        }
        return num;
      }
      if (sx <= 0) {
        clearInterval(itemTime);
        _this.show = false;
        _this.show1 = true;
      }
    }, 1000);
    //分类导航请求
    axios({
      url: "http://106.12.45.42:8080/MeledMall/menu/parentMenu",
      method: "post"
    }).then(data => {
      console.log(data.data.info);
      _this.classify = data.data.info;
      console.log(_this.classify);
    });
  },
  methods: {
    name(msg) {
      this.msga = msg;
    },
    //超值秒杀图的点击
    miaosha() {
      this.$router.push("/vegetable");
    },
    //点击退出
    quit() {
      localStorage.removeItem("token");
      localStorage.removeItem("username");
      this.$router.push("/login");
    },
    //点击推荐列表进入到商品详情
    tap(id) {
      this.$router.push({ name: "Detail", query: { id: id } });
    },
    //点击分类展示进入全部菜品
    tapItem(proId) {
      console.log(1);
      this.$router.push({ name: "Vegetable", query: { id: proId } });
    },
    //点击轮播图
    tapLb(lb) {
      console.log(1);
      this.$router.push({ name: "Detail", query: { id: lb } });
    }
  }
};
</script>
<style scoped>
.thumbnail-box {
  display: flex;
  justify-content: space-around;
  padding: 10px;
  border-top: 1px solid #000;
  margin-top: 8px;
}
.thumbnail {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.thumbnail_chirden {
  display: flex;
  align-items: center;

  border: 1px solid #ccc;
}
.thumbnail-left {
  text-align: center;
  border: 1px solid #ccc;
  width: 200px;
  height: 160px;
}
</style>