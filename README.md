# 技术栈

vue2.0 + vue-router + vuex + axios + mock.js(模拟数据) + ES6 + less

## 简介

vuex + webStorage 实现了购物车功能,axios拦截,配合路由钩子函数实现权限控制、登录、登出功能

## 预览

![](./static/car.gif)   ![](./static/login.gif)


## 经验

1. 事先一定要先想好整个页面组成，怎样去分组件开发，这样在开发阶段会事半功倍

2. 本质上vuex只是一个全局变量,所以刷新路由,state数据会清空,可配合webStorage实现响应式

3. 所有webStorage存储应该通过dispatch操作

4. 只做数据渲染,不做数据修改,不需要用vuex

5. 简单的父子通信不需要用vuex

## 待完成

1. 购物车内编辑(增减商品)

2. 搜索功能


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:1322
npm run dev

# build for production with minification
<<<<<<< HEAD
npm run build
```
=======
npm 运行构建
```

## 须知
目前发现vant组件库与本项目不兼容，项目为vue2.4而npm下载的vant为3版本（如果有成功引入的话麻烦告知一下），导致vant组件库引入失败。
因此推荐使用elementUI组件库，链接为https://element.eleme.cn/#/zh-CN
>>>>>>> 0e97e881fecce2ce8d672d2c17446841243ada9d
