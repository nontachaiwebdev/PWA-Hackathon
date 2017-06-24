import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import './App.css'
console.log('...')
class App extends Component {
  componentDidMount(){
    this.props.testReducer()
  }
  render() {
    return (
      <MuiThemeProvider>
        { this.props.children }
      </MuiThemeProvider>
    )
  }
}

export default App;
