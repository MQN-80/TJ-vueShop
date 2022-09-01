<template>
<div>
<van-nav-bar
  title="订阅店铺"
  left-text="返回"
  left-arrow
  @click-left="goback"
/>
<div v-if="shop_table.length>0">
<van-cell-group>
  <div v-for="shop in shop_table" :key="shop.name">
 <van-cell icon title="URL 跳转" size="large" is-link url="">
  <template #title>
    <span>{{shop.name}}</span>
    <van-tag type="danger">标签</van-tag>
  </template>
    <template #icon>
      <router-link :to="{name:'店铺页',params:{shop_id:shop.shop_id}}">
      <img class="icon_shop" :src="shop.img"/>
      </router-link>
  </template>
 <template #label>
   <span>添加时间：{{shop.collect_time}}</span>
 </template>
</van-cell>
 <van-divider />
</div>
</van-cell-group>
</div>
<div v-else>
  <baseline></baseline>
</div>
</div>
</template>

<script>
import Baseline from '@/common/user_baseline.vue'
  export default {
    components: {
      'baseline': Baseline,
    },
    data() {
      return {
        shop_table:this.$ls.get("subscribe")
      }
    },
    beforeCreate(){
      //缓存订阅店铺
      if(this.$ls.get("subscribe")==null)
      {
      this.$net({
      method: 'get',
      url: '/ShopTransaction/search_user_collectShop',
      params:{
        UserID:this.$ls.get("user_info").user_id,
      }
     }).then((response) => {
      console.log('订阅店铺为');
      console.log(response);
      this.$ls.set("subscribe",response.data);
      this.shop_table=this.$ls.get("subscribe");
     }).catch(function(error) {
      alert(error)
     });
      }
      console.log(this.$ls.get("subscribe"));
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
.icon_shop{
    width: 70px;
    height:70px;
    border-radius: 50%;
    margin-right: 4vw;
}
</style>