<template>
<div>
<van-nav-bar
  title="收藏夹"
  left-text="返回"
  left-arrow
  @click-left="goback"
/>
<van-cell-group>
  <div v-for="product in user_favorites" :key="product.Name">
    <van-card
  desc="描述信息"
  title="商品标题"
  thumb
  origin-price>
  <template #origin-price>
    <span>原价：{{product.collectPrice}}</span>
  </template>
  <template #thumb>
    <img class="icon_product" :src="'http://106.12.131.109:8083/product/'+product.id+'.jpg'"/>
  </template>
  <template #desc>
    <span><br/>收藏时间：{{product.create_time}}</span>
  </template>
   <template #title>
    <span style="font-size:20px ">{{product.Name}}</span>
  </template>
  <template #price>
    <span style="font-size:20px ">现价：{{product.nowPrice}}</span>
  </template>
  <template #footer>
    <van-button size=small plain type="info">查看商品主页</van-button>
  </template>
  </van-card>
   <van-divider />
</div>
</van-cell-group>
</div>
</template>
<script>
  export default {
    data() {
      return {
        user_favorites:this.$ls.get("favorites")
      }
    },
    beforeCreate(){
      if(this.$ls.get('favorites')==null)
      {
      //缓存收藏夹
      this.$net({
      method: 'get',
      url: '/ShopTransaction/search_user_collect',
      params:{
        UserID:this.$ls.get("user_info").user_id,
      }
     }).then((response) => {
      console.log('收藏夹为');
      console.log(response);
      this.$ls.set("favorites",response.data);
      this.user_favorites=this.$ls.get("favorites")
     }).catch(function(error) {
      alert(error)
     });
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      onEdit() {
      Toast('编辑');
    },
      goback(){
          this.$router.go(-1);//返回上一页
      } 
    }
  }
</script>

<style>
.icon_product{
  width: 90px;
  height:110px;
}
</style>