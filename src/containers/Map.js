import { connect } from 'react-redux'
import Component from '../components/Map'
// import * as actionCreators from '../actions'

const mapStateToProps = state => {
  const props = {
    points: state.points
  }
  return props
}

export default connect(
  mapStateToProps,
  // actionCreators
)(Component)