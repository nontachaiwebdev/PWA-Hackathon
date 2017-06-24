import React, {Component} from 'react'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import FlatButton from 'material-ui/FlatButton'
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import './allBoard.css'

export default class allBoard extends Component {

  styles = {
    headline: {
    	fontSize: 24,
	    paddingTop: 16,
	    marginBottom: 12,
	    fontWeight: 400,
	},
  }

  state = {
    isMenu: false
  }

  handleOpenMenuTouch = () => {
    const {isMenu} = this.state
    this.setState({
      isMenu: !isMenu
    })
  }

  render() {
    const {isMenu} = this.state
    const {handleOpenMenuTouch} = this
    return (
      <div>
        <AppBar
          title="Sprint Board"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          iconElementRight={< FlatButton label = "Add" />}
          onLeftIconButtonTouchTap= { () => handleOpenMenuTouch() }/>
        <Drawer docked={false} width={200} open={isMenu} onRequestChange= { () => handleOpenMenuTouch() }>
          <MenuItem onTouchTap={this.handleClose}>Menu Item</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
        </Drawer>
        <Tabs>
		    <Tab label="Item One" >
		        <div className='allCardContainer'>
		          <Card>
		            <CardHeader title="Header Menu 1 item 1" subtitle="Subtitle" actAsExpander={true} showExpandableButton={true}/>
		            <CardText expandable={true}>
		              <p>Date: 12/02/2016 - 15/02/2016</p>
		              <p>Cards: 100</p>
		              <p>Done: 20</p>
		              <p>Expire: 2 Day</p>
		            </CardText>
		            <CardActions expandable={true} style={{
		              'textAlign': 'right'
		            }}>
		              <FlatButton label="Detail" fullWidth={true} primary={true} backgroundColor={'#4FC3F7'} style={{
		                'color': '#FFFFFF'
		              }}/>
		            </CardActions>
		          </Card>
		        </div>
		        <div className='allCardContainer'>
		          <Card>
		            <CardHeader title="Header Menu 1 item 2" subtitle="Subtitle" actAsExpander={true} showExpandableButton={true}/>
		            <CardText expandable={true}>
		              <p>Date: 12/02/2016 - 15/02/2016</p>
		              <p>Cards: 100</p>
		              <p>Done: 20</p>
		              <p>Expire: 2 Day</p>
		            </CardText>
		            <CardActions expandable={true} style={{
		              'textAlign': 'right'
		            }}>
		              <FlatButton label="Detail" fullWidth={true} primary={true} backgroundColor={'#4FC3F7'} style={{
		                'color': '#FFFFFF'
		              }}/>
		            </CardActions>
		          </Card>
		        </div>
		    </Tab>
		    <Tab label="Item Two" >
		      <div>
		      	<div className='allCardContainer'>
		          <Card>
		            <CardHeader title="Header Menu 2" subtitle="Subtitle" actAsExpander={true} showExpandableButton={true}/>
		            <CardText expandable={true}>
		              <p>Date: 12/02/2016 - 15/02/2016</p>
		              <p>Cards: 100</p>
		              <p>Done: 20</p>
		              <p>Expire: 2 Day</p>
		            </CardText>
		            <CardActions expandable={true} style={{
		              'textAlign': 'right'
		            }}>
		              <FlatButton label="Detail" fullWidth={true} primary={true} backgroundColor={'#4FC3F7'} style={{
		                'color': '#FFFFFF'
		              }}/>
		            </CardActions>
		          </Card>
		        </div>
		      </div>
		    </Tab>
		    <Tab label="Item Three" >
		      <div>
		      	<div className='allCardContainer'>
		          <Card>
		            <CardHeader title="Header Menu 3" subtitle="Subtitle" actAsExpander={true} showExpandableButton={true}/>
		            <CardText expandable={true}>
		              <p>Date: 12/02/2016 - 15/02/2016</p>
		              <p>Cards: 100</p>
		              <p>Done: 20</p>
		              <p>Expire: 2 Day</p>
		            </CardText>
		            <CardActions expandable={true} style={{
		              'textAlign': 'right'
		            }}>
		              <FlatButton label="Detail" fullWidth={true} primary={true} backgroundColor={'#4FC3F7'} style={{
		                'color': '#FFFFFF'
		              }}/>
		            </CardActions>
		          </Card>
		        </div>
		      </div>
		    </Tab>
	  	</Tabs>
      </div>
    )
  }
}