import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import logo from './../../asset/wolf.png';
import logo_f from './../../asset/facebook.png';
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
      <div>
        <div className='img-logo'>
          <img src={logo} />
        </div>
        <div className='button' onClick={() => onLogin()}><span><img className='img-logo-facebook' src={logo_f} /></span><span className='text-facebook'>Login With Facebook</span></div>
      </div>
    </div>
  )
}

export default App
