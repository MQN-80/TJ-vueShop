import Util from '../../util/common'
import * as types from '../types'
//主要功能为缓存文章与创建的文章
const state = {
    Article: {
        article_context: "",
        article_title: "",
        create_time: "",
        product_id: "",
        user_name: "",
    },
    createARticle: {
        title: "",
        context: "",
        goods_id: "",
    }
}

const mutations = {
    setArticle(state, res) {
        state.Article.article_context = res.article_context;
        state.Article.article_title = res.article_title;
        state.Article.create_time = res.create_time;
        state.Article.product_id = res.product_id;
        state.Article.user_name = res.user_name;
    },

    delArticle(state, res) {
        if (res = "yes") {
            state.Article.article_context = "";
            state.Article.article_title = "";
            state.Article.create_time = "";
            state.Article.product_id = "";
            state.Article.user_name = "";
        }
    },

    setCreatetitle(state,res){
        state.createARticle.title=res
    },

    setCreatecontext(state,res){
        state.createARticle.context=res
    },

    setCreategoods(state,res){
        state.createARticle.goods_id=res
    },

    delCreate(state,res){
        if(res="yes"){
            state.createARticle.title=""
            state.createARticle.context=""
            state.createARticle.goods_id=""
        }
    },
}


export default {
    state,
    mutations
}
