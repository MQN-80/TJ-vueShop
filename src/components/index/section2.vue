<template>
  <section class="section2">
    <div class="section2-list">
      <ul>
        <li v-for="k in list2" :key="k.id">
         <router-link :to="{name:'详情页',params:{id:k.id}}">
            <img v-lazy="k.imgPath">
          </router-link>
          <h2 class="section2-list-title ac">
            {{k.title}}
          </h2>
          <p class="section2-list-intro">
            {{k.intro}}
          </p>
          <p class="section2-list-price">
            ￥{{k.price}}
          </p>
        </li>
      </ul>
    </div>
    <router-link class="section2-banner" :to="{name:'详情页'}">
    </router-link>
     <h1 class="section2-title">
      活动商品推荐
      <i class="icon-right"></i>
    </h1>
  </section>
</template>

<script>
import { Lazyload } from 'mint-ui';

export default {
  props: {
    banner: {
      type: String,
      default: ''
    },
  },
  data(){
  return{
    list2:[],
  }
  },
  beforeMount(){
  this.$net({
      method: 'get',
      url: '/MallPage/get4shopProduct',
  }).then(response=>{
    console.log(response);
    this.list2=response.data;
  }).catch(error=>{
    console.log(error);
  })
  },
}
</script>

<style lang="less" scoped>
@import "../../assets/fz.less";
@import "../../assets/index/style.css";
.section2-list {
  overflow-x: auto;
  width: 100%;
  .pt();
  /*原生滑动*/
  -webkit-overflow-scrolling: touch;
  > ul {
    .bt();
    display: -ms-flex;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: 6vw;
    width: 380%;
    li {
      margin-right: 10vw;
      width: 26vw;
      a,
      img {
        display: block;
        width: 100%;
      }

      h2,
      p {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      h2 {
        .fz(font-size, 32);
        padding-top: 3vw;
        color: #333;
      }

      p.section2-list-intro {
        padding-top: 2vw;
        .fz(font-size, 26);
        color: rgb(150, 150, 150);
      }

      p.section2-list-price {
        color: #b4282d;
      }
    }
  }
}

.section2-title {
    .bt();
    background-color: #ffffff;
    text-align: center;
    padding: 4vw 0;
    .fz(font-size, 40);
    color: #333;
    position: relative;

    i {
      position: absolute;
      right: 6vw;
      top: 50%;
      .fz(font-size, 36);
      .fz(margin-top,-16);

      &::before {
        color: rgb(159, 159, 159);
      }
    }
  }
</style>
