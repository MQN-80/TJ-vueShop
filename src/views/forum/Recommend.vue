<template>
	<div class="PostList">
	    <div class="loading" v-if="loading">
			<van-loading size="24px" vertical>加载中...</van-loading>
	    </div>
	    <div class="posts" v-else >
			<ul>
				<section v-for="post in posts" :key="post">	
					<h class="head">
					<router-link :to="{name:'文章页' ,params:{Article:post}}">
						<b>{{ post.article_title}}</b>
					</router-link>
					</h>
					<div>
						<span>
							作者：{{ post.user_name }}
						</span>
						<span class="last_reply">
							{{ post.create_time }}
						</span>
					</div>
					<h class="last"></h>
				</section>
			</ul>
	    </div>
	</div>
</template>

<script>
export default {
	  name: 'PostList',
	  data () {
	    return {
	      posts:{},
	      loading:false
	    }
	},
      filters: {
        timeStyle(createTime) {
            return String(createTime).match(/.{10}/)[0];
        }
    },
	  methods: {
	  	getData(){
			this.$net({
                url: '/userForum/get_article',
                method: 'get',
                params: {
                    //sum: 0
                }
              })
			  .then( (response) => {
			  	if( response.data !=""){
			  		this.posts = response.data;
					console.log(this.posts);
			  		this.loading = false;
			  	}
			  })
			  .catch(function (error) {
			    console.log(error);
				alert(error)
			  });
	  	}
	  },
	    beforeMount() {
	    	this.loading = true;
	    	this.getData();
	    }
	}
</script>

<style scoped>
	.PostList {
		color: #000;
		margin-top: 0.5rem;
		margin-left: 0.5rem;
		margin-right: 0.5rem;
		height: 100%;
	}
	.PostList .posts {
		color: #000;
   		padding: 10px;
    	border-radius: 30px ;
   		box-shadow: 0 0 0 2px #e1f0fd;
	}
	.PostList .posts section {
		padding-top: 3vw;
		list-style: none;
		margin-bottom: 16px;
		border-bottom: 1px solid #e1f0fd;
		line-height: 30px;
	}
	.PostList .posts .head{
		font-size:1.5rem; 
		margin-bottom: 0.8rem; 
		font-weight: bold;
		color: #000;
	}
	.PostList .posts .last_reply {
		float: right;
   		font-size: 0.5rem;
   	    margin-top: 0.3rem;
	}
</style>