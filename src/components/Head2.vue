<template>
  <div>
  <div class="container">
           

                <van-icon name="service" tag="span" class="tubiao" size="22px"  @click="service" />
                <van-search  shape="round" placeholder="请输入搜索关键词" v-model="value"  @search="onSearch"/>
                <van-icon name="bill" tap="span" size="22px"  @click="discount()" />
  </div>           

 
   
  </div>
</template>

<script>
export default {
  name: 'Head',
  data () {
    return {
      value:""
    }

  },
  props:["tits"],
  methods: {
    onSearch(){

    }
    ,
    discount(){
      this.$router.push('/discount')
    },
    service(){
       this.$router.push('/service')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.container{
  display:flex;
  height:50px;
  
  justify-content: space-around;
  align-items: center
}
</style>
