<template>
    <div class="markup" >
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
          <van-button round block type="info" native-type="submit">提交</van-button>
        </div>
      </van-form>
      {{User_id}}{{markup}} {{Article_id}}
    </div>
</template>

<script>

export default {
   props:{
    User_id:Number,
    Article_id:Number,
   },
   data() {
    return {
      markup: '',
    };
   },
  methods:{
        /*postComment(){
      	this.$net({
                url: '/userForum/push_comment',
                method: 'post',
                params: {
                    context: markup,
                    user_id: User_id,
                    article_id: Article_id
                }
              })
			  .then((response) => {
			  	if(){
			  	}
			  })
			  .catch(function (error) {
			    console.log(error);
				alert(error)
			  });
    }*/
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