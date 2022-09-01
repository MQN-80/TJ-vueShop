<template>
  <div class="forum_heard">
    <van-tabs v-model="active" background = "#dbe9f5">
      <van-tab title="热门贴子">
        <recommend></recommend>
      </van-tab>
      <van-tab title="我的发布">
        <myarticle></myarticle>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
  import Recommend from '@/views/forum/Recommend.vue'
  import Myarticle from '@/views/forum/My_article.vue'
    export default {
    components: {
      'recommend': Recommend,
      'myarticle':Myarticle
    },
    props:["active"]
    }
</script>