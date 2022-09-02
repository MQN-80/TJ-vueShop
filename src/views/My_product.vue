<template>
  <div>
    <!-- 商品列表 -->
    <div class="goodlistdiv">
      <van-nav-bar
        title="我的商品"
        left-text="返回"
        left-arrow
        @click-left="goback"
      />
      <br />
      <div class="bianju">
        <van-grid :center="false" :border="false" :column-num="2" :gutter="5">
          <van-grid-item v-for="(n, inx) in goodslist" :key="inx">
            <div class="goodsdiv">
              <!-- 商品跳转链接 -->
              <router-link :to="{ name: '详情页', params: { id: n.id } }">
                <van-image width="100" height="100" :src="n.img" />
              </router-link>
            </div>
            <div align="center" class="goodsname">{{ n.name }}</div>
            <div align="center" class="price">${{ n.price }}</div>
            <div align="center">
              <van-button plain type="danger" size="small" @click="delete_product(n.id)">
                <a href="#" class="delete">删除发布</a>
              </van-button>
            </div>
          </van-grid-item>
        </van-grid>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant';
export default {
  name: "My_product",
  data() {
    return {
      goodslist: [],
      shop_id:'',
    };
  },
  methods: {
    goback() {//////////////不太一样！！！！！！！！！！！！！！！！！！！！！！！！
      
      this.$router.go(-1); //返回上一页
    },
    get_productList(shop_id) {
      this.$net({
        method: "get",
        url: "/ShopCenter/get_shop_product",
        params: {
          shopUserId: shop_id,
        },
      }).then((response) => {
        console.log(response);
        response.data.forEach((element) => {
          console.log(element);
          var mid = {
            img: "",
            price: "",
            id: "",
            name: "",
          };
          mid.img = "http://106.12.131.109:8083/product/" + element.id + ".jpg";
          mid.price = element.price;
          mid.id = element.id;
          mid.name = element.name;
          this.goodslist.push(mid);
        });
      });
    },
    delete_product(id){
    this.$net({
        method: "delete",
        url: "/ShopCenter/delete_product",
        params: {
          productId:id,
          shopUserId:this.shop_id,
        },
      }).then((response)=>{
      Toast("删除成功")
      this.$router.go(0)
      }).catch((err)=>{
        Toast("网格错误")
      })
    },
  },
  created() {
      this.shop_id=this.$ls.get("user_info").id
      this.get_productList(this.$ls.get("user_info").id);
  }
};
</script>

<style>
/* 商品列表边距 */
.bianju {
  margin: 0 1rem 1rem 1rem;
}
a {
  text-decoration: none;
  color: black;
}
.goodlistdiv {
  clear: both;
  margin: 1rem 0;
}
.goodsdiv {
  width: 100%;
  background: #f5f5f5;
  text-align: center;
}
.price {
  color: red;
  margin: 0 0 0.3rem;
}
.delete {
  color: red;
}
/* 商品名称 */
.name {
  margin: 0.3rem;
  font-size: larger;
}
</style>