<template>
    <div>
        <Head2></Head2>
<!-- top -->

        <van-tabs v-model="act" animated>
      <van-tab title="为我推荐">
        <van-card
            :price="item.pprice"
            :desc="item.pdesc"  
            :title="item.pname"
            :thumb="item.pimg"
            v-for="(item,index) in list" :key="index" 
            @click="tap(item.pid)"
        />
      </van-tab>
      <van-tab title="常用清单">
        <van-card
            :price="item.pprice"
            :desc="item.pdesc"  
            :title="item.pname"
            :thumb="item.pimg"
            v-for="(item,index) in list" :key="index" 
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

export default {
    name:"Ulist",
    data() {
        return {
           active:2,
           act:0,
           list:[]
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
        axios.get('http://jx.xuzhixiang.top/ap/api/productlist.php',{
          params:{
            uid:12441
          }
        }).then(data=>{
          _this.list = data.data.data
        })
    },
}

</script>
<style scoped>

</style>
