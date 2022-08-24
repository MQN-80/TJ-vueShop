<template>
	<div class="PostList">
	    <div class="loading" v-if="loading">
			<van-loading size="24px" vertical>加载中...</van-loading>
	    </div>
	    <div class="posts" v-else>
			<ul>
				<section v-for="post in posts" :key="post" @click="gotoArticle">	
					<h class="head">
						<b>{{ post.article_title}}</b>
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
import section1 from '../../components/index/section1.vue';
	export default {
  components: { section1 },
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
			  	if( response){
			  		this.posts = response.data;
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
	}
	.PostList .posts {
		background-color: rgb(255, 255, 255);
		padding: 0.5rem;
		margin: 0.3rem 2rem;
	}
	.PostList .posts section {
		padding-top: 3vw;
		list-style: none;
		margin-bottom: 16px;
		border-bottom: 1px solid #dba335;
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