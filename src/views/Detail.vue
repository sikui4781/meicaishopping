<template>
  <div>
    <van-nav-bar title="详情" left-text="返回" left-arrow @click-left="onClickLeft"/>

    <van-swipe class="goods-swipe" :autoplay="3000">
      <van-swipe-item>
        <img :src="list.photo">
      </van-swipe-item>
    </van-swipe>


  <!-- 112233 -->
    <van-cell-group>
      <van-cell>
        <div class="goods-title">{{ list.name }}</div>
        <div class="goods-price">￥{{ list.price }}</div>
        <van-stepper v-model="value" max="5" integer/>
      </van-cell>
      <van-cell class="goods-express">
        <van-col span="10">运费：免运费</van-col>       
      </van-cell>
    </van-cell-group>

    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" @click="onClickService"/>
      <van-goods-action-icon icon="cart-o" text="购物车" @click="onClickCart"/>
      <van-goods-action-button type="warning" text="加入购物车" @click="onClickAddCart(list.id, list.price,list.name,list.photo)"/>
      <van-goods-action-button type="danger" text="立即购买" @click="onClickBuying"/>
    </van-goods-action>
  </div>
</template>

<script>
import { Toast } from "vant";
import axios from "axios";
import qs from "Qs";
export default {
  name: "Detail",
  data() {
    return {
      list: [],
      value: 1,
      recommend:''
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickService() {
      this.$router.push("/service");
    },
    onClickCart() {
      this.$router.push("/cart");
    },
    onClickAddCart(mid, price,name,photo) {
      let _this = this
      let uid = localStorage.getItem('token')
      console.log(uid)
      axios({
      url: "http://106.12.45.42:8080/MeledMall/shopCar/addShopCar",
      method: "post",
      data: qs.stringify({
        mid:mid,
        uid:uid,
        mname:name,
        mprice:price,
        mphoto:photo
      })
    })
      .then(res => {
        // _this.list = res.data.info;
        // console.log(_this.list);
        Toast.success("加购物车成功");
      })
      .catch(error => {
        console.log(error);
        
      });
          
      
    },
    onClickBuying() {
      axios
        .get("http://jx.xuzhixiang.top/ap/api/add-product.php", {
          params: {
            uid: 12441,
            pid: this.$route.query.id,
            pnum: this.value
          }
        })
        .then(data => {
          // console.log(data)
          this.$router.push("cart");
        });
    }
  },
  mounted() {
    
    let _this = this
      axios({
      url: "http://106.12.45.42:8080/MeledMall/menu/child",
      method: "post",
      data: qs.stringify({
        id: _this.$route.query.id
      })
    })
      .then(res => {
        console.log(res.data)
        _this.list = res.data.info;
        // console.log(_this.recommend);
      })
      .catch(error => {
        console.log(error);
        
      });
  }
};
</script>
<style scoped>
.goods {
  padding-bottom: 50px;
}
img {
  width: 100%;
  display: block;
}

.goods-title {
  font-size: 22px;
  padding-bottom: 10px;
}
.goods-price {
  color: #f44;
}
.goods-express {
  color: #999;
  font-size: 12px;
  padding: 5px 15px;
}
/* &-cell-group {
    margin: 15px 0;
    .van-cell__value {
      color: #999;
    }
  }
  &-tag {
    margin-left: 5px;
  }
} */
</style>
