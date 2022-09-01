<template>
  <div class="Article" style="background: #f8fcff">
    <van-nav-bar
      title="文章详情"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="ArticleSection">
      <img :src="icon_redo" v-on:click="getcommentData" />
      <div class="article">
        <h1>{{ this.Article.article_title }}</h1>
        <ul>
          <li>
            • 作者:
            {{ this.Article.user_name }}
          </li>
          <li>• 发布时间:{{ this.Article.create_time }}</li>
        </ul>
        <div
          style="white-space: pre-wrap"
          v-html="this.Article.article_context"
          id="content"
        ></div>
        <van-cell
			icon="fire-o"
          :title="'推荐商品：'+product_name"
        is-link  :to="{ name: '详情页', params: { id: this.Article.product_id } }"
        />
      </div>
      <div class="replySec" v-if="!loading">
        <p class="p">暂无评论</p>
      </div>
      <div id="reply" v-else>
        <div v-for="(post, index) in posts" :key="post" class="replySec">
          <div class="replyUp">
            {{ post.user_name }}
            <span> {{ index + 1 }}楼 </span>
          </div>
          <section class="thumbsClass">
            <span>❤ </span>
          </section>
          <p style="white-space: pre-wrap" v-html="post.comment_context"></p>
        </div>
      </div>
    </div>
    <comment :Article_id="this.Article.article_id"></comment>
  </div>
</template>

<script>
import redo from "@/assets/forum/redo.png";
import Comment from "../../components/forum/Comment.vue";
export default {
  components: {
    comment: Comment,
  },
  name: "Article",
  data() {
    return {
      posts: {},
      loading: false,
      icon_redo: redo,
      Article: this.$route.params.Article,
	    product_name:""
    };
  },
  methods: {
    getcommentData() {
      this.$net({
        url: "/userForum/get_comment",
        method: "get",
        params: {
          article_id: this.Article.article_id,
        },
      })
        .then((response) => {
          if (response.data != "") {
            this.posts = response.data;
            this.loading = true;
          }
        })
        .catch(function (error) {
          console.log(error);
          alert(error);
        });
    },
    getProduct() {
      this.$net({
        method: "get",
        url: "/ShopCenter/getProduct",
        params: {
          id: this.Article.product_id,
        },
      })
        .then((response) => {
          console.log(response.data);
          if (response.data.name!=null) {
          this.product_name = response.data.name.slice(0,26);
          }
        })
        .catch(function (error) {
          console.log(error);
          alert(error);
        });
    },
    onClickLeft() {
      if (this.$store.getters.existArticle) {
        this.$store.commit("delArticle", "yes"); //传参删除文章
        /* 				console.log(11111111111111111111111111111111111111111111111111)
				console.log(this.$store.getters.existArticle)
 */
      }
      this.$router.push({ name: "论坛页",params:{tab:0} });
    },
  },
  beforeMount() {
    if (this.Article || this.$store.getters.existArticle) {
      if (this.Article) {
        this.$store.commit("setArticle", this.Article);
        //console.log(this.Article.product_id)
         
      } else {
        this.Article = this.$store.getters.RetuenArticle;//返回缓存数据
      }

      this.loading = false;
      this.getcommentData();
      /*此处获取商品细节信息，方便跳转商品页面*/
	    this.getProduct();
    } else {
    /* 			console.log(this.$store.getters.RetuenArticle)
     */
      this.$router.push({ name: "论坛页",params:{tab:0} });
    }
  },
};
</script>

<style>
/*scoped属性导致css仅对当前组件生效，而html绑定渲染出的内容可以理解为是子组件的内容，子组件不会被加上对应的属性，所以不会应用css.
解决的话把scoped属性去掉就行了*/
@import url("../../assets/markdown-github.css");
.Article {
  height: 100%;
  width: 100%;
}
.ArticleSection {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  display: inline-block;
  width: 95%;
  padding: 0.8rem 0.4rem;
  margin-left: 2.5%;
}
.ArticleSection img {
  width: 30px;
  height: 30px;
}
.ArticleSection #content {
  padding: 2rem 1rem 2rem 1rem;
  line-height: 1.6;
  padding-bottom: 1rem;
  border-top: 3px solid #f8fcff;
  font-size: 15px;
}
.ArticleSection > h1 {
  font-size: 0.1rem;
}
.article {
  background: white;
  margin-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 30px;
}
.article h1 {
  font-size: 2rem;
  font-weight: 600;
  color: #000;
}
.article > ul li {
  display: inline-block;
  font-size: 0.8rem;
  color: #a8a3a3;
  padding-left: 5px;
}
.van-cell{
	border:3px #000;
}
.replySec {
  box-sizing: border-box;
  border-bottom: 1px solid #c0ccda;
  width: 100%;
  padding: 5px;
  background: white;
}
.replySec .p {
  text-align: center;
  padding-left: 0px;
}
#reply {
  display: flex;
  flex-direction: column;
}
.replyUp {
  display: inline-block;
  color: #000;
}
.replyUp span {
  display: inline-block;
  vertical-align: top;
  margin-top: 7px;
  margin-left: 6px;
  font-size: 14px;
  color: #806767;
}
.thumbsClass {
  float: right;
}
.thumbsClass {
  color: red;
}
.replySec > p {
  padding-left: 50px;
  clear: both;
}
</style>