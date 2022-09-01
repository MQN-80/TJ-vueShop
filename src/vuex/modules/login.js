import Util from '../../util/common'
import * as types from '../types'
const state = {
  token:0,
  showAll:1,
  message:[]
}

const mutations = {
  [types.CHANGE_TOKEN] () {
    state.token = res
  },
  changeshowAll(state,res){
      state.showAll = res
  },
  changemessage(states,res){
    state.message = res
  }
}


export default {
  state,
  mutations
}
