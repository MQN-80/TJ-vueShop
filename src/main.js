import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import store from '@/vuex/store.js'   //vuex
import api from '@/http/api.js'       //http请求
import less from 'less'
import Mint from 'mint-ui';    //移动端UI
import 'mint-ui/lib/style.css'
import Vant from 'vant';
import 'vant/lib/index.css';//引入Vant组件库
import Storage from 'vue-ls'

// vue-ls 的配置
const storageOptions = {
    namespace: 'vue_',   // key 键的前缀（随便起）
  	name: 'ls',          // 变量名称（随便起） 使用方式：Vue.变量名称 或 this.$变量名称
  	storage: 'local'     // 作用范围：local、session、memory
}

Vue.use(Storage, storageOptions)


Vue.use(Vant);
Vue.use(Mint);
Vue.config.productionTip = false
Vue.prototype.$api = api;


// 用钩子函数beforeEach()对路由进行判断

router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {  // 需要权限,进一步进行判断
      if (store.state.login.token) {  // 通过vuex state获取当前的token是否存在
        next();
      }
      else {    //如果没有权限,重定向到登录页,进行登录
        next({
          path: '/login',
          // query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
        })
      }
    }
    else { //不需要权限 直接跳转
      next();
    }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  render:h=>h(App),
  router,
  store,
  template: '<App/>',
  components: { App }
})
