import axios from 'axios'
import store from '@/vuex/store.js'
import router from '../router'

const net = axios.create();
net.defaults.baseURL = 'http://124.222.1.19:5000';
net.defaults.timeout = 5000;
  
net.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  // 如果有token,添加到请求报文 后台会根据该报文返回status
  let token=localStorage.getItem('token')
  console.log(token)
  if(token) {
    config.headers.Authorization = "Bearer"+" "+token;     
  }

  return config;

}, function (error) {
  // 对请求错误做些什么
  alert('网络错误,请稍后再试');
});
/** 
net.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
net.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest'

// 请求拦截
net.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    store.commit('SET_LOADING',true);
    // 如果有token,添加到请求报文 后台会根据该报文返回status
    if(store.state.login.token) {
      config.headers.Authorization = `token ${store.state.login.token}`;
    }

    return config;

  }, function (error) {
    // 对请求错误做些什么
    alert('网络错误,请稍后再试');

    store.commit('SET_LOADING',false);

    return Promise.reject(error);
  });

// 添加响应拦截器
net.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    // 加到时器主要是为了 展示Loading效果 项目中应去除
    setTimeout(()=>{
      store.commit('SET_LOADING',false);
    },300)

    return response;

  }, function (error) {
    // 对响应错误做点什么
    store.commit('SET_LOADING',false);

    if(errore.response) {

      if(error.response.status== 401) {
          // 如果返回401 即没有权限，跳到登录页重新登录
        store.commit('CHANGE_TOKEN',0);

        alert('请重新登录');

        router.replace({
          path: 'login',
          query: {redirect: router.currentRoute.fullPath}
        })

      }
    }

    return Promise.reject(error);
  });
  */
export default net
