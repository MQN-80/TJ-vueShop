<template>
  <div>
    <van-nav-bar
    title="用户店铺"
    left-text="返回"
    left-arrow
    @click-left="goback"
    />
    <div class="background">
        
        <van-row>
            <van-col span="8">
                <div class="backbianju">
                    <van-image
                    round
                    width="4.5rem"
                    height="4.5rem"
                    :src="avator_img"
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
                     <router-link :to="{name:'详情页',params:{id:n.id}}">
                     <van-image
                        width="100"
                        height="100"
                        :src="n.img"
                        />
                      </router-link>
                </div>
                <div align="center" class="goodsname">{{n.name}}</div>
                <div align="center" class="price">${{n.price}}</div>
                </van-grid-item>
            </van-grid>
        </div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant';
export default {
    name: "Shop.vue",
        data () {
            return{
                // 关注按钮需要的数据
                liked:false,
                content:'+关注',
                bg_color:"#fef0f0",
                ft_color:"#f56c6c",
                avator_img:'',
                shop_id:'', //这里是string的id
                // 关注按钮需要的数据
                username:'用户昵称',
                introduction:'1、欢迎光临本店，本店新开张，诚信经营，只赚信誉不赚钱，谢谢。 2、本店商品均属正品，假一罚十信誉保证。 欢迎广大顾客前来放心选购，我们将竭诚为您服务! 3、本店专门营销什么什么商品，假一罚十信誉保证。 本店的服务宗旨是用心服务，以诚待人!',
                goodslist:[],
                shop_list:this.$ls.get("subscribe"),
                new_shop:[]
            }
        },
        // 关注按钮需要的methods
        created(){
        if(this.$route.params.shop_id!=undefined)
        {
            this.$store.commit('change_shopid',this.$route.params.shop_id)
            this.shop_id=this.$route.params.shop_id;
            this.get_shopinfo(this.shop_id);
        }
        else
        {
            this.shop_id=this.$store.state.category.shop_id
            this.get_shopinfo(this.shop_id);
        }
        //this.get_productList(this.shop_id)
        },
        methods:{
            get_shopinfo(shop_id){
            this.$net({
            method: 'get',
            url: '/ShopCenter/get_shop_info',
            params:{
               shopUserId:this.shop_id,
            }
            }).then((response)=>{
                console.log(response);
                this.username=response.data[0].userName;
                this.introduction=response.data[0].userDetail;
                this.avator_img='http://106.12.131.109:8083/avator/'+this.shop_id+'.jpg';
                this.get_productList(this.shop_id)   //不太合理,不过先这么写
            })
            },
            get_productList(shop_id)
            {
               this.$net({
                method: 'get',
                url: '/ShopCenter/get_shop_product',
                params:{
                shopUserId:shop_id
            }
            }).then((response)=>{
                console.log(response)
                response.data.forEach(element => {
                    console.log(element)
                    var mid={
                    img:'',
                    price:'',
                    id:'',
                    name:'',
                    };
                    mid.img='http://106.12.131.109:8083/product/'+element.id+'.jpg';
                    mid.price=element.price;
                    mid.id=element.id;
                    mid.name=element.name;
                    this.goodslist.push(mid)
                });
                this.is_follow()
            })
            },
            //查看是否关注店铺
            is_follow(){
             this.$net({
                method: 'get',
                url: '/ShopCenter/is_follow',
                params:{
                userid:this.$ls.get("user_info").user_id,
                shopid:this.shop_id
            }
            }).then((response)=>{
                console.log(response);
                this.liked=response.data;
                if(this.liked){
                    this.content="已关注";
                    this.bg_color="#f56c6c";
                    this.ft_color="#fef0f0";
                }
            })
            },
            //关注店铺
            follow_shop(){
            this.$net({
                method: 'post',
                url: '/ShopCenter/follow_shop',
                params:{
                userId:this.$ls.get("user_info").user_id,
                shopUserId:this.shop_id
            }
            }).then((response)=>{
                Toast("关注成功")
                this.new_shop={
                    collect_time:response.data,
                    img:this.avator_img,
                    name:this.username,
                    shop_id:this.shop_id,
                }
                this.add(this.new_shop)
            }).catch((err)=>{
                Toast("关注失败,网络出错")
            })           
            },
            cancel_shop(){
             this.$net({
                method: 'delete',
                url: '/ShopCenter/cancel_follow_shop',
                params:{
                userId:this.$ls.get("user_info").user_id,
                shopUserId:this.shop_id
            }
            }).then((response)=>{
                Toast("取关成功")
                this.del(this.shop_id)
            }).catch((err)=>{
                Toast("取关失败,网络出错")
            })     
            },
            favor (e) {
                this.liked=!this.liked;
                if(this.liked){
                    this.content="已关注";
                    this.bg_color="#f56c6c";
                    this.ft_color="#fef0f0";
                    this.follow_shop()
                }

                else{
                    this.content="+关注"
                    this.bg_color="#fef0f0";
                    this.ft_color="#f56c6c";
                    this.cancel_shop()
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
                var mid=''
                this.$store.commit('change_id',mid)
                this.$router.go(-1);//返回上一页
            },
            del(item){
                for (let i=0; i<this.shop_list.length; i++){
				if (this.shop_list[i].shop_id == item){
					this.shop_list.splice(i, 1)
				}
                this.$ls.set("subscribe",this.shop_list);
			}
			console.log(this.shop_list)
            },
            add(shop_item){
                this.shop_list.push(shop_item);
                this.$ls.set("subscribe",this.shop_list);
                console.log(this.shop_list)
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