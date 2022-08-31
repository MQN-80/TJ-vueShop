import Util from '../../util/common'
import * as types from '../types'

const state = {
  tabIndex:0,
  price:0,   //商品价格
  product_id:'',  // 商品id
  title:'',   //商品名称
  imgPath:'',   // 商品路径

}

const mutations = {
  [types.CHANGE_TABINDEX] (state,res) {
    state.tabIndex = res
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
}


export default {
  state,
  mutations
}
