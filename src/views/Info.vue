<template>
    <div>

      <Head3 :tit="name"></Head3>


      <van-cell title="头像上传" is-link to="/userimage" />
      <van-cell title="个人信息编辑" is-link to="/useredit" />

      
      


    </div>
</template>
<script>
import Head3 from "@/components/Head3"
export default {
    name:"Info",
    data() {
        return {
          name:"个人信息",
         
        }
    },
    components:{
        Head3
    },
    methods:{
      
      
    },
    mounted() {
       
    },
}

</script>
<style scoped>

</style>
