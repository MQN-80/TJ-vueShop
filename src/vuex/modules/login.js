import Util from '../../util/common'
import * as types from '../types'
const state = {
  token:0,
  message:[]
}

const mutations = {
  [types.CHANGE_TOKEN] () {
    state.token = res
  },
  changemessage(states,res){
    state.message = res
  }
}


export default {
  state,
  mutations
}
