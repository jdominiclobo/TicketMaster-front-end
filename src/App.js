import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import Login from "./components/auth/Login";
import Home from "./components/Home";
import Register from "./components/auth/Register";
import Account from "./components/auth/Account";

import CustomerList from "./components/customers/CustomerList";
import CustomerShow from "./components/customers/CustomerShow";
import CustomerNew from "./components/customers/CustomerNew";
import CustomerEdit from "./components/customers/CustomerEdit";

import DepartmentList from "./components/departments/DepartmentList";
import DepartmentShow from "./components/departments/DepartmentShow";
import DepartmentEdit from "./components/departments/DepartmentEdit";

import EmployeeList from "./components/employees/EmployeeList";
import EmployeeNew from "./components/employees/EmployeeNew";
import EmployeeShow from "./components/employees/EmployeeShow";
import EmployeeEdit from "./components/employees/EmployeeEdit";

import TicketList from "./components/tickets/TicketList";
import TicketNew from "./components/tickets/TicketNew";
import TicketShow from "./components/tickets/TicketShow";
import TicketEdit from "./components/tickets/TicketEdit";

import { startLogout } from "./actions/userAction";

function App(props) {
  const handleClick = () => {
    props.dispatch(startLogout());
  };
  return (
    <BrowserRouter>
      {Object.keys(props.user).length === 0 ? (
        <nav className="mb-5 navbar navbar-expand-md navbar-light bg-light">
          <a className="navbar-brand" href="/">
            Ticket Master
          </a>
          <ul className="ml-auto navbar-nav">
            <li className="nav-item">
              <a className="nav-link text-primary" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-primary" href="/users/login">
                {" "}
                Login
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-primary" href="/users/register">
                {" "}
                Register
              </a>
            </li>
          </ul>
        </nav>
      ) : (
        <nav className="mb-5 navbar navbar-expand-md navbar-light bg-light">
          <a className="navbar-brand" href="/">
            Ticket Master
          </a>
          <ul className="ml-auto navbar-nav">
            <li className="nav-item">
              <a className="nav-link text-primary" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-primary" href="/customers">
                {" "}
                Customers{" "}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-primary" href="/departments">
                {" "}
                Departments{" "}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-primary" href="/employees">
                {" "}
                Employees{" "}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-primary" href="/tickets">
                {" "}
                Tickets{" "}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-primary" href="/account">
                {" "}
                Account{" "}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-primary"
                href="javascript:void()"
                onClick={handleClick}
              >
                {" "}
                Logout{" "}
              </a>
            </li>
          </ul>
        </nav>
      )}
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/users/login" component={Login} />
        <Route path="/users/register" component={Register} />

        <Route path="/customers" component={CustomerList} exact={true} />
        <Route path="/customers/new" component={CustomerNew} />
        <Route path="/customers/edit/:id" component={CustomerEdit} />
        <Route path="/customers/:id" component={CustomerShow} />

        <Route path="/departments" component={DepartmentList} exact={true} />
        <Route path="/departments/edit/:id" component={DepartmentEdit} />
        <Route path="/departments/:id" component={DepartmentShow} />

        <Route path="/employees" component={EmployeeList} exact={true} />
        <Route path="/employees/new" component={EmployeeNew} />
        <Route path="/employees/edit/:id" component={EmployeeEdit} />
        <Route path="/employees/:id" component={EmployeeShow} />

        <Route path="/tickets" component={TicketList} exact={true} />
        <Route path="/tickets/new" component={TicketNew} />
        <Route path="/tickets/edit/:id" component={TicketEdit} />
        <Route path="/tickets/:id" component={TicketShow} />

        <Route path="/account" component={Account} />
      </Switch>
    </BrowserRouter>
  );
}
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
export default connect(mapStateToProps)(App);
