<template lang="html">
    <ul class="product-list">
      <li v-for="k in this.$store.state.login.message" :key="k.name">
        <router-link :to="{name:'详情页',params: {id: k.id}}">
          <img :src="k.img" alt=""/>
          <div>{{k.name}}</div>
          <div>{{k.price}}元</div>
        </router-link>
      </li>
    </ul>
</template>

<script>
// import store from '@/vuex/store.js'   //vuex
export default {
  data(){
    return{
    }
  },
  // watch:{
  //   'this.$store.state.login.showAll'(newval,oldval)
  //   {
  //     if(newval)
  //       {this.show=newval
  //       console.log(this.show)}
  //   }
  // },
  // created(){
  //   let that = this
  // }
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
