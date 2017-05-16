import React from 'react';
import {FormGroup, ControlLabel, FormControl} from 'react-bootstrap';

class EnterDateInput extends React.Component {
  render(){
    const dateError = (this.props.date === "") ? <div>{this.props.dateErrorMessage}</div> : <div></div>
    return (
      <FormGroup>
        <ControlLabel>Enter Date:</ControlLabel>
        <FormControl type="date" onChange={this.props.handleDate} />
        {dateError}
      </FormGroup>
    )
  }
}

export default EnterDateInput;
