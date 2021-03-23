import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { findEmployee } from "../../selectors/employeeSelector";

class EmployeeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.employee ? props.employee.name : "",
      email: props.employee ? props.employee.email : "",
      mobile: props.employee ? props.employee.mobile : "",
      department: props.employee ? props.employee.department._id : "",
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleDropChange = (e) => {
    this.setState({
      department: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: this.state.name,
      email: this.state.email,
      mobile: this.state.mobile,
      department: this.state.department,
    };
    this.props.handleSubmit(formData);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="Name"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <input
            placeholder="Email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <input
            placeholder="Mobile"
            name="mobile"
            value={this.state.mobile}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <select onChange={this.handleDropChange}>
            <option value="">select</option>
            {this.props.departments.map((dept) => {
              return (
                <option key={dept._id} value={dept._id}>
                  {dept.name}
                </option>
              );
            })}
          </select>
          <br />
          <br />
          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state, props) => {
  const id = props.match.params.id;
  return {
    employee: findEmployee(state.employees, id),
    departments: state.departments,
  };
};
export default withRouter(connect(mapStateToProps)(EmployeeForm));
