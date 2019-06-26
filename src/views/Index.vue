<template>
    <div>
        <Head1 :tits="tou"></Head1>
        <router-view @tit="name"></router-view>
    </div>
</template>
<script>
import Head1 from '@/components/Head1'
export default {
    name:"Index",
    data() {
        return {
             tou:"" 
        }
    },
    components:{
      Head1
    },
    methods:{
      
       name(msg){

           this.tou=msg
           
      
     
       }
    }
}

</script>
<style scoped>

</style>
