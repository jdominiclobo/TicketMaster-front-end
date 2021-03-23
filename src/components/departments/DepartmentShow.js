import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { findDepartment } from "../../selectors/departmentSelector";
import CustomerTicketDisplay from "../customers/CustomerTicketDisplay";

function DepartmentShow(props) {
  const { _id, name } = props.department || {};
  return (
    <div>
      <Link to={"/departments/edit/" + _id}>Edit</Link>
      <h2>Dept : {name}</h2>
      <br />
      <CustomerTicketDisplay
        tickets={props.tickets.filter((tkt) => tkt.department === _id)}
      />
      <br />
      <Link to="/customers">back</Link>
    </div>
  );
}

const mapStateToProps = (state, props) => {
  const id = props.match.params.id;
  return {
    department: findDepartment(state.departments, id),
    tickets: state.tickets,
  };
};

export default connect(mapStateToProps)(DepartmentShow);
