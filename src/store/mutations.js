import * as types from './mutation-types'

export default {
  [types.SWITCH_STRATEGY] (state, strategy) {
    state.strategy = strategy
  }
}
