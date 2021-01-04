import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from 'react-bootstrap/Dropdown'

class DateSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
    };
    this.handleChange = this.handleChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date,
    });
  }

  onFormSubmit(e) {
    e.preventDefault();
    console.log(this.state.startDate);
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div className="form-group">
          <DatePicker
            selected={this.state.startDate}
            onChange={this.handleChange}
            name="startDate"
            dateFormat="MM/dd/yyyy"
          />

          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Dropdown Button
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item >Leave</Dropdown.Item>
              <Dropdown.Item >worked</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <button className="btn btn-primary">Show Date</button>
        </div>
      </form>
    );
  }
}

export default DateSelector;
