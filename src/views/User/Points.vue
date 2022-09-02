<template>
<div>
  <van-nav-bar
  title="我的积分"
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
  <div v-if="user_consumption.length>0">
  <van-cell-group>
  <div v-for="consumption in user_consumption" :key="consumption.Create_time">
    <van-cell title="URL 跳转" size="large" url="">
  <template #title>
    <span>积分变更：</span>
    <span v-if="consumption.Status==0">-</span>
    <span>{{consumption.Credits_change}}</span>
    <van-tag type="danger">标签</van-tag>
  </template>
 <template #label>
   <span>时间：{{consumption.Create_time}}</span>
 </template>
  </van-cell>
  <van-divider />
  </div>
  </van-cell-group>
  </div>
  <div v-else>
    <baseline></baseline>
  </div>
</div>
</template>

<script>
import Baseline from '@/common/user_baseline.vue'
  export default {
    components: {
      'baseline': Baseline,
    },
    data() {
      return {
        user_point:this.$ls.get("point"),
        user_consumption:this.$ls.get("consumption"),
        }
    },
    beforeCreate(){
      
     //缓存积分数据
      this.$net({
      method: 'get',
      url: '/ShopTransaction/get_credit_record',
      params:{
        userID:this.$ls.get("user_info").id,
      }
     }).then((response) => {
      console.log('积分交易为');
      console.log(response);
      this.$ls.set("consumption",response.data);
      this.user_consumption=this.$ls.get("consumption")
     }).catch(function(error) {
      alert(error)
     })
      console.log(this.$ls.get("user_info").id)
    },
    methods: {
      goback(){
          this.$router.go(-1);//返回上一页
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
</style>