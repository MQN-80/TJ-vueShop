<template lang="html">
  <body>
      <div>
        <!-- 圆边搜索框 -->
          <form action="/">
          <van-search
          v-model="searchval"
          shape="round"
          background=white
          show-action
          placeholder="请输入商品名称"
          @search="onSearch"
          @cancel="onCancel"/>
        </form>
        <HistoryHot v-if="blockshow==1"/>
      </div>
  </body>
</template>

<script>
import HistoryHot from "@/components/HistoryHot"
export default {
  data() {
    return {
      //搜索的文字，由用户输入
      searchval:"",
      //值可以为1，2，3
      //为1表示历史记录和热门搜索
      //为2表示展示搜索提示的列表
      //为3表示展示搜索内容
      blockshow:1,
    };
  },
  //数据请求
  created(){
    //待补充
  },
  methods: {
    onSearch(val) {
      // 发送搜索请求
      Toast(val);
    },
    onCancel() {
      // 取消搜索请求
      Toast('取消');
    },
  },
  components:{
     HistoryHot
  }
};
</script>

<style lang="less" scoped>
body{
  background-color: #eee;
}
</style>
