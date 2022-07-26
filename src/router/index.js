import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);
//按需加载,当渲染其他页面时才加载其组件,并缓存,减少首屏加载时间
const Index = resolve => require(['@/views/Index.vue'], resolve)
const Category = resolve => require(['@/views/Category.vue'], resolve)
const CategoryMain = resolve => require(['@/components/category/main.vue'], resolve)
const Car = resolve => require(['@/views/Car.vue'],resolve)
const User = resolve => require(['@/views/User/User.vue'], resolve)
const Detail = resolve => require(['@/views/Detail.vue'], resolve)
const Search = resolve => require(['@/views/Search.vue'], resolve)
const Pay = resolve => require(['@/components/car/pay/pay.vue'], resolve)
const Login = resolve => require(['@/views/login.vue'], resolve)
const User_data = resolve => require(['@/views/User/User_data.vue'], resolve)
const Subscribe = resolve => require(['@/views/User/Subscribe_shop.vue'], resolve)
const Favorites = resolve => require(['@/views/User/Favorites.vue'], resolve)
const Historical_orders = resolve => require(['@/views/User/Orders.vue'], resolve)
const Authority = resolve => require(['@/views/User/Authority.vue'], resolve)

export default new Router({
  routes: [{
      path: '/',
      name: '首页',
      component: Index
    }, {
      path: '/category',
      name: '分类页',
      redirect: '/category/all',
      component: Category,
      children: [{
        path: '/category/:tab',
        component:CategoryMain
      }]
    }, {
      path: '/car',
      name: '购物车页',
      component: Car
    }, {
      path: '/car/pay',
      name: '支付页',
      component: Pay
    },
    {
      path: '/user',
      name: '用户页',
      component: User,
      meta: {
           requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录才能进入的
       },
    }, {
      path: '/detail',
      name: '详情页',
      component: Detail
    }, {
      path: '/search',
      name: '搜索页',
      component: Search
    },{
      path: '/login',
      name: '登录页',
      component: Login
    },{
      path: '/User/User_data',
      name: '信息修改页',
      component: User_data
    },{
      path: '/User/Historical_orders',
      name: '历史订单页',
      component: Historical_orders
    },{
      path: '/User/Favorites',
      name: '收藏夹页',
      component: Favorites
    },{
      path: '/User/Subscribe',
      name: '订阅店铺页',
      component: Subscribe
    },{
      path: '/User/Authority',
      name: '权限说明页',
      component: Authority
    },
  ]
})
