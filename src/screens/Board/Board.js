import React, {Component} from 'react'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import FlatButton from 'material-ui/FlatButton'
import Dialog from 'material-ui/Dialog';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import SprintForm from './components/SprintForm'
import moment from 'moment'
import { browserHistory } from 'react-router'
import './Board.css'

export default class Board extends Component {
  state = {
    isMenu: false,
    isAddForm: false,
    formData: {}
  }

  componentDidMount(){
    this.props.fetchSprintItems()
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

    this.props.addNewSprintItem(newSprintItem)
    this.setState({
      isAddForm: false
    })
  }

  handleSprintFormDataChange = (formData) => {
    this.setState({
      formData: formData
    })
  }

  renderSprintListItems = (items) => {
    const itemsList = items.map((item,index)=>{
      const sprintName = `Sprint #${index+1} ${item.name}`
      const startDate = moment(item.startDate).format("MMM Do YY");
      const endDate = moment(item.endDate).format("MMM Do YY");
      const style = {marginBottom: '10px'}
      return (
        <Card key={index} style={style} >
          <CardHeader title={sprintName} subtitle={item.descriptions} actAsExpander={true} showExpandableButton={true}/>
          <CardText expandable={true}>
            <p>{`Date: ${startDate} - ${endDate}`}</p>
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
            onTouchTap={ () => this.redirecToDetail(1) }
            style={{ 'color': '#FFFFFF' }} />
          </CardActions>
        </Card>
      )
    })
    return itemsList
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

  redirecToDetail = () => {
    browserHistory.push('/board')
  }

  render() {
    const {isMenu} = this.state
    const {sprintItems} = this.props
    const {handleOpenMenuTouch, handleToggleAddNewForm} = this
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
          {this.renderSprintListItems(sprintItems)}
        </div>
      </div>
    )
  }
}
