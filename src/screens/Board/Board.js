import React, { Component } from 'react'
import './Board.css'
import addIcon from './../../asset/plus.png'

export default class Board extends Component{
  render () {
    return (
      <div className='boardContainer'>
        <div className='boardHeader'>
          <p>Sprint Board</p>
	  <div className='addIcon'>
	    <img src={addIcon} />
	  </div>
	</div>
      </div>
    )
  }
}
