import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import EmployeeForm from "./EmployeeForm";
import { startEditEmployee } from "../../actions/employeesAction";

function EmployeeEdit(props) {
  const handleSubmit = (formData) => {
    const id = props.match.params.id;
    const redirect = () => props.history.push("/employees");
    props.dispatch(startEditEmployee(formData, id, redirect));
  };
  return (
    <div align="center">
      <h2> Edit Employee </h2>
      <EmployeeForm handleSubmit={handleSubmit} />
    </div>
  );
}

export default withRouter(connect()(EmployeeEdit));
