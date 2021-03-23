import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { findCustomer } from "../../selectors/customerSelector";
import CustomerTicketDisplay from "./CustomerTicketDisplay";

function CustomerShow(props) {
  const { _id, name, email, mobile } = props.customer || {};
  return (
    <div>
      <Link to={"/customers/edit/" + _id}>Edit</Link>
      <h2>Customer id == {_id}</h2>
      <h3>
        Name :{name} || {email} ||| {mobile}
      </h3>
      <CustomerTicketDisplay
        tickets={props.tickets.filter((tkt) => tkt.customer === _id)}
      />
      <br />
      <Link to="/customers">back</Link>
    </div>
  );
}

const mapStateToProps = (state, props) => {
  console.log(state, props);
  const id = props.match.params.id;
  return {
    customer: findCustomer(state.customers, id),
    tickets: state.tickets,
  };
};

export default connect(mapStateToProps)(CustomerShow);
