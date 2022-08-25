<template>
  <header>
    <router-link :to="{name:'首页'}" class="icon-go">
      <i class="icon-go"></i>
    </router-link>
    <slot name="title"></slot>
  </header>
</template>


<style lang="less" scoped>
@import '../assets/fz.less';
@import '../assets/index/style.css';
header {
  background-color: #F8FCFF;
  text-align: center;
  position: relative;
  height: 12vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4vw;
  h1 {
    .fz(font-size,34);
    letter-spacing: .2vw;
    font-weight: 600;
    margin-right: 36vw;
  }
  span,a {
    display: inline-block;
    .fz(font-size,46);
    transform: rotate(-180deg);
    &::before {
      color:#333;
    }
  }
}


</style>


<script>
export default {

}
</script>
