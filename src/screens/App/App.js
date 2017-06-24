import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import firebase from 'firebase'
import './App.css'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin();

class App extends Component {

  state = {
    isLogin: false
  }

  componentWillMount () {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log('Login')
        this.setState({isLogin: true})
      } else {
        console.log('...')
	this.setState({isLogin: false})
      }
    })
  }

  componentDidMount(){
    this.props.testReducer()
  }

  signIn = () => {
    const provider = new firebase.auth.FacebookAuthProvider()
    firebase.auth().signInWithRedirect(provider).then(result => {
      this.setState({isLogin: true})
    }).catch(error => {
      this
      alert('Cannot sign in: ' + String(error))
    })
  }

  signOut = () => {
    firebase.auth().signOut().then(function() {
      this.setstate({isLogin: false})
    }).catch(function(error) {
      alert('Cannot sign out')
    })
  }
  render() {
    const {isLogin} = this.state
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
    <div>
      <div onClick={() => onLogin()}>Login With Facebook</div>
    </div>
  )
}

export default App
