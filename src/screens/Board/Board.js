import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import injectTapEventPlugin from 'react-tap-event-plugin'
import addIcon from './../../asset/plus.png'
injectTapEventPlugin();
export default class Board extends Component{
  render () {
    return (
      <AppBar
        title="Title"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
      />
    )
  }
}
