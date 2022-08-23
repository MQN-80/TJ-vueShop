<template>
<div>
<van-nav-bar
  title="收藏夹"
  left-text="返回"
  left-arrow
  @click-left="goback"
/>
<van-cell-group>
  <div v-for="product in productData" :key="product.name">
    <van-card
  desc="描述信息"
  title="商品标题"
  thumb="https://img01.yzcdn.cn/vant/ipad.jpeg">
   <template #title>
    <span>{{product.name}}</span>
  </template>
  <template #price>
    <span>{{product.price}}</span>
  </template>
  <template #footer>
    <van-button plain type="info">查看商品主页</van-button>
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
        productData: [{
          name: '书包',
          price: '132',
          address: ''
        }, {
          name: '耳机',
          price: '400',
          address: ''
        }, {
          name: '数据库系统概念教材',
          price: '93',
          address: ''
        }, {
          name: '鞋',
          price: '300',
          address: ''
        }],
        user_favorites:this.$ls.get(this.$route.params.id+"favorites")
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
</style>