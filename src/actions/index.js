import { createAction } from 'redux-actions'
import firebase from 'firebase'

export const fetchPointsRequest = createAction('POINTS_FETCH_REQUEST')
export const fetchPointsSuccess = createAction('POINTS_FETCH_SUCCESS')
export const fetchPointsFailure = createAction('POINTS_FETCH_FAILURE')

export const fetchPoints = () => async (dispatch) => {
  dispatch(fetchPointsRequest())
  try {
    await firebase.database().ref('/points')
      .on('value', snapshot => {
        dispatch(fetchPointsSuccess(snapshot.val()))
      })
  } catch (e) {
    console.log(e)
    dispatch(fetchPointsFailure(e))
  }
}