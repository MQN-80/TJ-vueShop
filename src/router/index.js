import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);
//按需加载,当渲染其他页面时才加载其组件,并缓存,减少首屏加载时间
const Index = resolve => require(['@/views/Index.vue'], resolve)
const Category = resolve => require(['@/views/Category.vue'], resolve)
const Car = resolve => require(['@/views/Car.vue'],resolve)
const User = resolve => require(['@/views/User/User.vue'], resolve)
const Detail = resolve => require(['@/views/Detail.vue'], resolve)
const Search = resolve => require(['@/views/Search.vue'], resolve)
const Pay = resolve => require(['@/components/car/pay/pay.vue'], resolve)
const Login = resolve => require(['@/views/login.vue'], resolve)
const NPay = resolve => require(['@/components/pay/pay/pay.vue'], resolve)
const Complete = resolve => require(['@/components/pay/complete.vue'], resolve)
const Carcomplete = resolve => require(['@/components/car/pay/complete.vue'], resolve)
const User_data = resolve => require(['@/views/User/User_data.vue'], resolve)
const Subscribe = resolve => require(['@/views/User/Subscribe_shop.vue'], resolve)
const Favorites = resolve => require(['@/views/User/Favorites.vue'], resolve)
const Historical_orders = resolve => require(['@/views/User/Orders.vue'], resolve)
const Authority = resolve => require(['@/views/User/Authority.vue'], resolve)
const Points = resolve => require(['@/views/User/Points.vue'], resolve)
const Register = resolve => require(['@/views/Register.vue'], resolve)
const Add_product = resolve => require(['@/views/Add_product.vue'], resolve)
const Forum = resolve => require(['@/views/forum/Forum.vue'], resolve)
const CArticle = resolve => require(['@/views/forum/Create_article.vue'], resolve)
const Article =resolve => require(['@/views/forum/Article.vue'], resolve)
const Shop = resolve => require(['@/views/Shop.vue'], resolve)
const address = resolve => require(['@/views/address/address.vue'], resolve)
const addaddress = resolve => require(['@/views/address/address_add.vue'], resolve)
const editaddress = resolve => require(['@/views/address/address_edit.vue'], resolve)
const CArticleSearch = resolve => require(['@/views/SearchForForum.vue'], resolve)
const My_product = resolve => require(['@/views/My_product.vue'], resolve)

export default new Router({
  routes: [{
      path: '/',
      name: '首页',
      component: Index,
      meta: {
        keepAlive: false
    },
    }, {
      path: '/category',
      name: '分类页',
      component: Category,
      meta: {
        keepAlive: false
    },
    }, {
      path: '/car',
      name: '购物车页',
      component: Car,
      meta: {
        keepAlive: false
    },
    }, {
      path: '/car/pay',
      name: '支付页',
      component: Pay,
      meta: {
        keepAlive: true
    },
    },
    {
      path: '/User',
      name: '用户页',
      component: User,
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录才能进入的
        keepAlive: false
    },
    },
    {
      path: '/forum',
      name: '论坛页',
      component: Forum,
      meta: {
        keepAlive: false
    },
    },{
      path: '/Carticle',
      name: '发贴页',
      component: CArticle,     
      meta: {
        keepAlive: false
    },
    },{
      path: '/detail',
      name: '详情页',
      component: Detail,
      meta: {
        keepAlive: false
    },
    }, {
      path: '/Search',
      name: '搜索页',
      component: Search,
      meta: {
        keepAlive: false
    },
    },{
      path: '/login',
      name: '登录页',
      component: Login,
      meta: {
        keepAlive: false
    },
    },{
      path: '/User/User_data',
      name: '信息修改页',
      component: User_data,
      meta: {
        keepAlive: false
    },
    },
    {
      path: '/pay/pay',
      name: '现付页',
      component: NPay,
      meta: {
        keepAlive: true
    },
    },
    {
      path: '/pay/complete',
      name: '完成页',
      component: Complete,
      meta: {
        keepAlive: false
    },
    },
    {
      path: '/car/complete',
      name: '车结页',
      component: Carcomplete,
      meta: {
        keepAlive: false
    },
    },
    {
      path: '/User/Historical_orders',
      name: '历史订单页',
      component: Historical_orders,
      meta: {
        keepAlive: false
    },
    },{
      path: '/User/Favorites',
      name: '收藏夹页',
      component: Favorites,
      meta: {
        keepAlive: false
    },
    },{
      path: '/User/Subscribe',
      name: '订阅店铺页',
      component: Subscribe,
      meta: {
        keepAlive: false
    },
    },{
      path: '/User/Authority',
      name: '权限说明页',
      component: Authority,
      meta: {
        keepAlive: false
    },
    },{
      path: '/User/Points',
      name: '积分页',
      component: Points,
      meta: {
        keepAlive: false
    },
    },{
      path: '/login/Register',
      name: '注册页',
      component: Register,
      meta: {
        keepAlive: false
    },
    },{
      path: '/User/Add_product',
      name: '商品发布页',
      component: Add_product,
      meta: {
        keepAlive: false
    },
    },{
      path:'/forum/Article',
      name: '文章页',
      component:Article,
      meta: {
        keepAlive: false
    },
    },{
      path: '/User/Shop',
      name: '店铺页',
      component: Shop,
      meta: {
        keepAlive: false
    },
    },,{
      path: '/User/address',
      name: '地址页',
      component: address,
      meta: {
        keepAlive: false
    },
    },{
      path: '/User/address/address-add',
      name: '地址添加页',
      component: addaddress,
      meta: {
        keepAlive: false
    },
    },{
      path: '/User/address/address-edit',
      name: '地址修改页',
      component: editaddress,
      meta: {
        keepAlive: false
    },
    },{
      path:'/forum/search',
      name:'推荐商品搜索页',
      component: CArticleSearch,
      meta: {
        keepAlive: false
    },
  },{
    path: '/User/My_product',
    name: '我的商品页',
    component: My_product,
    meta: {
      keepAlive: false
  },
  },  
]
})
