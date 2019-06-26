<template>
    <div>
        <van-nav-bar :border="flag">
           
           <van-icon name="setting" slot="right" size="22px" style="margin-right:10px" color="black" @click="tap1"/>
           <van-icon name="location" slot="right" size="22px" color="black" @click="tap"/>
        </van-nav-bar>
        <!-- top -->

         <div class="container">
      <!-- 头像栏 -->
      <van-row type="flex" justify="space-between" tag="div" class="top">
        <van-col span="18" tag="div">
          <div class="top1">
            <div class="top11"></div>
            <span>xxx</span>
          </div>
        </van-col>
        <van-col span="3" tag="div" class="right">
          <van-icon name="arrow" size="40px"/>
        </van-col>
      </van-row>
      <!-- 余额栏 -->
      <van-row type="flex" justify="space-between" tag="div" class="YuE">
        <van-col span="3"></van-col>
        <van-col span="18" class="ycenter" tag="div">
          <div class="yu1">
            <div class="left1">
              <p>0.00</p>
              <p>余额(元)</p>
            </div>
            <div class="right1">
              <p>0</p>
              <p>优惠券</p>
            </div>
          </div>
        </van-col>
        <van-col span="3"></van-col>
      </van-row>

      <!-- 我的订单 -->
      <van-row type="flex" justify="space-between" tag="div" class="dingdan">
        <van-col span="24" tag="div">
          <div class="dzong">
            <div class="dshang">
              <p>我的订单</p>
              <van-icon name="arrow" size="24px" tag="p" class="tubiao"/>
            </div>
          </div>
        </van-col>
      </van-row>

      <van-row type="flex" justify="space-around" tag="div" class="xia">
        <van-col span="2"></van-col>
        <van-col span="4" tag="div" class="dxia">
          <dl>
            <dd></dd>
            <dt>代收货</dt>
          </dl>
        </van-col>
        <van-col span="4" tag="div" class="dxia">
          <dl>
            <dd></dd>
            <dt>代发货</dt>
          </dl>
        </van-col>
        <van-col span="4" tag="div" class="dxia">
          <dl>
            <dd></dd>
            <dt>待收货</dt>
          </dl>
        </van-col>
        <van-col span="4" tag="div" class="dxia">
          <dl>
            <dd></dd>
            <dt>已收货</dt>
          </dl>
        </van-col>
        <van-col span="4" tag="div" class="dxia">
          <dl>
            <dd></dd>
            <dt>售后服务</dt>
          </dl>
        </van-col>
        <van-col span="2"></van-col>
      </van-row>

      <!-- 在线充值 -->
      <van-row type="flex" justify="space-between" tag="div" class="dingdan">
        <van-col span="24" tag="div">
          <div class="dzong">
            <div class="dshang">
              <p>在线充值</p>
              <van-icon name="arrow" size="24px" tag="p" class="tubiao"/>
            </div>
          </div>
        </van-col>
      </van-row>

      <van-row type="flex" justify="space-around" tag="div" class="chonge">
        <van-col span="2"></van-col>
        <van-col span="4" tag="div" class="cxia">
          <p>500元</p>
        </van-col>
        <van-col span="4" tag="div" class="cxia">
          <p>200元</p>
        </van-col>
        <van-col span="4" tag="div" class="cxia">
          <p>100元</p>
        </van-col>
        <van-col span="4" tag="div" class="cxia">
          <p>50元</p>
        </van-col>
        <van-col span="2"></van-col>
      </van-row>

     
      <van-row type="flex" justify="center" style="margin-top:10px;border-bottom:1px solid #333">
        <van-col span="6"></van-col>
        <van-col span="12">
          <van-button type="default" style="width:200px;height:30px;line-height:30px;margin-bottom:10px">立即充值</van-button>
        </van-col>
        <van-col span="6"></van-col>
      </van-row>

      
    </div>
         

        <!-- con -->
         <van-tabbar
          v-model="active"
          active-color="#07c160"
          inactive-color="#000"
        >
          <van-tabbar-item icon="home-o" to="/main">首页</van-tabbar-item>
          <van-tabbar-item icon="smile-comment-o" to="/vegetable" >全部菜品</van-tabbar-item>
          <van-tabbar-item icon="wap-nav" to="/ulist">常用清单</van-tabbar-item>
          <van-tabbar-item icon="shopping-cart" to="/cart">购物车</van-tabbar-item>
          <van-tabbar-item icon="manager" to="/mine">我的</van-tabbar-item>
        </van-tabbar>
        <!-- 底部选项卡 -->
    </div>
</template>
<script>

export default {
    name:"Mine",
    data() {
        return {
          active:4,
          flag:false
        }
    },
    components:{
      
    },
    methods:{
      tap(){
        this.$router.push("/info")
      },
     tap1(){
       this.$router.push("setting")
     },
     toshezhi(){
     this.$router.push('/Setting')
    },
    
      
    },
    mounted() {
       
    },
}

</script>
<style scoped>
p,span{
margin: 0;
padding:0;
}
.top {
  width: 100%;
  height: 150px;
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
  width: 126px;
  height: 80px;
}
.cxia {
  text-align:center;
  font-size: 16px;
  line-height: 80px;
}
</style>
