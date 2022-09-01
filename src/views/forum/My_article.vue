<template>
  <div v-if="!islogin">
      <van-empty description="先登录吧！" />
  </div>
  <div class="MyArticle" v-else>
    <div class="ShowArticle">
      <img class="imgO" :src="icon_redo" v-on:click="getMyArticle" />
      <div v-if="isEmpty">
          <van-empty description="暂无发表" />
      </div>
      <div v-else v-for="post in posts" :key="post">
      <van-swipe-cell>
        <div class="list">
					<h class="head">
					<router-link :to="{name:'文章页' ,params:{Article:post}}">
						<b>{{ post.article_title}}</b>
					</router-link>
					</h>
					<div>
						<span class="last_reply">
							{{ post.create_time }}
						</span>
					</div>
          </div>
      <template #right>
        <van-button square text="删除" type="danger" class="delete-button" @click="deleteArticle(post.article_id)" />
      </template>
      </van-swipe-cell>
      </div>
    </div>
    <FloatBall :text="'发布'" ></FloatBall>
  </div>
</template>
<script>
    import redo from'@/assets/forum/redo.png'
    import FloatBall from '@/components/forum/MyFabBtn.vue';
    export default {
    components:{
       'FloatBall': FloatBall
    },
    data(){
      return{
      isEmpty: true,
		  icon_redo:redo,
      }
    },
    methods: {
      getMyArticle(){
			this.$net({
                url: '/userForum/get_userArticle',
                method: 'post',
                params: {
                    user_id:this.$ls.get("user_info").user_id,
                }
              })
			  .then( (response) => {
			  	if( response.data !=""){
			  		this.posts = response.data;
					  console.log(this.posts);
			  		this.isEmpty = false;
			  	}
			  })
			  .catch(function (error) {
			    console.log(error);
				alert(error)
			  });
      },
      deleteArticle(id){
        	this.$net({
                url: '/userForum/delete_article',
                method: 'post',
                params: {
                    article_id: id,
                }
          })
          .then( (response) => {
					  console.log(response);
            this.$router.go(0);
			  })
			  .catch(function (error) {
			    console.log(error);
				alert(error)
			  });

      }
    },
    beforeMount(){
      if(localStorage.getItem('token'))
      {
        this.isEmpty=true;
        this.getMyArticle();
        this.islogin=true;
      }
      else
	  	{
        this.islogin=false;
      }
    },
    }
</script>

<style>
  .MyArticle{
    height: 100%;
    width: 100%;
  }
  .MyArticle .imgO {
		width: 30px;
        height: 30px;
		}
  .list{
    color: #000;
    padding: 20px;
    margin: 10px;
    border-radius: 30px;
    -webkit-box-shadow: 0 0 0 2px #e1f0fd;
    box-shadow: 0 0 0 2px #e1f0fd;
  }
  .head{
		font-size:1.5rem; 
		margin-bottom: 0.8rem; 
		font-weight: bold;
		color: #000;
	}
	.last_reply {
		float: right;
   	font-size: 0.5rem;
   	margin-top: 0.3rem;
	}
  .delete-button{
    height: 100%;
    border-radius: 30px;
  }
</style>