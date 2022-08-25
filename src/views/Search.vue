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
          @input="oninput"
          @cancel="onCancel"/>
          <!-- input表示输入框发生变化 -->
        </form>
        <!-- 调用历史与热门组件 -->
        <HistoryHot v-if="blockshow==1" 
        :HistoryData="HistoryData"
        :HotData="HotData"/>

        <!-- 调用搜索提示组件 -->
        <SearchTips v-if="blockshow==2" 
        :SearchTipsData = "SearchTipsData"/>

        <!-- 调用商品内容组件 -->
        <SearchProducts :message="getProduct" v-if="blockshow==3"/>
      </div>
  </body>
</template>

<script>
import HistoryHot from "@/components/search/HistoryHot"
import SearchTips from "@/components/search/SearchTips"
import SearchProducts from "@/components/search/SearchProducts"
import { Toast } from 'vant';
// 未来调用数据接口
// import (GetSearchHistoryHot,GetSearchTips) from "@/vuex/search"

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
      //历史记录的列表数据
      HistoryData:[],
      //热门搜索的列表数据
      HotData:[],
      //搜索实时提示的列表数据
      SearchTipsData:[],
      //获取的后端商品列表
      getProduct:[],
    };
  },

  //数据请求
  created(){
    GetSearchHistoryHot().then(res=>{
        if(res.data.errno==0){
          console.log(res.data);
          //调取历史记录
          this.HistoryData=res.data.data.HistoryList.keyword;
          //调取热门搜索
          this.HotData=res.data.data.HotList.keyword;
        }
    })

  },

  methods: {
    onSearch(val) {
      // 发送搜索请求
      this.get_serachProduct(val);
      //this.blockshow=3;
      Toast(val);
    },
    onCancel() {
      // 取消搜索请求
      this.blockshow=1;
      Toast('取消');
    },
    oninput(val){
      //发送请求，获取实时搜索的文本内容的数据列表
      this.blockshow=2;
      console.log(val);
      GetSearchTips({keyword:val}).then(res=>{
        if(res.errno == 0){
          console.log(res);
          //数据请求待完善
          SearchTipsData.SearchTipsData=res.data
        }
      })
    },
    //获取搜索的商品
    get_serachProduct(val){
    this.$net({
    method:'get',
    url:'/ShopTransaction/search_productInfo',
    params:{
       product_name:val
      }
    }).then((response)=>{
    this.getProduct=response.data;
    this.blockshow=3;
    console.log("sada")
    }).catch((err)=>{
      console.log(err);
    })
    }
  },
  components:{
    HistoryHot,
    SearchTips,
    SearchProducts
}
};
</script>

<style lang="less" scoped>
body{
  background-color: #eee;
}
</style>
