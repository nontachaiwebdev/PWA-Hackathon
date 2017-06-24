import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import './App.css'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin();

class App extends Component {
  
  componentWillMount () {
    const { checkLogin } = this.props
    checkLogin()
  }

  signIn = () => {
    const { login } = this.props
    login()
  }

  render() {
    const { isLogin } = this.props
    const renderComponent = isLogin ? this.props.children : <LoginPage onLogin={this.signIn} />
    return (
      <div>
        <MuiThemeProvider>
	  { renderComponent }
        </MuiThemeProvider>
      </div>
    )
  }
}

const LoginPage = (props) => {
  const {onLogin} = props
  return (
    <div className='loginContainer'>
      <div className='button' onClick={() => onLogin()}>Login With Facebook</div>
    </div>
  )
}

export default App
