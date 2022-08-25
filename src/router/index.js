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
const My_product = resolve => require(['@/views/My_product.vue'], resolve)
const Forum = resolve => require(['@/views/forum/Forum.vue'], resolve)
const CArticle = resolve => require(['@/views/forum/Create_article.vue'], resolve)
const Article =resolve => require(['@/views/forum/Article.vue'], resolve)

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
      path: '/User',
      name: '用户页',
      component: User,
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录才能进入的
    },
    },
    {
      path: '/forum',
      name: '论坛页',
      component: Forum,
    },{
      path: '/Carticle',
      name: '发贴页',
      component: CArticle,
    },{
      path: '/detail',
      name: '详情页',
      component: Detail
    }, {
      path: '/Search',
      name: '搜索页',
      component: Search,
    },{
      path: '/login',
      name: '登录页',
      component: Login
    },{
      path: '/User/User_data',
      name: '信息修改页',
      component: User_data
    },
    {
      path: '/pay/pay',
      name: '现付页',
      component: NPay
    },
    {
      path: '/pay/complete',
      name: '完成页',
      component: Complete
    },
    {
      path: '/car/complete',
      name: '车结页',
      component: Carcomplete
    },
    {
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
    },{
      path: '/User/Points',
      name: '积分页',
      component: Points
    },{
      path: '/login/Register',
      name: '注册页',
      component: Register
    },{
      path: '/User/Add_product',
      name: '商品发布页',
      component: Add_product
    },{
      path: '/User/My_product',
      name: '我的商品页',
      component: My_product
    },{
      path:'/forum/Article',
      name: '文章页',
      component:Article,
    }
  ]
})
