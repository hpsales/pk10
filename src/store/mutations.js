import * as types from './mutation-types'

const mutations = {
  [types.SET_DETAIL](state, detail) {
    state.detail = detail
  }
}

export default mutations