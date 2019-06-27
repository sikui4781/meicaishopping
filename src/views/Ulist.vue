<template>
    <div>
        <Head2></Head2>
<!-- top -->

        <van-tabs v-model="act" animated>
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
import Head2 from '@/components/Head2'
import axios from 'axios'
import qs from 'Qs'

export default {
    name:"Ulist",
    data() {
        return {
           active:2,
           act:0,
           list:[],
           recommend:[]
        }
    },
    components:{
      Head2
    },
    methods:{
      
     tap(id){
      //  console.log(id);
       
        this.$router.push({name:"Detail",query:{id:id}})

        
     }
      
    },
    mounted() {
        this.$emit("tit",this.name)
        let _this = this
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
    },
}

</script>
<style scoped>

</style>
