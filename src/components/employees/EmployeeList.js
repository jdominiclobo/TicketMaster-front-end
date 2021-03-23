import React from "react";
import { connect } from "react-redux";
import { startRemoveEmployee } from "../../actions/employeesAction";

function EmployeeList(props) {
  const handleRemove = (id) => {
    const redirect = () => props.history.push("/employees");
    props.dispatch(startRemoveEmployee(id, redirect));
  };
  return (
    <div className="container">
      <h2>No. Of Employees -- {props.employees.length}</h2>
      <table className="table table-hover table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Number</th>
            <th>Department</th>
            <th>Actions</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {props.employees.map((emp) => {
            return (
              <tr key={emp._id}>
                <td>{emp._id}</td>
                <td>{emp.name}</td>
                <td>{emp.email}</td>
                <td>{emp.mobile}</td>
                <td>{emp.department.name}</td>
                <td>
                  <a href={"/employees/" + emp._id}>
                    <button className="btn btn-info" onClick={() => {}}>
                      Show
                    </button>
                  </a>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      handleRemove(emp._id);
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
      <a href="/employees/new">
        <button className="btn btn-info" onClick={() => {}}>
          Add Employee
        </button>
      </a>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    employees: state.employees,
  };
};

export default connect(mapStateToProps)(EmployeeList);
