<template>

  <div>
    <Head3 :tit="name"></Head3>
    <!-- <van-nav-bar
      title="地址列表"
      fixed
      left-text="返回"
      
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    /> -->
 
    <div class="container">


      <van-address-list
        v-model="chosenAddressId"
        :list="list"
        :disabled-list="disabledList"
        disabled-text="以下地址超出配送范围"
        @add="onAdd"
        @edit="onEdit"
      />
    </div>
    </div>

</template>


<script>
import { Toast } from 'vant';
import Head3 from"@/components/Head3"
export default {
  name: "Dizhilist",
  data() {
    return {
      name:"地址列表",
      chosenAddressId: "1",
      list: [
        {
          id: "1",
          name: "张三",
          tel: "13000000000",
          address: "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室"
        },
        {
          id: "2",
          name: "李四",
          tel: "1310000000",
          address: "浙江省杭州市拱墅区莫干山路 50 号"
        }
      ],
      disabledList: [
        {
          id: "3",
          name: "王五",
          tel: "1320000000",
          address: "浙江省杭州市滨江区江南大道 15 号"
        }
      ]
    };
  },
  methods: {
    onClickLeft() {
        this.$router.go(-1);
    },
    onClickRight() {

    },
    onAdd() {
      Toast("新增地址");
    },

    onEdit(item, index) {
      Toast("编辑地址:" + index);
    }
  },
  components:{
    Head3
  }
};
</script>

<style scope="">
/* .container{
  padding-top: 46px
  
} */
</style>