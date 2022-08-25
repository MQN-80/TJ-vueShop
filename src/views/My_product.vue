<template>
    <div>
        <!-- 商品列表 -->
        <div class="goodlistdiv">
            <h1>
                <label >我的发布</label>
                <a href="#" >首页</a>
            </h1>
            <br>
            <div class="bianju">
            <van-grid :center="false" :border="false" :column-num="2" :gutter="5">
                <van-grid-item v-for="(n,inx) in goodslist" :key=inx>
                <div class="goodsdiv" >
                    <van-image
                    width="100"
                    height="100"
                    src="http://106.12.131.109:8083/avator/E6D28E0A082DACF5E05011AC02007F3A.jpg"
                    />
                </div>
                <div align="center" class="name">{{n.txt}}</div>
                <div align="center" class="price">${{n.price}}</div>
                <div align="center">
                    <van-button plain type="danger" size="small" >
                        <a href="#" class="delete">删除发布</a>
                    </van-button>
                </div>
                </van-grid-item>
            </van-grid>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'My_product',
    data(){
        return{
            goodslist:[
                {
                    // 图片url，目的请求图片链接，到时候可自行更改，商品图片暂时用死图
                    imgurl:require('../assets/user/shop.png'),
                    txt:'商品名称',
                    price:'100',
                },
                {
                    imgurl:require('../assets/user/shop.png'),
                    txt:'商品名称',
                    price:'100',
                },
                {
                    imgurl:require('../assets/user/shop.png'),
                    txt:'商品名称',
                    price:'100',
                },
                {
                    imgurl:require('../assets/user/shop.png'),
                    txt:'商品名称',
                    price:'100',
                },
                {
                    imgurl:require('../assets/user/shop.png'),
                    txt:'商品名称',
                    price:'100',
                },
                {
                    imgurl:require('../assets/user/shop.png'),
                    txt:'商品名称',
                    price:'100',
                },
                {
                    imgurl:require('../assets/user/shop.png'),
                    txt:'商品名称',
                    price:'100',
                },
                {
                    imgurl:require('../assets/user/shop.png'),
                    txt:'商品名称',
                    price:'100',
                },
                {
                    imgurl:require('../assets/user/shop.png'),
                    txt:'商品名称',
                    price:'100',
                }
            ]
        }
    }

}
</script>

<style>
/* 商品列表边距 */
.bianju{
    margin:0 1rem 1rem 1rem;
}
a{
    text-decoration: none;
    color: black;
}
.goodlistdiv{
    clear: both;
    margin: 1rem 0;
}
.goodlistdiv h1{
    display: block;
    clear: both;
    margin: 0 1.5rem;
    height: 2.5rem;
    line-height: 2.5rem;
    text-align: center;
}
.goodlistdiv h1 label{
    font-size: 1.8rem;
    margin: 0 0 0 3.4rem;
}
.goodlistdiv h1 a{
    float: right;
    font-size: 1.8rem;
}
.goodsdiv{
    width: 100%;
    background: #f5f5f5;
    text-align: center;
}
.price{
    color: red;
    margin: 0 0 .3rem;
}
.delete{
    color: red;
}
/* 商品名称 */
.name{
    margin: .3rem;
    font-size: larger;
}

</style>