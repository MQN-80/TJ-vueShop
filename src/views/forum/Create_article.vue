<template>
  <div class="post">
    <van-nav-bar
    title="发布贴子"
    left-text="取消"
    left-arrow
    @click-left="onClickLeft"
    />
    <div class="write">
        <van-cell-group>
            <van-field class="title"
            v-model="title"
            name="title"
            rows="1"
            autosize
            type="textarea"
            maxlength="20"
            placeholder="写标题，吸引更多人看见哦！"
            show-word-limit
            border
            />
            <van-field class="main"
            v-model="context"
            name="context"
            rows="10"
            autosize
            type="textarea"
            maxlength="1000"
            placeholder="说点好玩的！"
            show-word-limit
            border
            />
        </van-cell-group>
        <van-cell icon="fire-o" is-link :title="this.goods_title"  @click="goodsClick" />
        <div style="margin: 10px;">
          <van-button round block type="info" native-type="submit" @click="push_article">提交</van-button>
        </div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant';

export default {
    data(){
        return{
            title:'',
            context:'',
            goods_title:'选择推荐商品',
            goods_id:''
        }
    },
     methods:{
        push_article()
        {
            console.log(this.$ls.get("user_info").user_id)
            if(this.title!=''&&this.context!='')
            {
                this.commit_article();
                setTimeout(500);
                this.$store.commit('delCreate',"yes")//清除存储数据
                this.$router.push({name:'论坛页',params:{tab:1}})//跳转到我的文章
            }
            else
                Toast("请完成内容输入再发布吧！")
        },
        commit_article()
        {
            this.$net({
                    url: '/userForum/push_article',
                    method: 'post',
                    params: {
                        title:this.title,
                        context:this.context,
                        user_id:this.$ls.get("user_info").user_id,
                        product_id:this.goods_id,  
                    }
                })
                .then((response) => {
                    console.log(response);
                    Toast("上传成功,请等待管理员审核")
                })
                .catch(function (error) {
                    console.log(error);
                    alert(error)
                    Toast("上传失败")
                });
        },
        goodsClick(){
            this.$store.commit('setCreatetitle',this.title);
            this.$store.commit('setCreatecontext',this.context);
            this.$store.commit('setCreategoods',this.goods_id);

            this.$router.push({name: '推荐商品搜索页'})
        },
        getProduct() {
            this.$net({
            method: "get",
            url: "/ShopCenter/getProduct",
            params: {
            id: this.goods_id,
            },
        })
            .then((response) => {
            console.log(response.data);
            if (response.data.name!=null) {
                this.goods_title = response.data.name.slice(0,26);
            }
            })
            .catch(function (error) {
            console.log(error);
            alert(error);
            });
        },
        onClickLeft()
        {
            this.$store.commit('delCreate',"yes")//清除存储数据
            this.$router.push({name:'论坛页',params:{tab:1}})//跳转到我的文章
        }
    },
    beforeMount(){
/*         console.log(this.$store.getters.existCreateArticle+"11111111111111")
 */     if(this.$store.getters.existCreateArticle)
        {
            var CreateA = this.$store.getters.RetuenCreateArticle;
            this.title=CreateA.title;
            this.context=CreateA.context;
            this.goods_id=CreateA.goods_id;
/*                     console.log(this.goods_id)
 */            if(this.goods_id!=""){
                this.getProduct();
            }
        }
    }
}
</script>

<style >
    .van-cell{
        width: 90%;
        margin-left: 5%;
    } 
    .title .van-field__control{
        font-size: 20px;
        font-weight: 700;
    }
    .main .van-field__control{
        font-size: 10px;
        font-weight: 700;
    }
</style>