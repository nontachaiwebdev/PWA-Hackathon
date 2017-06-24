import React, {Component} from 'react'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import Dialog from 'material-ui/Dialog';
import CardForm from './components/CardForm'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import './allBoard.css'

export default class allBoard extends Component {

  styles = {
    headline: {
      fontSize: 24,
      paddingTop: 16,
      marginBottom: 12,
      fontWeight: 400
    }
  }

  state = {
    isMenu: false,
    isAddForm: false,
    formData: {}
  }

  componentDidMount(){
    const { params: {sprintId},getSprintDataById,fetchCardItems} = this.props
    getSprintDataById(sprintId)
    fetchCardItems(sprintId)
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

  handleSprintFormDataChange = (formData) => {
    this.setState({formData: formData})
  }

  handleAddNewCard = () => {
    const {formData} = this.state
    const { params: {sprintId}} = this.props
    const newCardItem = {
      ...formData,
      status: 'todo'
    }
    this.props.addNewCardItem(sprintId,newCardItem)
    this.setState({isAddForm: false})
  }

  handleChangeStatus = (cardId,status) => {

    const { params: {sprintId}} = this.props
    console.log(`${cardId} ${status} ${sprintId}`);
    this.props.updateCardItem(sprintId, cardId, {status:status})
  }

  renderNewSprintForm = () => {
    const {isAddForm} = this.state
    const actions = [
      <FlatButton
        label = "Cancel"
        primary = {true}
        onTouchTap = { this.handleToggleAddNewForm}
      />,
       <FlatButton
         label = "Add"
         primary = {true}
         onTouchTap = {this.handleAddNewCard}
       />
    ];
    return (
      <Dialog title="Add New Card" modal={true} open={isAddForm} actions={actions}>
        <CardForm onChange={this.handleSprintFormDataChange}/>
      </Dialog>
    )
  }

  renderTodoCardsListItems = (items) => {
    const itemsList = items.map((item,index)=>{
      const sprintName = `Card #${index+1} ${item.name}`
      const score = `Score : ${item.score}`
      const cardId = item.id
      const style = {marginBottom: '10px'}
      return (
        <Card key={index} style={style} >
          <CardHeader title={sprintName} subtitle={score}/>
        <CardText style={{wordBreak: 'break-all'}}>{item.descriptions}</CardText>
          <CardActions style={{
            'textAlign': 'right'
          }}>
          <RaisedButton label="Add to Doing" primary={true} onTouchTap={ () => this.handleChangeStatus(cardId,'doing') } />
          </CardActions>
        </Card>
      )
    })
    return (
      <div className='allCardContainer'>
        {itemsList}
      </div>
    )
  }

  renderDoingCardsListItems = (items) => {
    const itemsList = items.map((item,index)=>{
      const sprintName = `Card #${index+1} ${item.name}`
      const score = `Score #${item.score}`
      const cardId = item.id
      const style = {marginBottom: '10px'}
      return (
        <Card key={index} style={style} >
          <CardHeader title={sprintName} subtitle={score}/>
          <CardText style={{wordBreak: 'break-all'}}>{item.descriptions}</CardText>
          <CardActions style={{
            'textAlign': 'right'
          }}>
        <RaisedButton label="Back to Todo" secondary={true} onTouchTap={ () => this.handleChangeStatus(cardId,'todo') } />
      <RaisedButton label="Done!!!" primary={true} onTouchTap={ () => this.handleChangeStatus(cardId,'done') } />
          </CardActions>
        </Card>
      )
    })
    return (
      <div className='allCardContainer'>
        {itemsList}
      </div>
    )
  }

  renderDoneCardsListItems = (items) => {
    const itemsList = items.map((item,index)=>{
      const sprintName = `Card #${index+1} ${item.name}`
      const score = `Score #${item.score}`
      const cardId = item.id
      const style = {marginBottom: '10px'}
      return (
        <Card key={index} style={style} >
          <CardHeader title={sprintName} subtitle={score}/>
          <CardText style={{wordBreak: 'break-all'}}>{item.descriptions}</CardText>
          <CardActions style={{
            'textAlign': 'right'
          }}>
          <RaisedButton label="Back to Doing" secondary={true} onTouchTap={ () => this.handleChangeStatus(cardId,'doing') } />
          </CardActions>
        </Card>
      )
    })
    return (
      <div className='allCardContainer'>
        {itemsList}
      </div>
    )
  }

  render() {
    const {isMenu} = this.state
    const {sprintItem, params, cardItems} = this.props
    const sprintName = sprintItem.name? sprintItem.name+'' : 'SPRINT NAME'
    const {handleOpenMenuTouch, handleToggleAddNewForm} = this
    const {todo=[],doing=[],done=[]} = cardItems
    return (
      <div>
        <AppBar title={sprintName.toUpperCase()} iconClassNameRight="muidocs-icon-navigation-expand-more" iconElementRight={< FlatButton label = "Add" />} onLeftIconButtonTouchTap= { () => handleOpenMenuTouch() } onRightIconButtonTouchTap={() => handleToggleAddNewForm()}/>
        <Drawer docked={false} width={200} open={isMenu} onRequestChange= { () => handleOpenMenuTouch() }>
          <MenuItem onTouchTap={this.handleClose}>Menu Item</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
        </Drawer>
        {this.renderNewSprintForm()}
        <Tabs>
          <Tab label="Todo">
          {this.renderTodoCardsListItems(todo)}
          </Tab>
          <Tab label="Doing">
          {this.renderDoingCardsListItems(doing)}
          </Tab>
          <Tab label="Done">
          {this.renderDoneCardsListItems(done)}
          </Tab>
        </Tabs>
      </div>
    )
  }
}
