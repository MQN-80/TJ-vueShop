<template>
<div>
  <van-nav-bar
  title="历史订单"
  left-text="返回"
  left-arrow
  @click-left="goback"
/>
<van-cell-group>
  <div v-for="order in orders" :key="order.productname">
    <van-card
  thumb="https://img01.yzcdn.cn/vant/ipad.jpeg">
   <template #title>
    <span style="font-size:20px">{{order.product_name}}</span>
    <br/><br/>
  </template>
    <template #tags>
    <van-tag plain type="danger">{{order.order_state}}</van-tag>
  </template>
  <template #price>
    <span style="font-size:20px">成交金额：{{order.price}}元</span>
  </template>
  <template #footer>
    <van-button plain type="info">查看订单详情</van-button>
  </template>
  </van-card>
   <van-divider />
</div>
</van-cell-group>
</div>
</template>

<script>
export default {
    data() {
      return {
        orders:[
        ],
        user_orders:this.$ls.get("orders")
        }
    },
  created() {
    this.getdata();
  },
    methods: {
      goback(){
          this.$router.go(-1);//返回上一页
      },
      getdata()
      {
        this.$net({
            method: 'get',
            url: '/ShopTransaction/get_deal_record',
            params: {
              UserID:  this.$ls.get("user_info").user_id
            }
          }).then(res => {
            console.log(res);
            this.orders=res.data;
          })
      }
    }
}
</script>