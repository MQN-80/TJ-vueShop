<template>
<div>
  <van-nav-bar
  title="权限说明"
  left-text="返回"
  left-arrow
  @click-left="goback"
/>
      <header class="header">
          <div class="header-info">您当前的身份为：</div>
          <div class="header-rank">{{role}}</div>
      </header>
  <section class="my-rank">
    <router-link class="rank1" :to="{ name: '权限说明页'}">
      <p>
        <span>普通用户</span>
        <i >啥也干不了</i>
        </p>
    </router-link>
    <router-link class="rank3" :to="{ name: '权限说明页'}" >
      <p>
        <span>管理员</span>
        <i >啥都能干</i>
        </p>
    </router-link>
  </section>
</div>
</template>
<script>
export default {
  data(){
    return{
      role:'系统未查到！',
    }
  },
  methods: {
      goback(){
          this.$router.go(-1);//返回上一页
      },
    },
    created(){
      this.$net({
      method: 'get',
      url: '/userCenter/get_user_role_rank',
      params:{
        user_id:this.$ls.get("user_info").user_id,
      }
     }).then((response) => {
      console.log(response);
      if(response.data.RoleRank==1)
      this.role="普通用户";
      else
      this.role="管理员";
      console.log(this.role);
     }).catch(function(error) {
      alert(error)
     });
      }
}
</script>
<style lang="less" scoped>
  @import '../../assets/fz.less';

  .header {
      width: 100%;
      height: 25vw;
      background: rgb(255, 255, 255);
      background-size: auto 100%;
      padding: 3.2vw 0;
  .header-info {
        margin-left:auto;
        margin-right:auto;
        color: #000000;
        letter-spacing: .5vw;
        text-align: center;
      }
  .header-rank{
    font-size:30px;
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