<template lang="html">
  <body>
      <div>
      <van-nav-bar
        :title="this.title"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"/>
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
          <!-- input表示输入框发生变化 -->
        </form>
        <!-- 调用历史与热门组件 -->
        <History 
        :history_list="HistoryList"
        v-if="blockshow==1" 
        />

        <!-- 调用商品内容组件 -->
        <SearchProducts 
        v-if="blockshow==2"/>
      </div>
  </body>
</template>

<script>
import History from "@/components/search/History";
import SearchProducts from "@/components/search/SearchProducts";
import { Toast } from "vant";

export default {
  data() {
    return {
      //搜索的文字，由用户输入
      searchval: "",
      //为1表示历史记录和热门搜索
      //为2表示展示搜索内容
      blockshow: 1,
      //历史记录的列表数据
      HistoryList: [],
      //是否按类别搜索，2是是，1是否（1为利用名称搜索）
      type: 1,
      title:''
    };
  },

  methods: {
    onClickLeft(){
        this.$router.push({name:'分类页'})
    },
    onSearch(val) {
      // if (this.val !== "") {  //判断输入框的值
      //   // 每次搜索的值push到新数组里
      //   this.newArr.push(this.val);
      //   this.newArr = this.unique(this.newArr);  //调用unique方法去重
      //   var list=[];
      //   for (let i = this.newArr.length; i > 0; i--) {  //数组倒序  最新输入的排在最上面
      //     list.push(this.newArr[i - 1]);
      //   }

      //   if (list.length > 10) {  //最多保存10条
      //     list = list.slice(0, 10);
      //   }
      //   localStorage.setItem("HistoryList", JSON.stringify(list));   //存localStorage
      // }
      // 发送搜索请求
      if (this.type == 1) {
        this.get_serachProductbyName(val);
        console.log("1111111111111111111111111111111111111")
      } else if (this.type == 2) {
        this.get_serachProductbyType(val);
        console.log("2222222222222222222222222222222222222")
     }
    },
    onCancel() {
      // 取消搜索请求
      this.blockshow = 1;
      Toast("取消");
    },
    //获取搜索的商品
    get_serachProductbyName(val) {
      this.$net({
        method: "get",
        url: "/ShopTransaction/search_productInfo",
        params: {
          product_name: val,
        },
      })
        .then((response) => {
          this.$store.commit("changemessage", response.data);
          this.blockshow = 2;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    get_serachProductbyType(val) {
      this.$net({
        method: "get",
        url: "/ShopTransaction/search_product_type",
        params: {
          product_type: val,
        },
      })
        .then((response) => {
          this.$store.commit("changemessage", response.data);
/*           console.log(val+"!!!!!!!!!!!!!!")
 */          this.blockshow = 2;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  components: {
    History,
    SearchProducts,
  },
  beforeMount(){
      if(this.$route.params.type){
        this.type=this.$route.params.type;
        this.searchval=this.$route.params.val;
      }
      if(this.type==1){this.title="以商品名称搜索"}else {this.title="以商品类别搜索"}
  }
};
</script>

<style lang="less" scoped>
body {
  background-color: #eee;
}
</style>
