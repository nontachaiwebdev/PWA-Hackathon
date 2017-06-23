import { connect } from 'react-redux'
import App from './App'
import {testReducer} from './../../actions/app'

function mapStateToProps (state) {
  return {

  }
}

function mapDispatchToProps (dispatch) {
  return {
    testReducer: () => dispatch(testReducer())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
