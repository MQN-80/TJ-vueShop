<template lang="html">
    <ul class="product-list">
      <li>
        <router-link :to="{name:'详情页'}">
          <img src="./1.jpg" alt=""/>
          <div>产品名称</div>
          <div> 99元</div>
        </router-link>
      </li>
      <li>
        <router-link :to="{name:'详情页'}">
          <img src="./1.jpg" alt=""/>
          <div>产品名称</div>
          <div> 99元</div>
        </router-link>
      </li>
      <li>
        <router-link :to="{name:'详情页'}">
          <img src="./1.jpg" alt=""/>
          <div>产品名称</div>
          <div> 99元</div>
        </router-link>
      </li>
      <li>
        <router-link :to="{name:'详情页'}">
          <img src="./1.jpg" alt=""/>
          <div>产品名称</div>
          <div> 99元</div>
        </router-link>
      </li>
    </ul>
</template>

<script>
import { Lazyload } from 'mint-ui';

export default {
  
}

</script>

<style lang="less" scoped>
  .product-list {
    display: -ms-flex;
    display: -webkit-box;
    display: -ms-flexbox;
   
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    display: flex;
    padding: 0vw 0vw 0vw 0vw;
    
    li {
      float:left;
      width: 50%;
      padding: .5vw .5vw .5vw 1vw;
       -webkit-box-sizing: border-box;
      box-sizing: border-box;
      div{
        text-align: center;
      }
      a, img {
        height:90%;
        width: 100%;
        display:block;
      }
    }
  }
</style>
