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
      this.$store.commit('change_shopuser',response.data[0])
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
  if(this.message!=undefined)
  {
    this.product_id=this.message;
  this.get_user(this.product_id)
  }
  else{
  var mid=this.$store.state.category.shopuser_detail
  this.avator="http://106.12.131.109:8083/avator/"+mid.id+".jpg";
  this.user_id=mid.id;
  this.user_name=mid.User_name
  }
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
