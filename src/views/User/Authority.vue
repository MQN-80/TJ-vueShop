<template>
<div>
  <van-nav-bar
  title="权限说明"
  left-text="返回"
  left-arrow
  @click-left="goback"
/>
      <header class="header">
          <div class="header-info">您当前的权限等级为：</div>
          <div class="header-info">Lv.?</div>
      </header>
  <section class="my-rank">
    <router-link class="rank1" :to="{ name: '权限说明页'}" >
      <p>
        <span>Lv1</span>
        <i >lv1</i>
        </p>
    </router-link>
    <router-link class="rank2" :to="{ name: '权限说明页'}" >
      <p>
        <span>Lv2</span>
        <i >lv2</i>
        </p>
    </router-link>
    <router-link class="rank3" :to="{ name: '权限说明页'}" >
      <p>
        <span>Lv3</span>
        <i >lv3</i>
        </p>
    </router-link>
  </section>
</div>
</template>
<script>
export default {
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
      background: rgb(119, 244, 253);
      background-size: auto 100%;
      padding: 3.2vw 0;
  .header-info {
        margin-left:auto;
        margin-right:auto;
        color: #000000;
        letter-spacing: .5vw;
        text-align: center;
      }
    }
  .my-rank{
        width: 100%;
        >a {
          background-color: #fff;
          display: block;
          width: 100%;
          display: -ms-flex;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          height: 15vw;
          -webkit-box-align: center;
              -ms-flex-align: center;
                  align-items: center;
          -webkit-box-pack: justify;
              -ms-flex-pack: justify;
                  justify-content: space-between;
          padding: 0 6vw;
          -webkit-box-sizing: border-box;
                  box-sizing: border-box;
          &:active {
            background-color: rgb(224, 227, 230);
          }
          >div {
            -ms-flex: 2;
            -webkit-box-flex: 2;
                    flex: 2;
                    padding-top: 1.3vw;
          }
          >p {
            -ms-flex: 10;
            -webkit-box-flex: 10;
                    flex: 10;
            position: relative;

            &:active {
              background-color: rgb(224, 227, 230);
            }

            i {
              position: absolute;
              right: 0;
              top: .4vw;
            }
          }
        }
      }
    .icon-go {
    .fz(font-size, 36);
    &::before {
      color: #aba8a8;
    }
  }
</style>