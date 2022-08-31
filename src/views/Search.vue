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
        <History 
        :history_list="HistoryList"
        v-if="blockshow==1" 
        />

        <!-- 调用搜索提示组件 -->
        <SearchTips  
        v-if="blockshow==2"/>

        <!-- 调用商品内容组件 -->
        <SearchProducts 
        :message="getProduct"
        v-if="blockshow==3"/>
      </div>
  </body>
</template>

<script>
import History from "@/components/search/History"
import SearchTips from "@/components/search/SearchTips"
import SearchProducts from "@/components/search/SearchProducts"
import { Toast } from 'vant';

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
      HistoryList:[],
      //获取的后端商品列表
      getProduct:[],
    };
  },

  methods: {
    onSearch(val) {

      if (this.val !== "") {  //判断输入框的值
        // 每次搜索的值push到新数组里
        this.newArr.push(this.val);
		
        this.newArr = this.unique(this.newArr);  //调用unique方法去重
        
        this.list = [];
        for (let i = this.newArr.length; i > 0; i--) {  //数组倒序  最新输入的排在最上面
          this.list.push(this.newArr[i - 1]);
        }
        
        if (this.list.length > 10) {  //最多保存10条
          this.list = this.list.slice(0, 10);
        }
        localStorage.setItem("HistoryList", JSON.stringify(this.list));   //存localStorage
      }
      // 发送搜索请求
      this.get_serachProduct(val);

    },
    onCancel() {
      // 取消搜索请求
      this.blockshow=1;
      Toast('取消');
    },
    oninput(val){
      this.blockshow=2;
      // this.get_serachTips(val);
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
    }).catch((err)=>{
      console.log(err);
    })
    },
  },
  components:{
    History,
    SearchTips,
    SearchProducts
  },
  mounted(){
     
  }
};
</script>

<style lang="less" scoped>
body{
  background-color: #eee;
}
</style>
