<template>
  <div>
    <van-dropdown-menu>
        <van-dropdown-item v-model="value1" :options="option1"
        @change="salesSelect"/>
        <van-dropdown-item v-model="value2" :options="option2"
        @change="priceSort"/>
    </van-dropdown-menu>
    <Products :productInfo="message"/>
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
        { text: '活动商品', value: 1 },
      ],
      option2: [
        { text: '默认排序', value: 'default' },
        { text: '价格升序', value: 'desc' },
        { text: '价格降序', value: 'asc' },
      ],
      productInfo:[],
    }
  },
  props:["message"],
  components:{
      Products
  },

  methods:{
    salesSelect(){

    },
    
      priceSort(){
          if(this.value2 == 'desc'){
					this.productInfo.sort((a,b)=>{
						return a.price - b.price
					})
          }else if(this.value2=='asc'){
            return b.price - a.price
          }
      }
  },

  mounted() {
    console.log(this.message); //父组件传递过来的数据
    console.log("dada");
    this.product=this.message;
    console.log(this.product);
  },
};
</script>

<style>

</style>