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
        article_id:""
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
        state.Article.article_id = res.article_id;
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

const getters ={
    existArticle(){
        if(state.Article.article_context!=""){
            return true;
        }
        else{
            return false;
        }
    },
    existCreateArticle(){
        if(state.createARticle.context!=""||state.createARticle.title!=""||state.createARticle.goods_id!=""){
            return true;
        }
        else{
            return false;
        }
    },
    RetuenArticle(){
        return state.Article;
    },
    RetuenCreateArticle(){
        return state.createARticle;
    }
}

export default {
    state,
    mutations,
    getters
}
