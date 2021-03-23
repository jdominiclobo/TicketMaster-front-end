import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import { findCustomer } from "../../selectors/customerSelector";
import { findDepartment } from "../../selectors/departmentSelector";
import { findEmployee } from "../../selectors/employeeSelector";

class CustomerTicketDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isResolved: "",
    };
  }
  handleChange = (e) => {
    this.setState({
      isResolved: e.target.value,
    });
    console.log(this.state);
  };
  render() {
    return (
      <Fragment>
        <input
          type="radio"
          id="all"
          name="isResolved"
          defaultChecked
          value=""
          onChange={this.handleChange}
        />
        <label htmlFor="all">All</label>

        <input
          type="radio"
          id="pending"
          name="isResolved"
          value="false"
          onChange={this.handleChange}
        />
        <label htmlFor="pending">Pending</label>

        <input
          type="radio"
          id="complete"
          name="isResolved"
          value="true"
          onChange={this.handleChange}
        />
        <label htmlFor="complete">Complete</label>

        {this.props.tickets
          .filter((tkt) => {
            if (this.state.isResolved) {
              return String(tkt.isResolved) === this.state.isResolved;
            } else {
              return tkt;
            }
          })
          .map((tkt) => {
            return (
              <ul key={tkt._id}>
                <li>
                  {tkt.code}
                  {console.log(tkt)}
                </li>
                <li>
                  {findCustomer(this.props.customers, tkt.customer)
                    ? findCustomer(this.props.customers, tkt.customer).name
                    : ""}
                </li>
                <li>
                  {findDepartment(this.props.departments, tkt.department)
                    ? findDepartment(this.props.departments, tkt.department)
                        .name
                    : ""}
                </li>
                <li>
                  {tkt.employees.map((e) =>
                    findEmployee(this.props.employees, e._id)
                      ? findEmployee(this.props.employees, e._id).name + ", "
                      : ""
                  )}
                </li>
                <li>{tkt.message}</li>
                <li>{tkt.priority}</li>
                <li>{String(tkt.isResolved)}</li>
              </ul>
            );
          })}
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    customers: state.customers,
    departments: state.departments,
    employees: state.employees,
  };
};
export default connect(mapStateToProps)(CustomerTicketDisplay);
