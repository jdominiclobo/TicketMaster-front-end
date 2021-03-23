import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { findEmployee } from "../../selectors/employeeSelector";
import CustomerTicketDisplay from "../customers/CustomerTicketDisplay";

function EmployeeShow(props) {
  const { _id, name } = props.employee || {};
  return (
    <div>
      <Link to={"/employees/edit/" + _id}>Edit</Link>
      <h2>Employee : {name}</h2>
      <CustomerTicketDisplay
        tickets={
          props.tickets.filter((tkt) => {
            const filteredTkt = tkt.employees.find((emp) => emp._id === _id);
            if (filteredTkt) {
              return tkt;
            } else {
              return false;
            }
          }) || []
        }
      />
      <br />
      <Link to="/employees">back</Link>
    </div>
  );
}

const mapStateToProps = (state, props) => {
  const id = props.match.params.id;
  return {
    employee: findEmployee(state.employees, id),
  };
};

export default connect(mapStateToProps)(EmployeeShow);
