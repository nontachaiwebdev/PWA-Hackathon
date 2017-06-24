import { connect } from 'react-redux'
import App from './App'
import {testReducer, isLogin, login} from './../../actions/app'

function mapStateToProps (state) {
  return {
    isLogin: state.app.isLogin
  }
}

function mapDispatchToProps (dispatch) {
  return {
    testReducer: () => dispatch(testReducer()),
    checkLogin: () => dispatch(isLogin()),
    login: () => dispatch(login())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
