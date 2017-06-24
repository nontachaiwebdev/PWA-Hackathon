import React, { Component } from 'react';
import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import reducer from './../../reducers'
import App from './../../screens/App'
import database from './../../model/firebase'

database.ref('test').once('value', snap => { 
  const invite = snap.val();
  console.log(invite)
})

let store = createStore(
  reducer,
  composeWithDevTools()
)

export default class AppRoot extends Component {

  render(){
    return (
      <Provider store={store} >
        <App />
      </Provider>
    )
  }

}
