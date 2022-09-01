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
          <!-- input表示输入框发生变化 -->
        </form>
        <!-- 调用商品内容组件 -->
        <div v-if="blockshow==2">
            <van-dropdown-menu>
                <van-dropdown-item v-model="value1" :options="option1"/>
                <van-dropdown-item v-model="value2" :options="option2"
                @change="priceSort"/>
            </van-dropdown-menu>
            <ul class="product-list">
            <li v-for="k in this.$store.state.login.message" :key="k.name">
                <div @click="gobackID(k.id)">
                <img :src="k.img" alt=""/>
                <div>{{k.name}}</div>
                <div>{{k.price}}元</div>
                </div>
            </li>
            </ul>
         </div>        
      </div>
  </body>
</template>

<script>
import { Toast } from "vant";

export default {
  data() {
    return {
      //搜索的文字，由用户输入
      searchval: "",

      //为2表示展示搜索内容
      blockshow: 1,

      value1: 0,
      value2: "default",
      option1: [{ text: "全部商品", value: 0 }],
      option2: [
        { text: "默认排序", value: "default" },
        { text: "价格升序", value: "desc" },
        { text: "价格降序", value: "asc" },
      ],
    };
  },

  methods: {
    onSearch(val) {
      this.get_serachProduct(val);
    },
    onCancel() {
      // 取消搜索请求
      this.blockshow = 1;
      Toast("取消");
    },
    //获取搜索的商品
    get_serachProduct(val) {
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
    priceSort() {
      if (this.value2 == "desc") {
        this.$store.state.login.message.sort((a, b) => {
          return a.price - b.price;
        });
      } else if (this.value2 == "asc") {
        this.$store.state.login.message.sort((a, b) => {
          return b.price - a.price;
        });
      }
    },
    gobackID(id) {
        this.$store.commit('setCreategoods',id);
        console.log(id)
        this.$router.go(-1);
    },
  },
};
</script>

<style lang="less" scoped>
.body {
  background-color: #eee;
}
.product-list {
  display: -ms-flex;
  display: -webkit-box;
  display: -ms-flexbox;

  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -ms-flex-pack: distribute;
  justify-content: space-around;
  display: flex;
  padding: 0vw 0vw 0vw 0vw;

  li {
    float: left;
    width: 50%;
    padding: 0.5vw 1vw 1vw 0.5vw;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    div {
      text-align: center;
    }
    a,
    img {
      height: 88%;
      width: 100%;
      display: block;
    }
  }
}
</style>
