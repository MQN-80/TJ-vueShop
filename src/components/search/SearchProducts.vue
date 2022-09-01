<template>
  <div>
    <van-dropdown-menu>
        <van-dropdown-item v-model="value1" :options="option1"/>
        <van-dropdown-item v-model="value2" :options="option2"
        @change="priceSort"/>
    </van-dropdown-menu>
    <Products/>
  </div>
</template>

<script>
import Products from "./Products"
export default {
  data() {
    return {
      value1: 0,
      value2: 'default',
      option1: [
        { text: '全部商品', value: 0 },
      ],
      option2: [
        { text: '默认排序', value: 'default' },
        { text: '价格升序', value: 'desc' },
        { text: '价格降序', value: 'asc' },
      ],
    }
  },
  components:{
      Products
  },

  methods:{ 
      priceSort(){
          if(this.value2 == 'desc'){
            this.$store.state.login.message.sort((a,b)=>{
						return a.price - b.price
					})
          }else if(this.value2 =='asc'){
            this.$store.state.login.message.sort((a,b)=>{
						return b.price - a.price
          })
        }
      }
  },
};
</script>

<style>

</style>