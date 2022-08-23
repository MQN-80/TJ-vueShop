import axios from 'axios'
const pic = axios.create();
pic.defaults.baseURL = 'http://106.12.131.109:8083';
pic.defaults.timeout = 5000;
/** 
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
*/
export default pic