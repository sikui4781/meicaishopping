<template>
    <div>

      <Head3 :tit="name"></Head3>


      <van-cell title="收货地址" :value="dress" />
      <van-cell title="电话" :value="tell" />
      <van-cell title="单号" :value="onum" />
      <van-cell title="金额" :value="allmoney" />
     

      <van-button type="danger" size="large" class="big" @click="buy">立即购买</van-button>
    </div>
</template>
<script>
import Head3 from "@/components/Head3"
import { Dialog } from 'vant';
export default {
    name:"Paymoney",
    data() {
        return {
          name:"立即购买",
         dress:"地址",
         tell:"tell",
         onum:"onum",
         allmoney:this.$route.query.money/100
        }
    },
    components:{
        Head3
    },
    methods:{
       buy(){
         Dialog.alert({
              title:"您的商品正在打包派送中",
              message: '请请耐心等待'
            }).then(() => {
              // on close
            });
       }
               
    },
    mounted() {
        
     console.log()

    },
}

</script>
<style scoped>
.big{
  position:absolute;
  left:0;
  bottom:0
}
</style>
