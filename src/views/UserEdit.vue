<template>
    <div>
        <Head3 :tit="name"></Head3>
          <van-address-edit
                :area-list="areaList"
              
                show-postal
                show-delete
                show-set-default
                show-search-result
                :search-result="searchResult"
                @save="onSave"
                @delete="onDelete"
                @change-detail="onChangeDetail"
                />

               
    </div>
</template>
<script>
import Head3 from "@/components/Head3"
import { Area } from 'vant';
export default {
    name:"UserEdit",
    data() {
        return {
             name:"个人信息",
            areaList:this.$store.state.areaList,
             searchResult: [],
              
        }
    },
    components:{
       Head3
    },
    methods:{
      
     
                onSave() {
                  Toast('save');
                },


                onDelete() {
                  Toast('delete');
                },

                
                onChangeDetail(val) {
                  if (val) {
                    this.searchResult = [{
                      name: '黄龙万科中心',
                      address: '杭州市西湖区'
                    }];
                  } else {
                    this.searchResult = [];
                  }
                }
      
    },
    mounted() {
       
    },
    // computed:{
		// 		areaList(){
		// 			return this.$store.state.areaList
		// 		}
		// 	}
}

</script>
<style scoped>

</style>
