<template lang="html">

  <div class="pay">
    <van-nav-bar title="订单详情"/>

    <div class="pay-address">
        <div>
          <p class="main-address-per">收货人:<span>{{this.$route.query.user_name}}</span></p>
          <p class="main-address-tel">{{this.$route.query.phone}}</p>
        </div>
        <p>收货地址:<span>{{this.$route.query.address}}</span></p>
      </div>

    <div class="pay-product">
        <li v-for="k in midList">
          <a>
            <img :src="k.imgPath" alt="">
            <div>
              <h2><span style="color:#ee7150"> {{k.size}} - {{k.col}} </span>- {{k.title}} -</h2>
              <p>{{k.price}} 元</p>
            </div>
          </a>
        </li>

    </div>
    <h3 class="pay-allpay">共计 : <i>￥</i><span>{{allpay}}</span></h3>
    <footer class="pay-footer" ontouchstrat="" @click="payConfirm">
      <span>完成订单</span>
    </footer>


  </div>
</template>

<script>
import Util from '@/util/common'
import Header from '@/common/_header.vue'
import {
  MessageBox
} from 'mint-ui';
export default {
  components: {
    'v-header': Header
  },
  data () {
    console.log(this.$route.query);
    return {
      confirm: '',
      
    }
  },

  computed: {
 //所有商品列表
    midList () {

      return this.$store.state.detail.midList
    },

    // 商品价格总和
    allpay () {
      let allpay = 0, selectedList = this.midList
      for (let i = 0; i < selectedList.length; i++) {
        allpay += parseInt(selectedList[i].price)
      }
      return allpay
    }
  },
  mounted () {
    // 防止页面刷新后数据丢失
    if (this.$store.state.detail.midList == '') {
      //this.$store.commit('SET_MIDLIST')
    }
  },
  methods: {
    payConfirm () {
      this.$store.dispatch('resetMidList');
      this.$router.push({ name: '首页' });
    }
  }

}
</script>
<style lang="less" scoped>
@import "../../assets/fz.less";
.pay {
  width: 100%;
  background-color: #f7f7f7;

  .pay-address {
    background-color: #fff;
    border-bottom: 1 * 10vw/75 solid #dedede;
    padding: 30 * 10vw/75;

    > div {
      display: -webkit-flex;
      display: -ms-flex;
      display: flex;
      justify-content: space-between;

      p {
        color: #868686;
        .fz(font-size,32px);
      }
    }

    > p {
      .fz(font-size,28px);
      color: #868686;
      padding-top: 30 * 10vw/75;
      letter-spacing: 3 * 10vw/75;
      line-height: 45 * 10vw/75;
    }
  }
  .pay-product {
    background-color: #fff;
    height: 60vw;
    overflow: auto;

    li {
      a {
        display: -webkit-flex;
        display: -ms-flex;
        display: flex;
        box-sizing: border-box;
        padding: 20 * 10vw/75 30 * 10vw/75;
        color: #4d4d4d;
        .fz(font-size,30px);
        border-bottom: 1 * 10vw/75 solid #dedede;

        > img {
          display: block;
          width: 2.5 * 10vw;
          height: 2.5 * 10vw;
        }

        > div {
          box-sizing: border-box;
          padding-left: 50 * 10vw/75;
          width: 70%;
          h2 {
            padding-top: 0.09 * 10vw;
            overflow: hidden;
            word-break: keep-all;
            white-space: nowrap;
            text-overflow: ellipsis;
          }

          p {
            text-align: right;
            .fz(font-size,24px);
            padding-top: 1.4 * 10vw;
          }
        }
      }
    }
  }

  .pay-allpay {
    text-align: right;
    margin-top: 6vw;
    padding: 4vw 5vw;
    .fz(font-size,32px);
    color: #999999;
    background-color: #fff;
    i,
    span {
      color: rgb(246, 34, 34);
    }
  }

  .pay-footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding-bottom: 4vw;
    span {
      display: block;
      width: 85%;
      background-color: #fd7272;
      border-radius: 1.3vw;
      color: rgb(0, 0, 0);
      font-size: 17px;
      padding: 4vw;
      margin: 0 auto;
      text-align: center;
      &:active {
        background-color: rgb(246, 34, 34);
      }
    }
  }

  .pay-confirm {
    padding: 20px 0;
    background-color: rgb(246, 34, 34);
    text-align: center;
    color: #fff;
    line-height: 30px;
    .fz(font-size,40);
  }
}
</style>
