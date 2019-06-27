<template>
    <div>
        <Head2></Head2>
<!-- top -->

    <van-tabs v-model="act" animated>
      <van-tab :title="item.menu" v-for="(item,index) in list" :key="index" @click="nav">
         <van-card
            :price="item.price"
            :desc="item.desc"  
            :title="item.name"
            :thumb="item.photo"
            v-for="(item,index) in listItem" :key="index" 
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
import qs from "Qs";


export default {
    name:"Vegetable",
    data() {
      
        return {
          active:1,
          act:"",
          list:[],
          id:'',
         listItem:[]
        }
    },
    components:{
      Head2
    },
    methods:{
      tap(id){
        this.$router.push({name:"Detail",query:{id:id}})
      },
      nav(){
        console.log(1)
      }     
    },
    mounted() {
      let _this = this
      //分类导航请求
      axios({
          url:"http://106.12.45.42:8080/MeledMall/menu/parentMenu", 
          method:'post',
      }).then(data=>{
        console.log(data.data.info)
        _this.list = data.data.info      
        _this.act= this.$route.query.id-1;
      });
      //具体分类商品列表
      axios({
        url:'http://106.12.45.42:8080/MeledMall/menu/childMenu',
        method:'post',
        // headers:{'Content-Type':'application/x-www-form-urlencoded'},
        data:qs.stringify({
          id:_this.$route.query.id
        })
      }).then(data=>{
        console.log(data.data.info)
        _this.listItem=data.data.info
      })
    },
}

</script>
<style scoped>

</style>
