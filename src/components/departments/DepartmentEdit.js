import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import DepartmentForm from "./DepartmentForm";
import { startEditDepartment } from "../../actions/departmentsAction";

function DepartmentEdit(props) {
  const handleSubmit = (formData) => {
    const id = props.match.params.id;
    const redirect = () => {
      props.history.push("/departments/" + id);
    };
    props.dispatch(startEditDepartment(id, formData, redirect));
  };
  return (
    <div>
      <h2>Edit Department</h2>
      <DepartmentForm handleSubmit={handleSubmit} />
    </div>
  );
}

export default withRouter(connect()(DepartmentEdit));
