import React, { Component } from 'react';
import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import Routes from './../Router'
import reducer from './../../reducers'

let store = createStore(
  reducer,
  composeWithDevTools()
)

export default class AppRoot extends Component {

  render(){
    return (
      <Provider store={store} >
        <Router routes={Routes} history={browserHistory} />
      </Provider>
    )
  }

}
