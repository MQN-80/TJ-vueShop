<template>
  <van-list
    v-model="loading"
    :finished="finished"
    finished-text="没有更多了">
    <!-- @load="onLoad" -->
    <van-cell v-for="item in list" :key="item" :title="item" />
    <!-- 上面的list以后替换成SearchTipsData -->
  </van-list>
</template>

<script>
export default {
  data() {
    return {
      list: [1,2,3,4,5,6],
      // loading: false,
      finished: true,
    };
  },
  // methods: {
  //   onLoad() {
  //     // 异步更新数据
  //     // setTimeout 仅做示例，真实场景中一般为 ajax 请求
  //     setTimeout(() => {
  //       for (let i = 0; i < 10; i++) {
  //         this.list.push(this.list.length + 1);
  //       }

  //       // 加载状态结束
  //       this.loading = false;

  //       // 数据全部加载完成
  //       if (this.list.length >= 40) {
  //         this.finished = true;
  //       }
  //     }, 1000);
  //   },
  // },
  props:["SearchTipsData"]
};
</script>

<style>

</style>