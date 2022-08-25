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
        <van-cell icon="fire-o" title="推荐商品"  is-link url="../../components/forum/Comment.vue" />
        <div style="margin: 10px;">
          <van-button round block type="info" native-type="submit">提交</van-button>
        </div>

    </div>
  </div>
</template>
<script>

export default {
    data(){
        return{
            title:'',
            context:'',
        }
    },
    setup() {
        const onClickLeft = () => history.back();//有问题
        return {
            onClickLeft,
            };
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