<template>
    <div>
      <Head3 :tit="name"></Head3>
       <van-uploader v-model="fileList" multiple class="userimage" />
    </div>
</template>
<script>
import Head3 from "@/components/Head3"
export default {
    name:"Userimage",
    data() {
        return {
           name:"个人信息",
             fileList: []
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
.userimage{
 width: 100px;position: absolute;top: 50%;margin-top: -50px;
 height:100px;left:50%;margin-left:-50px
  
}
</style>
