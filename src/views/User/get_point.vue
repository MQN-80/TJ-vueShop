<template>
<div>
  <van-nav-bar
  title="充值积分"
  left-text="返回"
  left-arrow
  @click-left="goback"
  />
  <header class="header">
    <div class="header-info">您目前还有</div>
    <div class="header-point">{{user_point[0].Credits}}</div>
    <div class="header-info">积分</div>
  </header>
  <van-divider />
  <van-field class="title"
  label="输入金额"
  size="large"
  v-model="number"
  rows="1"
  autosize
  type="number"
  maxlength="6"
  show-word-limit
  border
    />
    <center>
  <van-button  type="info" v-on:click="add_point" size="large">充值</van-button></center>
</div>
</template>

<script>
import { Toast } from 'vant';

  export default {
    data() {
      return {
        user_point:this.$ls.get("point"),
        number:0,
        my_credits:[]
        }
    },
    methods: {
      goback(){
          this.$router.go(-1);//返回上一页
      },
      add_point(){
        this.$net({
      method: 'post',
      url: '/ShopCenter/update_credit',
      params:{
        user_id:this.$ls.get("user_info").user_id,
        credits:Number(this.number),
      }
     }).then((response) => {
      console.log('充值');
      console.log(response);
      this.my_credits=[{
        Credits:Number(this.number)+this.user_point[0].Credits,
        user_id:this.$ls.get("user_info").user_id,
      }]
      console.log(this.my_credits);
      this.$ls.set("point",this.my_credits);
     this.$router.go(0)
     }).catch(function(error) {
      alert(error)
     });
      }
    }
}
</script>

<style lang="less" scoped>
  @import '../../assets/fz.less';

  .header {
      width: 100%;
      height: 25vw;
      background: rgb(170, 245, 250);
      background-size: auto 100%;
      padding: 3.2vw 0;
  .header-info {
        margin-left:auto;
        margin-right:auto;
        color: #000000;
        letter-spacing: .5vw;
        text-align: center;
      }
      .header-point{
        font-size:30px;
        margin-left:auto;
        margin-right:auto;
        color: #000000;
        letter-spacing: .5vw;
        text-align: center;
      }
    }
    .title .van-cell__title{
        font-size: 20px;
        font-weight: 700;
    }
</style>