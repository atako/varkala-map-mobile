import { createAction } from 'redux-actions'

export const fetchPointSuccess = createAction('POINTS_FETCH_SUCCESS')
export const fetchPoints = () => async (dispatch) => {
  dispatch(fetchPointSuccess())
}