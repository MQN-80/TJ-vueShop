<template>
<div>
<van-nav-bar
  title="订阅店铺"
  left-text="返回"
  left-arrow
  @click-left="goback"
/>
<van-cell-group>
  <div v-for="shop in shop_table" :key="shop.name">
 <van-cell icon title="URL 跳转" size="large" is-link url="">
  <template #title>
    <span>{{shop.name}}</span>
    <van-tag type="danger">标签</van-tag>
  </template>
    <template #icon>
      <img class="icon_shop" :src="shop.img"/>
  </template>
 <template #label>
   <span>添加时间：{{shop.collect_time}}</span>
 </template>
</van-cell>
 <van-divider />
</div>
</van-cell-group>
</div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          name: '万代',
          date: '2016-05-02',
          address: ''
        }, {
          name: '寿屋',
          date: '2016-05-04',
          address: ''
        }, {
          name: '御模道',
          date: '2016-05-01',
          address: ''
        }, {
          name: 'GSC',
          date: '2016-05-03',
          address: ''
        }],
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