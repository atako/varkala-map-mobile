import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'
import * as actions from '../actions'


const points = handleActions({
  [actions.fetchPointsSuccess](state, { payload }) {
    return payload
  }
}, [])

export default combineReducers({
  points
})