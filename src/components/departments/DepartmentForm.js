import React from "react";
import { connect } from "react-redux";

import { findDepartment } from "../../selectors/departmentSelector";
import { withRouter } from "react-router-dom";

class DepartmentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.department ? props.department.name : "",
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: this.state.name,
    };
    this.props.handleSubmit(formData);
    this.setState({ name: "" });
  };
  render() {
    return (
      <div>
        <form className="" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              placeholder="Department Name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <br />
            <input type="submit" value="Add" />
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  const id = props.match.params.id;
  return {
    department: findDepartment(state.departments, id),
  };
};

export default withRouter(connect(mapStateToProps)(DepartmentForm));
