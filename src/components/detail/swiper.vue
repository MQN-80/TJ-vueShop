<template lang="html">
    <div class="swiper">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="k in swiper" :key="k.id">
           <img :src="k.imgSrc">
        </mt-swipe-item>
      </mt-swipe>
      <div class="back" @click="go_back">
        <span class="icon-go"></span>
      </div>
    </div>

</template>

<script>
export default {
  props:["message"],
  data(){
    return{
      swiper:[{
        imgSrc:'',
      }],
    }
  },
  created(){
  if(this.message!=undefined)
  {
    this.swiper[0].imgSrc="http://106.12.131.109:8083/product/" +this.message+".jpg";
    this.$store.commit('change_pic',this.swiper[0].imgSrc)
  }
  //缓存图像地址
  else
  this.swiper[0].imgSrc=this.$store.state.category.product_pic;
  
  },
  methods:{
    go_back(){
    //清除缓存,防止影响下次
    var mid=[];
    var mid1=''
    this.$store.commit('change_product',mid)
    this.$store.commit('change_pic',mid1)
    this.$store.commit('change_shopuser',mid)
    this.$router.go(-1);
    }
  }
}
</script>

<style lang="less" scoped>
@import "../../assets/fz.less";
@import "../../assets/index/style.css";

.swiper {
  width: 100%;
  position: relative;

  .mint-swipe {
    width: 100%;
    height: 100vw;
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }

  .back {
    width: 7vw;
    height: 7vw;
    position: absolute;
    left: 4vw;
    top: 2vw;
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 50%;
    text-align: center;
    span {
      display: inline-block;
      line-height: 7vw;
      .fz(font-size,40);
      transform: rotate(-180deg);
      &::before {
        color: #fff;
      }
    }

    &:active {
      transform: scale(1.3);
    }
  }
}
</style>
