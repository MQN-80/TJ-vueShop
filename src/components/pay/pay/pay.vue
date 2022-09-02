<template lang="html">

  <div class="pay">
    <v-header>
      <h1 slot="title">支付订单</h1>
    </v-header>
      <div class="pay-address" @click='goAddress'>
        <div>
          <p class="main-address-per">收货人:<span>{{this.user_name}}</span></p>
          <p class="main-address-tel">{{this.phone}}</p>
        </div>
        <p>收货地址:<span>{{this.address}}</span></p>
      </div>
    <div class="pay-product">
      <ul v-if="!confirm">
        <li v-for="k in midList">
          <a>
            <img :src="k.imgPath" alt="">
            <div>
              <h2><span style="color:#ee7150"> {{k.size}} - {{k.col}} </span>- {{k.title}} -</h2>
              <p>{{k.price}} 元</p>
            </div>
          </a>
        </li>
      </ul>

    </div>
    <h3 class="pay-allpay">总需要支付 : <i>￥</i><span>{{allpay}}</span></h3>
    <footer class="pay-footer" ontouchstrat="" @click="payConfirm">
      <span>创建订单</span>
    </footer>


  </div>
</template>

<script>
import Util from '../../../util/common'
import Header from '@/common/_header.vue'
import eventBus from '@/views/address/eventBus.js'
import { Toast } from 'vant';
import qs from 'qs'
import {
  MessageBox
} from 'mint-ui';
export default {
  components: {
    'v-header': Header
  },
  data () {
    return {
      confirm: '',
      user_name: '',
      phone: '',
      address: '',
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
  activated() {
    eventBus.$on('selectAddress', (data) => {
      console.info(data);
      this.user_name = data.Name;
      this.phone = data.Phone_number;
      this.address = data.Addr;
    })
  },
  mounted () {
    // 防止页面刷新后数据丢失
    if (this.$store.state.detail.midList == '') {
      this.$store.commit('SET_MIDLIST')
    }
  },

  methods: {
    payConfirm () {
      if (this.midList) { //还未提交了订单,数据还未清空
        MessageBox
          .confirm(
            `确定支付${this.allpay}元`
          )
          .then(action => { //点击成功执行这里的函数
            if (!this.address)
            {
              Toast("请选择地址");
            }
            else {
              console.log(this.$store.state.detail.orderid);
              this.$net({
                method: 'put',
                url: '/ShopTransaction/goods_transaction_primer_plus',
                params: {
                  Trade_id: this.$store.state.detail.orderid
                }
              }).then(res => {
                console.log(res);
                if (res.data == '积分不足') {
                  Toast('积分不足');
                  this.$router.push({ name: '用户页' })
                }

              })

              this.$router.push({ name: '完成页' });
              this.$store.commit('SET_LOADING', true);
              //this.$store.dispatch('cutMidList', this.midList);
              setTimeout(() => {
                this.$store.commit('SET_LOADING', false); //关闭loading
                this.$router.push({
                  name: '完成页',
                  query: {
                    user_name: this.user_name,
                    phone: this.phone,
                    address: this.address,
                  }
                })
              }, 300)
            }
          //修改订单信息
          
          }, function (err) {
            //点击取消执行这里的函数
          });
      } else { //提交了订单,数据清空
        alert('请勿重复提交订单')
      }

    },
    goAddress()
    {
      this.$router.push({
        name: '地址页',
        query: {
          type: 'select'
        }
      });

    }
  }

}
</script>

<style lang="less" scoped>
@import "../../../assets/fz.less";
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
      background-color: #fd729c;
      border-radius: 1.3vw;
      color: #fff;
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
