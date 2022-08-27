<template>
    <div v-if="!islogin">
      <van-button block type="info" to='/login'>前往登录,才可以评论</van-button>
    </div>
    <div class="markup" v-else>
      <h2 class="title">评论</h2>
      <van-form >
        <van-field
          v-model="markup"
          name="markup"
          rows="3"
          autosize
          type="textarea"
          maxlength="150"
          placeholder="请输入留言"
          show-word-limit
          border
        />
        <div style="margin: 10px;">
          <van-button round block type="info" native-type="submit" @click="postComment">提交</van-button>
        </div>
      </van-form>
      {{User_id}}{{markup}} {{Article_id}}
    </div>
</template>

<script>
import { Toast } from 'vant';

export default {
   props:{
    Article_id:Number,
   },
   data() {
    return {
      markup: '',
      article_id:'',
    };
   },
  created(){
  this.article_id=this.Article_id.toString();
  },
  methods:{
        postComment(){
      	this.$net({
                url: '/userForum/push_comment',
                method: 'post',
                params: {
                    context: this.markup,
                    user_id: this.$ls.get("user_info").user_id,
                    article_id: this.article_id
                }
              })
			  .then((response) => {
			  	Toast("上传成功,等待评论审核")
			  })
			  .catch(function (error) {
			    console.log(error);
          Toast("系统貌似有故障")
				alert(error)
			  });
    }
  },
  beforeMount() {
      if(localStorage.getItem('token'))
      {
        this.islogin=true;
      }
      else
	  	{
        this.islogin=false;
      }
  }
}
</script>


<style>
    .markup{
		  -webkit-box-sizing: border-box;
		  -moz-box-sizing: border-box;
		  box-sizing: border-box;
		  display: inline-block;
		  width: 95%;
	    padding: 0.8rem 0.4rem;
	    margin-left: 2.5%;
      }
      .title {
        font-size: 1.6rem;
        padding: 0.3rem 0;
        color: #000;
      }
</style>