<template>
  <div>
    <van-nav-bar
    title="用户店铺"
    left-text="返回"
    right-text="首页"
    left-arrow
    @click-left="goback"
    @click-right="onClickRight"
    />
    <div class="background">
        
        <van-row>
            <van-col span="8">
                <div class="backbianju">
                    <van-image
                    round
                    width="4.5rem"
                    height="4.5rem"
                    src="https://img01.yzcdn.cn/vant/cat.jpeg"
                    /><br>
                    <div class="username">
                        {{username}}
                    </div>
                </div>
            </van-col>
            <van-col span="8" offset="8">
                <div>
                    <br><br>
                    <!-- 关注按钮 -->
                    <button   @click="favor"
                            class="my_button" :style="{backgroundColor:bg_color, color: ft_color,}"
                            @mouseenter="change()" @mouseleave="goback()">
                        {{content}}
                    </button>
                </div>
            </van-col>
        </van-row>
        <div class="introduction">
            {{introduction}}
        </div>
        <!-- 分割线 -->
        <van-divider
        :style="{ color: '#00bfff', borderColor: '#00bfff', padding: '0 16px' }"
        >
        <div class="line">
            发布的宝贝
        </div>
        </van-divider>
        <!-- 商品列表 -->
        <div class="bianju">
            <van-grid :center="false" :border="false" :column-num="2" :gutter="5">
                <van-grid-item v-for="(n,inx) in goodslist" :key=inx>
                <div class="goodsdiv" >
                    <!-- 商品跳转链接 -->
                    <a href="#">
                        <van-image
                        width="100"
                        height="100"
                        src="http://106.12.131.109:8083/avator/E6D28E0A082DACF5E05011AC02007F3A.jpg"
                        />
                    </a>
                </div>
                <div align="center" class="goodsname">{{n.txt}}</div>
                <div align="center" class="price">${{n.price}}</div>
                </van-grid-item>
            </van-grid>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "Shop.vue",
        data () {
            return{
                // 关注按钮需要的数据
                liked:false,
                content:'+关注',
                bg_color:"#fef0f0",
                ft_color:"#f56c6c",
                // 关注按钮需要的数据
                username:'用户昵称',
                introduction:'1、欢迎光临本店，本店新开张，诚信经营，只赚信誉不赚钱，谢谢。 2、本店商品均属正品，假一罚十信誉保证。 欢迎广大顾客前来放心选购，我们将竭诚为您服务! 3、本店专门营销什么什么商品，假一罚十信誉保证。 本店的服务宗旨是用心服务，以诚待人!',
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
        },
        // 关注按钮需要的methods
        methods:{
            favor (e) {
                this.liked=!this.liked;
                if(this.liked){
                    this.content="已关注";
                    this.bg_color="#f56c6c";
                    this.ft_color="#fef0f0";
                }

                else{
                    this.content="+关注"
                    this.bg_color="#fef0f0";
                    this.ft_color="#f56c6c";

                }
            },
            change(){
                this.bg_color="#ff9999";
                this.ft_color="#fef0f0";
            },
            goback(){
                if(this.liked){
                    this.bg_color="#f56c6c";
                    this.ft_color="#fef0f0";
                }
                else{
                    this.bg_color="#fef0f0";
                    this.ft_color="#f56c6c";
                }
            }
        }
        // 关注按钮需要的methods

}
</script>

<style>
.background{
height:40px;
background: url(../../static/user_page.png) no-repeat center center;
background-size:100% 100%;
padding-top: 33.3%;
}
.backbianju{
margin: .5rem 0 0 1rem;
}
.username{
    font-size: large;
    font-weight: 550;
    color: black;
}
.introduction{
    margin: .5rem 1.3rem 0 1.3rem;
    font-size: small;
}
.line{
    font-size: medium;
    color: #708090;
    font-weight: 550;
}
/* 关注按钮 */
button{
outline:none;
margin: .5rem;
}

.my_button{
color: #f56c6c;
background: #fef0f0;
border: #fbc4c4 solid;
border-radius: 20px;
padding: 6px 18px;
text-align: center;
font-size: 16px;
font-weight: 550;
}
/* 关注按钮 */
.bianju{
    margin:0 1rem 1rem 1rem;
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
/* 商品名称 */
.goodsname{
    margin: .3rem;
    font-size: larger;
}
.shouyebiaoqian{
    margin:0 0 0 1rem;
    font-size: larger;
    color: black;
    font-weight: 600;
}

</style>