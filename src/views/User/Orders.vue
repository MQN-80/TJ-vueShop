<template>
<div>
  <van-nav-bar
  title="历史订单"
  left-text="返回"
  right-text="按钮"
  left-arrow
  @click-left="goback"
  @click-right="onClickRight"
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
            {
            product_name:'欧内的手',
            price:123,
            order_state:'已支付',
            order_number:'1919810',
            }
        ],
        }
    },
    methods: {
      goback(){
          this.$router.go(-1);//返回上一页
      } 
    }
}
</script>