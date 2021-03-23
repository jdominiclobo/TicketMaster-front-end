import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import EmployeeForm from "./EmployeeForm";
import { startAddEmployee } from "../../actions/employeesAction";

function EmployeeNew(props) {
  const handleSubmit = (formData) => {
    const redirect = () => props.history.push("/employees");
    props.dispatch(startAddEmployee(formData, redirect));
  };
  return (
    <div align="center">
      <h2> Add Employee </h2>
      <EmployeeForm handleSubmit={handleSubmit} />
    </div>
  );
}

export default withRouter(connect()(EmployeeNew));
