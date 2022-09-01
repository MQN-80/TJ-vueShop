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
        <van-cell icon="fire-o" :title="this.goods_title"  @click="goodsClick" />
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
            goods_title:'选择推荐商品'
        }
    },
    setup() {
        const onClickLeft = () => history.back();
        return {
            onClickLeft,
            };
     },
     methods:{
     push_article()
     {
        console.log(this.$ls.get("user_info").user_id)
        if(this.title!=''&&this.context!='')
        {
            this.commit_article();
            setTimeout(500);
            this.$router.push({name:'论坛页'})
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
                    product_id:1,  //之后改一下获取方式
                }
              })
			  .then((response) => {
			  	console.log(response);
                Toast("上传成功,请等待管理员审核")
                this.$router.push({name:'首页'})
			  })
			  .catch(function (error) {
			    console.log(error);
				alert(error)
                Toast("上传失败")
			  });
     }
     },
    
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