<template>
  <div>
    <van-nav-bar
      :title="tits"
      @click-left="onClickLeft"
      @click-right="onClickRight"
  />
  </div>
</template>

<script>
export default {
  name: 'Head1',
  data () {
    return {
     
    }

  },
  props:["tits"],
  methods: {
    onClickLeft() {
    
    },
    onClickRight() {
     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
