<template>
  <div>
    <van-nav-bar title="详情" left-text="返回" left-arrow @click-left="onClickLeft"/>

    <van-swipe class="goods-swipe" :autoplay="3000">
      <van-swipe-item>
        <img :src="list.pimg">
      </van-swipe-item>
    </van-swipe>

    <van-cell-group>
      <van-cell>
        <div class="goods-title">{{ list.pname }}</div>
        <div class="goods-price">￥{{ list.pprice }}</div>
        <van-stepper v-model="value" max="5" integer/>
      </van-cell>
      <van-cell class="goods-express">
        <van-col span="10">运费：免运费</van-col>
        
      </van-cell>
    </van-cell-group>

    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" @click="onClickService"/>
      <van-goods-action-icon icon="cart-o" text="购物车" @click="onClickCart"/>
      <van-goods-action-button type="warning" text="加入购物车" @click="onClickAddCart"/>
      <van-goods-action-button type="danger" text="立即购买" @click="onClickBuying"/>
    </van-goods-action>
  </div>
</template>

<script>
import { Toast } from "vant";
import axios from "axios";
export default {
  name: "Detail",
  data() {
    return {
      list: [],
      value: 1
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
    onClickAddCart() {
      axios
        .get("http://jx.xuzhixiang.top/ap/api/add-product.php", {
          params: {
            uid: 12441,
            pid: this.$route.query.id,
            pnum: this.value
          }
        })
        .then(data => {
         
          Toast.success("加购物车成功");
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
    let _this = this;
    // console.log(this.$route.query.id)
    axios
      .get("http://jx.xuzhixiang.top/ap/api/detail.php", {
        params: {
          id: _this.$route.query.id
        }
      })
      .then(data => {
        // console.log(data.data.data)
        _this.list = data.data.data;
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
