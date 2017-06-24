import React, { Component } from 'react';

class App extends Component {
  componentDidMount(){
    this.props.testReducer()
  }
  render() {
    return this.props.children
  }
}

export default App;
