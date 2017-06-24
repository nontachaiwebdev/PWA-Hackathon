import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

export default class CardForm extends Component {
  state = {
    name: '',
    descriptions: '',
    score: 0
  }

  handleFormDataChange = () => {
    this.props.onChange(this.state)
  }

  handleNameChange = (event) => {
    this.setState({
      name: event.target.value
    }, this.handleFormDataChange)
  }

  handleDescriptionsChange = (event) => {
    this.setState({
      descriptions: event.target.value
    }, this.handleFormDataChange)
  }

  handleScoreChange = (event) => {
    this.setState({
      score: event.target.value
    }, this.handleFormDataChange)
  }


  handleStartDateChange = (event, date) => {
    this.setState({
      startDate: date
    }, this.handleFormDataChange)
  }

  render() {
    const {startDate} = this.state
    return (
      <div>
        <TextField floatingLabelText="Name" onChange={this.handleNameChange}/>
        <TextField floatingLabelText="Descriptions" onChange={this.handleDescriptionsChange}/>
      <TextField floatingLabelText="Score" onChange={this.handleScoreChange}/>
      </div>

    );
  }

}
