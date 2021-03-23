import React from "react";
import { connect } from "react-redux";
import { startAddCustomer } from "../../actions/customersAction";
import CustomerForm from "./CustomerForm";
import { Link } from "react-router-dom";

function CustomerNew(props) {
  const handleSubmit = (formData) => {
    const redirect = () => props.history.push("/customers");
    props.dispatch(startAddCustomer(formData, redirect));
  };
  return (
    <div>
      <h2 align="center">Add Customer</h2>
      <CustomerForm handleSubmit={handleSubmit} />
      <p align="center">
        <Link to="/customers">Back</Link>
      </p>
    </div>
  );
}

export default connect()(CustomerNew);
