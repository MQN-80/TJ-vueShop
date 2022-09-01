<template lang="html">
  <section class="content">
    <div>
      <router-link :to="{name:'店铺页',params:{shop_id:user_id}}">
    <van-image
  round
  width="3rem"
  height="3rem"
  :src="avator"
   />
    </router-link>
   {{user_name}}
    </div>
    <div class="img-wrap" v-for="k in content">
      <img :src="k.imgSrc">
    </div>
  </section>

</template>

<script>
import { Toast } from 'vant'
export default {
  data(){
  return{
    avator:'',
    user_id:'',
    product_id:'',
    user_name:'',
  }
  },
  props:["message"],
  methods:{
  get_user(id){
   this.$net({
      method: 'get',
      url: '/ShopTransaction/get_goods_userInfo',
      params:{
        id:id,
      }
     }).then((response)=>{
      console.log(response)
      this.avator="http://106.12.131.109:8083/avator/"+response.data[0].id+".jpg";
      this.user_id=response.data[0].id;
      this.user_name=response.data[0].User_name
     }).catch((err)=>{
      console.log(err)
      Toast("网络出错,请稍候")
     })
  }
  },
  computed:{
    content(){
      return this.$store.state.detail.productDatas.contentImgSrc
    }
  },
  created(){
  this.product_id=this.message;
  console.log(this.product_id)
  this.get_user(this.product_id)
  }
}
</script>

<style lang="less" scoped>
  .content {
    width: 100%;
    margin-top: 10px;
    border-top: 20px solid #F8FCFF;
    .img-wrap {
    height: 120vw;

      img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
