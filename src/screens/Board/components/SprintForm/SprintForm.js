import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';

export default class SprintForm extends Component {
  state = {
    selectedStartDate: null,
    selectedEndDate: null
  }

  handleStartDateChange = (event, date) => {
    this.setState({selectedStartDate: date})
  }

  handleEndDateChange = (event, date) => {
    this.setState({selectedEndDate: date})
  }

  render() {
    const {selectedStartDate, selectedEndDate} = this.state
    return (
      <div>
        <TextField floatingLabelText="Name"/>
        <TextField floatingLabelText="Descriptions"/>
        <DatePicker floatingLabelText="Start Date" autoOk disableYearSelection onChange={this.handleStartDateChange}/>
        <DatePicker floatingLabelText="End Date" minDate={selectedStartDate} autoOk disableYearSelection onChange={this.handleEndDateChange}/>
      </div>

    );
  }

}
