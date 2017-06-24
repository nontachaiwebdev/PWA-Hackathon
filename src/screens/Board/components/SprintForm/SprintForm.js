import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';

export default class SprintForm extends Component {
  state = {
    name: '',
    descriptions: '',
    startDate: null,
    endDate: null
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

  handleStartDateChange = (event, date) => {
    this.setState({
      startDate: date
    }, this.handleFormDataChange)
  }

  handleEndDateChange = (event, date) => {
    this.setState({
      endDate: date
    }, this.handleFormDataChange)
  }

  render() {
    const {startDate} = this.state
    return (
      <div>
        <TextField floatingLabelText="Name" onChange={this.handleNameChange}/>
      <TextField floatingLabelText="Descriptions" onChange={this.handleDescriptionsChange}/>
        <DatePicker floatingLabelText="Start Date" autoOk disableYearSelection onChange={this.handleStartDateChange}/>
        <DatePicker floatingLabelText="End Date" minDate={startDate} autoOk disableYearSelection onChange={this.handleEndDateChange}/>
      </div>

    );
  }

}
