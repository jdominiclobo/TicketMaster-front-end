import React from "react";
import { connect } from "react-redux";
import DepartmentForm from "./DepartmentForm";
import {
  startAddDepartment,
  startRemoveDepartment,
} from "../../actions/departmentsAction";

function DepartmentList(props) {
  const handleRemove = (id) => {
    props.dispatch(startRemoveDepartment(id));
  };

  const handleSubmit = (formData) => {
    const redirect = () => {
      props.history.push("/departments");
    };
    props.dispatch(startAddDepartment(formData, redirect));
  };
  return (
    <div className="container">
      <h2>No. Of Departments -- {props.departments.length}</h2>
      <ul className="list-group">
        {props.departments.map((dept) => {
          return (
            <li key={dept._id} className="list-group-item">
              {dept.name}
              <button
                className="float-right btn btn-danger"
                onClick={() => handleRemove(dept._id)}
              >
                {" "}
                Remove{" "}
              </button>
              <a href={"/departments/" + dept._id}>
                <button
                  className="float-right mr-5 btn btn-info"
                  onClick={() => {}}
                >
                  {" "}
                  Show{" "}
                </button>
              </a>
            </li>
          );
        })}
        <h2>Add Department</h2>
        <DepartmentForm handleSubmit={handleSubmit} />
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    departments: state.departments,
  };
};

export default connect(mapStateToProps)(DepartmentList);
