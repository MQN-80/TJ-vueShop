<template lang="html">
  <div class="login">
    <v-header>
      <h1 slot="title">登录页</h1>
    </v-header>
    <section>
      <mt-field
       label="账号"
        placeholder="请输入账号"
        type = "text"
        v-model = "account"
        :readonly = '!toggle'
        :disableClear = '!toggle'
        ></mt-field>
      <mt-field
       label="密码"
       placeholder="请输入密码"
       type="password"
       v-model="password"
       :readonly='!toggle'
       :disableClear = '!toggle'
        ></mt-field>
      <router-link :to="{ name: '注册页'}" >
          <p class="tip">没有账号？点击此处进行注册</p>
        </router-link>
    </section>
    <mt-button
     plain
     size="large"
     @click="login"
     v-if='toggle'>登录</mt-button>
    <mt-button
     plain
     size="large"
     @click="logout"
     v-else>退出登录</mt-button>

  </div>
</template>

<script>
import Header from '@/common/_header.vue'
import net from '@/http/net.js'       //http请求
import { Toast } from 'mint-ui'
import store from '@/vuex/store.js'
export default {
  components:{
    'v-header':Header
  },
  data(){
    return {
      account:this.$ls.get('user_account'),
      password:'',
      toggle:!this.$store.state.login.token
    }
  },
  methods:{
    // 登录按钮
    login(){
      this.$net({
      method: 'get',
      url: '/user/is_user',
      params:{
        userid:this.account,
        password:this.password
      }
     }).then((response) => {
      console.log(response);
      if(response.data!="no")
      {
        Toast('登录成功,存储token,跳转网页');
        this.toggle = false;
        //this.$store.commit('CHANGE_TOKEN',response.data);   //存储token
        localStorage.setItem('token',response.data.token)
        console.log(localStorage.getItem('token'))
        this.$ls.set("user_account",this.account);
        this.$ls.set("user_info",response.data);
         setTimeout(()=>{
        this.$router.push({
          name:"用户页",
        })
      },1000);
      }
      else
      {
        Toast('账号密码错误');
      }
     }).catch(function(error) {
      alert(error)
     })
    },

    //退出登录按钮
    logout(){
      Toast('退出登录成功,清除token');
      this.$store.commit('CHANGE_TOKEN',0);
      this.toggle = true;
      this.account = '';
      this.password = '';

    }
  }
}

</script>

<style lang="less" scoped>
.login {
  >section {
    .tip {
      padding: 6vw 3vw;
      color:rgb(224, 145, 71);
      letter-spacing: 2px;
      font-size: 16px;
    }
  }
}
</style>
