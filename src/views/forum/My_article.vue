<template>
  <div class="MyArticle">
    <div class="ShowArticle">
      <van-swipe-cell>
      <van-card
        num="2"
        price="2.00"
        desc="描述信息"
        title="商品标题"
        class="goods-card"
        thumb="https://img01.yzcdn.cn/vant/cat.jpeg"
      />
  <template #right>
    <van-button square text="删除" type="danger" class="delete-button" />
  </template>
</van-swipe-cell>
    </div>
    <FloatBall :text="'发布'" ></FloatBall>
  </div>
</template>
<script>
    import FloatBall from '@/components/forum/MyFabBtn.vue';
    export default {
    components:{
       'FloatBall': FloatBall
    },
    }
</script>

<style>
  .MyArticle{
    height: 100%;
    width: 100%;
    position: fixed;

  }
</style>