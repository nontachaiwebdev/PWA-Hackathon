import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import './App.css'

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
