<template lang="html">
    <ul class="product-list">
      <li v-for="k in product" :key="k.name" :v-show="!(k.discount==1) || showAll">
        <router-link :to="{name:'详情页',params: {id: k.id}}">
          <img :src="k.img" alt=""/>
          <div>{{k.name}}</div>
          <div>{{k.price}}元</div>
        </router-link>
      </li>
    </ul>
</template>

<script>

export default {
data(){
return{
  showAll:1,
  product:[],
}
},
props:["productInfo"],
mounted() {
    this.product=this.productInfo;
  },
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
      padding: .5vw 1vw 1vw .5vw;
       -webkit-box-sizing: border-box;
      box-sizing: border-box;
      div{
        text-align: center;
      }
      a, img {
        height:88%;
        width: 100%;
        display:block;
      }
    }
  }
</style>
