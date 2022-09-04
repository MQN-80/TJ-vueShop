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
    <van-swipe-cell>
    <van-card
  :thumb="order.img" @click='gopay(order)'>
   <template #title>
    <span style="font-size:10px">{{order.id}}</span>
    <br/><br/>
  </template>
    <template #tags>
    <van-tag plain type="danger">{{order.Start_time}}</van-tag>
    <div v-if="order.Status=='0'">
      <van-tag type="warning">未支付</van-tag>
     
    </div>
    <div v-if="order.Status=='1'">
      <van-tag type="success">已支付</van-tag>
    </div>
  </template>
  <template #price>
    <span style="font-size:20px">成交金额：{{order.Ord_price}}元</span>
  </template>
  </van-card>
  <template #right  v-if="order.Status=='0'">
    <van-button square text="删除" type="danger" class="delete-button" @click="delete1(order.id)" />
  </template>
  </van-swipe-cell>
   <van-divider />
</div>
</van-cell-group>
</div>
</template>

<script>
import { Tag, Toast } from "vant";
export default {
  components: {
    vanTag: Tag,
  },
    data() {
      return {
        orders:[
        ],
       
        
        }
    },
  created() {
    this.getdata();
  },
    methods: {
      delete1(id){
      console.log("dasd")
      this.$net({
      method: 'delete',
      url: '/ShopCenter/delete_order',
      params: {
        id:id,
      }
      }).then((response)=>{
        Toast("删除成功")
      }).catch((err)=>{
        Toast("网络错误")
      })
      this.$router.go(0)
      },
      goback(){
          this.$router.go(-1);//返回上一页
      },
      getimg(order)
      {
        return 'http://106.12.131.109:8083/product/' + order.Product_id + '.jpg'
      },
      getdata()
      {
        console.log(this.$ls.get("user_info").user_id);
        this.$net({
            method: 'get',
            url: '/ShopTransaction/get_deal_record',
            params: {
              UserID:  this.$ls.get("user_info").user_id
            }
          }).then(res => {
            console.log(res);
            this.orders=res.data;
            this.orders.forEach(element => {
              element.img='http://106.12.131.109:8083/product/' + element.Product_id + '.jpg'
            });
          })
      },
      gopay(order)
      {
        const s_product = [{
          title: order.Product_name,
          price: order.Ord_price,
          id: order.Product_id,
          imgPath: 'http://106.12.131.109:8083/product/' + order.Product_id + '.jpg',
          choseBool: false
        }];
        console.log(s_product);
        if (order.Status == '0') {
     
          this.$store.dispatch('resetMidList');
          this.$store.dispatch('resetOrderID');
          this.$store.dispatch('addMidList', s_product);
          this.$store.dispatch('transOrderID', order.id);
          this.$router.push({ name: '现付页' });
        }
        else
        {

        }
      }
    }
}
</script>
<style>
.delete-button{
    height: 100%;
  }
</style>