import React from "react";
import CustomerForm from "./CustomerForm";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { startEditCustomer } from "../../actions/customersAction";

function CustomerEdit(props) {
  const handleSubmit = (formData) => {
    const id = props.match.params.id;
    const redirect = () => props.history.push("/customers/" + id);
    props.dispatch(startEditCustomer(id, formData, redirect));
  };
  return (
    <div>
      <h2 align="center">Edit Customer</h2>
      <CustomerForm handleSubmit={handleSubmit} />
      <p align="center">
        <Link to="/customers">Back</Link>
      </p>
    </div>
  );
}

export default connect()(CustomerEdit);
