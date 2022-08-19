<template lang="html">
<div>
    <v-header>
      <h1 slot="title">注册页</h1>
    </v-header>
    <van-divider />
        <section>
      <mt-field
       label="用户昵称"
        placeholder="请输入昵称"
        type = "text"
        v-model = "nickname"
        ></mt-field>
      <mt-field
       label="密码"
       placeholder="请输入密码"
       type="password"
       v-model="password"
        ></mt-field>
    </section>
    <van-divider />
    <mt-button
     plain
     size="large"
     @click="Register"
     >注册</mt-button>
</div>
</template>

<script>
import Header from '@/common/_header.vue'
import { Toast } from 'mint-ui'
export default {
  components:{
    'v-header':Header
  },
  data(){
    return {
      password:'',
      nickname:'',
      datas:{
        token:'',
        user_id:'',
        id:''
      }
    }
  },
  methods:{
    Register(){
        this.$net({
            method:'get',
            url:'/user',
            params:{
                username:this.nickname,
                password:this.password
            }
        }).then((response) => {
            Toast('注册成功,存储token,即将返回登录页');
            console.log(response);
            this.datas.token=response.token;
            this.datas.user_id=response.user_id;
            this.id.token=response.id;
            this.$router.go(-1);
        }).catch(function(error){
            Toast('注册失败！可能为重复用户名或错误输入');
            alert(error)
        })
    }
  }
}

</script>