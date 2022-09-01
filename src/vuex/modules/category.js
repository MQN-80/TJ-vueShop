import Util from '../../util/common'
import * as types from '../types'

const state = {
  tabIndex:0,
  price:0,   //商品价格
  product_id:'',  // 商品id
  title:'',   //商品名称
  imgPath:'',   // 商品路径
  k1:'',
  product_detail:[],   //商品页缓存
  shop_detail:[],      //店铺页缓存
  shopuser_detail:[],   //跳转缓存
  product_pic:'',      //商品图像缓存
  shop_id:'',   //店铺id缓存

}

const mutations = {
  [types.CHANGE_TABINDEX] (state,res) {
    state.tabIndex = res
  },
  change_shopid(state,res){
  state.shop_id=res
  },
  change_shopuser(state,res){
    state.shopuser_detail=res
  },
  change_pic(state,res){
    state.product_pic=res
  },
  change_price(state,res) {
    state.price = res
  },
  change_productid(state,res) {
    state.product_id = res
  },
  change_title(state,res) {
    state.title = res
  },
  change_path(state,res) {
    state.imgPath = res
  },
  change_k1(state,res) {
    state.k1 = res
  },
  change_product(state,res){
    state.product_detail=res
  },
  change_shop(state,res){
    state.shop_detail=res;
  }
}


export default {
  state,
  mutations
}
