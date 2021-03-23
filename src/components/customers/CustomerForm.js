import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { findCustomer } from "../../selectors/customerSelector";

class CustomerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.customer ? props.customer.name : "",
      email: props.customer ? props.customer.email : "",
      mobile: props.customer ? props.customer.mobile : "",
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
      mobile: this.state.mobile,
      email: this.state.email,
    };
    this.props.handleSubmit(formData);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} align="center">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <input
            type="mobile"
            placeholder="Mobile"
            name="mobile"
            value={this.state.mobile}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state, props) => {
  const id = props.match.params.id;
  return {
    customer: findCustomer(state.customers, id),
  };
};
export default withRouter(connect(mapStateToProps)(CustomerForm));
