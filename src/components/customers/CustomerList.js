import React from "react";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";
import {
  startGetCustomers,
  startRemoveCustomer,
} from "../../actions/customersAction";

function CustomerList(props) {
  const handleRemove = (id) => {
    const confirmRemove = window.confirm("Are your sure?");
    if (confirmRemove) {
      console.log("dfsf");
      props.dispatch(startRemoveCustomer(id));
    }
  };

  if (props.customers.length === 0) {
    props.dispatch(startGetCustomers());
  }
  return (
    <div className="container">
      <h2>No. Of Customers : {props.customers.length}</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Number</th>
            <th>Actions</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {props.customers.map((cust) => {
            return (
              <tr key={cust._id}>
                <td>{cust._id}</td>
                <td>{cust.name}</td>
                <td>{cust.email}</td>
                <td>{cust.mobile}</td>
                <td>
                  <a href={"/customers/" + cust._id}>
                    <button className="btn btn-info" onClick={() => {}}>
                      Show
                    </button>
                  </a>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      handleRemove(cust._id);
                    }}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <a href="/customers/new">
        <button className="btn btn-info" onClick={() => {}}>
          Add Customer
        </button>
      </a>
    </div>
  );
}

const mapStateToProps = (state) => {
  const customers = state.customers;

  return { customers };
};

export default connect(mapStateToProps)(CustomerList);
