import React, {Component} from 'react'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import FlatButton from 'material-ui/FlatButton'
import Dialog from 'material-ui/Dialog';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import SprintForm from './components/SprintForm'
import { browserHistory } from 'react-router'
import './Board.css'

export default class Board extends Component {
  state = {
    isMenu: false,
    isAddForm: false,
    formData: {}
  }

  handleOpenMenuTouch = () => {
    const {isMenu} = this.state
    this.setState({
      isMenu: !isMenu
    })
  }

  handleToggleAddNewForm = () => {
    const {isAddForm} = this.state
    this.setState({
      isAddForm: !isAddForm
    })
  }

  handleAddNewSpint = () => {
    const {formData} = this.state
    const dateTransform = {
      startDate: formData.startDate.getTime(),
      endDate: formData.endDate.getTime()
    }
    const newSprintItem = {...formData,...dateTransform}
    
    this.props.addNewSprintItem(1,newSprintItem)
    this.setState({
      isAddForm: false
    })
  }

  handleSprintFormDataChange = (formData) => {
    this.setState({
      formData: formData
    })
  }

  renderNewSprintForm = () => {
    const {isAddForm} = this.state
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleToggleAddNewForm}
      />,
      <FlatButton
        label="Add"
        primary={true}
        onTouchTap={this.handleAddNewSpint}
      />,
  ];
    return (
      <Dialog
        title="Add New Sprint"
        modal={true}
        open={isAddForm}
        actions={actions}
      >
        <SprintForm onChange={this.handleSprintFormDataChange}/>
      </Dialog>
    )
  }

  redirecToDetail = (sprintId) => {
    console.log(sprintId)
    browserHistory.push('/board')
  }

  render() {
    const {isMenu} = this.state
    const {handleOpenMenuTouch, handleToggleAddNewForm, redirecToDetail} = this
    return (
      <div>
        <AppBar
          title="Sprint Board"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          iconElementRight={<FlatButton label = "Add" />}
          onLeftIconButtonTouchTap= { () => handleOpenMenuTouch() }
          onRightIconButtonTouchTap={ () => handleToggleAddNewForm() }/>
        <Drawer docked={false} width={200} open={isMenu} onRequestChange= { () => handleOpenMenuTouch() }>
          <MenuItem onTouchTap={this.handleClose}>Menu Item</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
        </Drawer>
        {this.renderNewSprintForm()}
        <div className='cardContainer'>
          <Card>
            <CardHeader title="Without Avatar" subtitle="Subtitle" actAsExpander={true} showExpandableButton={true}/>
            <CardText expandable={true}>
              <p>Date: 12/02/2016 - 15/02/2016</p>
              <p>Cards: 100</p>
              <p>Done: 20</p>
              <p>Expire: 2 Day</p>
            </CardText>
            <CardActions expandable={true} style={{
              'textAlign': 'right'
            }}>
              <FlatButton 
                label="Detail" 
                fullWidth={true} 
                primary={true} 
                backgroundColor={'#4FC3F7'} 
                onTouchTap={ () => redirecToDetail(1) }
                style={{ 'color': '#FFFFFF' }} />
            </CardActions>
          </Card>
        </div>
      </div>
    )
  }
}
