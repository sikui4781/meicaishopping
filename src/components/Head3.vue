<template>
  <div>
    <van-nav-bar
      :title="tit"
       left-arrow
      left-text="返回"
      :border="di"
      @click-left="onClickLeft"
      @click-right="onClickRight"
  />
  </div>
</template>

<script>
export default {
  name: 'Head3',
  data () {
    return {
     di:false
    }

  },
  props:["tit"],
  methods: {
    onClickLeft() {
     this.$router.go(-1)
    },
    onClickRight() {
     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
