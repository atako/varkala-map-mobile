import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'
import * as actions from '../actions'


const points = handleActions({
  [actions.fetchPointSuccess](state, { payload }) {
    return state
  }
}, [1, 2])

export default combineReducers({
  points
})