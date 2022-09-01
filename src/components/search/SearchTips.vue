<template>
  <van-list
    :finished="finished"
    finished-text="没有更多了">
    <van-cell
    />
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
      Tipslist:[]
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
};
</script>

<style>

</style>