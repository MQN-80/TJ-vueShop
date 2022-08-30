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
  <van-cell-group>
  <div v-for="consumption in User__consumption" :key="consumption.time">
    <van-cell title="URL 跳转" size="large" url="">
  <template #title>
    <span>积分变更：{{consumption.number}}</span>
    <van-tag type="danger">标签</van-tag>
  </template>
 <template #label>
   <span>时间：{{consumption.time}}</span>
 </template>
  </van-cell>
  <van-divider />
  </div>
  </van-cell-group>
</div>
</template>

<script>
export default {
    data() {
      return {
        user_point:this.$ls.get("point"),
        user_consumption:this.$ls.get("consumption"),
        User__consumption:[{
            number:-10,
            time:"2022:08:12"
        },
        {
            number:20,
            time:"2022:08:13"
        },{
            number:100,
            time:"2022:08:15"
        }]
        }
    },
    beforeCreate(){
      if(this.$ls.get('consumption')==null)
      {
     //缓存积分数据
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