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
	<div className='boardCardContainer'>
          <div className='card'>
	    <p>Card Sprint 1</p>
	    <p>1/2/2016 - 10/2/2016</p>
	    <p>Cards: 38</p>
	    <p>Done: 20</p>
	  </div>
	</div>
      </div>
    )
  }
}
