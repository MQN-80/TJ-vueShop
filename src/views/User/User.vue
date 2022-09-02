<template lang="html">

  <div class="car">
    <header class="header">
      <van-image round width="4rem" height="4rem" :src="avator_img" />
      <span>欢迎你！{{user_name}}</span>
    </header>
    <div class="main">
      <router-link class="my-indent" :to="{ name: '信息修改页',query:{id:user_id}}">
        <span class="my-indent-left">查看/修改个人信息</span>
        <div class="my-indent-right">
          <span>个人信息</span>
          <i class="icon-go"></i>
        </div>
      </router-link>

      <section class="my-pay">
        <router-link :to="{ name: '收藏夹页',query:{id:user_id}}">
          <img :src="icon_money" />
          <p>收藏夹</p>
        </router-link>
        <router-link :to="{ name: '订阅店铺页',query:{id:user_id}}">
          <img :src="icon_shop" />
          <p>订阅店铺</p>
        </router-link>
      </section>

      <section class="my-vip">
        <router-link class="my-vip-bottom ho" :to="{ name: '历史订单页',query:{id:user_id}}">
          <img :src="icon_order" />
          <p>
            <span>我的订单</span>
            <i class="icon-go"></i>
          </p>
        </router-link>
        <router-link class="my-vip-top ho" :to="{ name: '权限说明页',query:{id:user_id}}">
          <img :src="icon_vip" />
          <p>
            <span>权限说明</span>
            <i class="icon-go"></i>
          </p>
        </router-link>
        <router-link class="my-vip-top ho" :to="{ name: '积分页',query:{id:user_id}}">
          <img :src="icon_points" />
          <p>
            <span>我的积分</span>
            <i class="icon-go"></i>
          </p>
        </router-link>
        <router-link class="my-vip-top ho" :to="{ name: '商品发布页'}">
          <img :src="icon_add" />
          <p>
            <span>发布商品</span>
            <i class="icon-go"></i>
          </p>
        </router-link>
        <router-link class="my-vip-top ho" :to="{ name: '我的商品页'}">
          <img :src="icon_my_p" />
          <p>
            <span>我的商品</span>
            <i class="icon-go"></i>
          </p>
        </router-link>
        <router-link class="my-vip-top ho" :to="{ name: '店铺页',params:{shop_id:id}}">
          <img :src="icon_my_p" />
          <p>
            <span>店铺按钮</span>
             <i class="icon-go"></i>
          </p>
        </router-link>
        <router-link class="my-vip-top ho" :to="{ name: '地址页'}">
          <img :src="icon_my_p" />
          <p>
            <span>我的收货地址</span>
            <i class="icon-go"></i>
          </p>
        </router-link>
        <van-button size="large" v-on:click="update_data" plain type="info">更新数据</van-button>
      </section>
    </div>
    <v-baseline></v-baseline>
    <v-footer></v-footer>
    <van-button size="large" to="/login" v-on:click="delete_info" plain type="info">退出登录</van-button>
  </div>
</template>

<script>
  // import * as mockData from '@/http/mock.js' //模拟数据
  import pay from'@/assets/user/pay.png'
  import shop from'@/assets/user/shop.png'
  import my_p from'@/assets/user/my_product.png'
  import my_order from'@/assets/user/order.png'
  import my_vip from'@/assets/user/vip.png'
  import my_add from'@/assets/user/add_product.png'
  import my_points from'@/assets/user/my_points.png'
  import Baseline from '@/common/_baseline.vue'
  import Footer from '@/common/_footer.vue'
  import { Toast } from 'mint-ui'
  export default {
    components: {
      'v-baseline': Baseline,
      'v-footer': Footer
    },
    data () {
				return {
          user_id:this.$ls.get("user_info").user_id,
          user_name:this.$ls.get("user_info").user_name,
          id:this.$ls.get("user_info").id,
				 	icon_money:pay,
          icon_shop:shop,
          icon_order:my_order,
          icon_vip:my_vip,
          icon_add:my_add,
          icon_points:my_points,
          icon_my_p:my_p,
          avator_img:"http://106.12.131.109:8083/avator/"+this.$ls.get("user_info").id+".jpg",
				  }
		 }, 
     beforeCreate(){
      this.$net({
      method: 'get',
      url: '/ShopTransaction/get_User_Credits',
      params:{
        UserID:this.$ls.get("user_info").user_id,
      }
     }).then((response) => {
      console.log('积分为');
      console.log(response);
      this.$ls.set("point",response.data);
     }).catch(function(error) {
      alert(error)
     });
     },
    created(){
      if(this.$ls.get("data")==null)
      {
      this.avator_img="http://106.12.131.109:8083/avator/"+this.$ls.get("user_info").id+".jpg";
      console.log(this.user_id);
      //缓存用户数据
      this.$net({
      method: 'get',
      url: '/userCenter/get_user_info',
      params:{
        user_id:this.$ls.get("user_info").user_id,
      }
     }).then((response) => {
      console.log('用户数据为');
      console.log(response);
      this.$ls.set("data",response.data);
     }).catch(function(error) {
      alert(error)
     });
      //缓存历史订单
      this.$ls.set("orders",[]);
      }
  },
  methods:{
  delete_info(){
    Toast('已经退出登录！返回登录页');
    localStorage.removeItem('token');
    this.$ls.remove('user_info');
    this.$ls.remove('data');
    this.$ls.remove('favorites');
    this.$ls.remove('consumption');
    this.$ls.remove('subscribe');
    this.$ls.remove('orders');
    console.log("删除成功");
  },
  update_data(){
    this.avator_img="http://106.12.131.109:8083/avator/"+this.$ls.get("user_info").id+".jpg";
      console.log(this.user_id);
      //缓存用户数据
      this.$net({
      method: 'get',
      url: '/userCenter/get_user_info',
      params:{
        user_id:this.$ls.get("user_info").user_id,
      }
     }).then((response) => {
      console.log('用户数据为');
      console.log(response);
      this.$ls.set("data",response.data);
     }).catch(function(error) {
      alert(error)
     });
      //缓存收藏夹
      this.$net({
      method: 'get',
      url: '/ShopTransaction/search_user_collect',
      params:{
        UserID:this.$ls.get("user_info").user_id,
      }
     }).then((response) => {
      console.log('收藏夹为');
      console.log(response);
      this.$ls.set("favorites",response.data);
     }).catch(function(error) {
      alert(error)
     });
     //缓存积分数据
     this.$net({
      method: 'get',
      url: '/ShopTransaction/get_User_Credits',
      params:{
        UserID:this.$ls.get("user_info").user_id,
      }
     }).then((response) => {
      console.log('积分为');
      console.log(response);
      this.$ls.set("consumption",response.data);
     }).catch(function(error) {
      alert(error)
     })
     //缓存订阅店铺
      this.$net({
      method: 'get',
      url: '/ShopTransaction/search_user_collectShop',
      params:{
        UserID:this.$ls.get("user_info").user_id,
      }
     }).then((response) => {
      console.log('订阅店铺为');
      console.log(response);
      this.$ls.set("subscribe",response.data);
     }).catch(function(error) {
      alert(error)
     })
      //缓存历史订单
      this.$net({
      method: 'get',
      url: '/ShopTransaction/get_credit_record',
      params:{
        UserID:this.$ls.get("user_info").user_id,
      }
     }).then((response) => {
      console.log('积分交易为');
      console.log(response);
      this.$ls.set("consumption",response.data);
      this.user_consumption=this.$ls.get("consumption")
     }).catch(function(error) {
      alert(error)
     })
  }
  }
  }

</script>

<style lang="less" scoped>
  @import '../../assets/fz.less';

  .car {
    width: 100%;
    padding-bottom: 20vw;
    background-color: #F8FCFF;
    .header {
      width: 100%;
      height: 25vw;
      background: url(../../../static/user_page.png) center 0 rgb(119, 244, 253);
      background-size: auto 100%;
      padding: 3.2vw 0;
      display: -webkit-box;
      display: -ms-flexbox;
      display:flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      .header-icon {
        border: .4vw solid #ffffff;
        background-color: @cl;
        margin-left: 4vw;
        -webkit-box-sizing: border-box;
              box-sizing: border-box;
        width: 14vw;
        height: 14vw;
        line-height: 16vw;
        text-align: center;
        border-radius: 50%;
        span {
          .fz(font-size, 54);
          &::before {
            color: #2c2c2c;
          }
        }
      }
      >span {
        margin-left: 3.2vw;
        .fz(font-size, 30);
        color: #3b3b3b;
        letter-spacing: .2vw;
      }
    }
    .main {
      width: 100%;
      .my-indent {
        width: 100%;
        display: block;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        color: #333;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        padding: 0 5vw;
        height: 15vw;
        line-height: 15vw;
        background-color: #fff;
        .bd();
        &:active {
          background-color: rgb(224, 227, 230)
        }

        .my-indent-right {
          span {
            display: inline-block;
            .fz(font-size, 28);
            color: rgba(0, 0, 0, .4);
            position: relative;
          }
          i {
            position: relative;
            top: .8vw;
          }
        }
      }

      .my-pay {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        width: 100%;
        padding: 2vw 0;
        background-color: #fff;
        .bd();

        >a {
          display: block;
          width: 50%;
          color: #999;
          text-align: center;

          >span {
            .fz(font-size, 50);
            margin-top: 2.3vw;
            display: block;
            text-align: center;
          }
          >img{
            width: 10%;
          }
          p {
            padding: 2.3vw 0;
            text-align: center;
          }
        }
      }

      .my-vip{
        width: 100%;
        .mt();
        .bd();
        .bt();
        >a {
          background-color: #fff;
          display: block;
          width: 100%;
          display: -ms-flex;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          height: 15vw;
          -webkit-box-align: center;
              -ms-flex-align: center;
                  align-items: center;
          -webkit-box-pack: justify;
              -ms-flex-pack: justify;
                  justify-content: space-between;
          padding: 0 6vw;
          -webkit-box-sizing: border-box;
                  box-sizing: border-box;
          &:active {
            background-color: rgb(224, 227, 230);
          }
          >div {
            -ms-flex: 2;
            -webkit-box-flex: 2;
                    flex: 2;
                    padding-top: 1.3vw;
          }
          >img{
            width: 7%;
          }

          >p {
            -ms-flex: 10;
            -webkit-box-flex: 10;
                    flex: 10;
            position: relative;

            &:active {
              background-color: rgb(224, 227, 230);
            }

            i {
              position: absolute;
              right: 0;
              top: .4vw;
            }
          }
        }

      }
    }
  }
  .icon-go {
    .fz(font-size, 36);
    &::before {
      color: #aba8a8;
    }
  }
</style>
