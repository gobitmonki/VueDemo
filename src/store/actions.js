import * as types from './mutation-types'

export default {
  switchStrategy ({ commit }, strategy) {
    commit(types.SWITCH_STRATEGY)
  }
}
