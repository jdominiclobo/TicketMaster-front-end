import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import customersReducer from "../reducers/customersReducer";
import employeesReducer from "../reducers/employeesReducer";
import departmentsReducer from "../reducers/departmentsRerducer";
import userReducer from "../reducers/userReducer";
import ticketsReducer from "../reducers/ticketsReducer";

const configureStore = () => {
  const store = createStore(
    combineReducers({
      user: userReducer,
      customers: customersReducer,
      departments: departmentsReducer,
      employees: employeesReducer,
      tickets: ticketsReducer,
    }),
    applyMiddleware(thunk)
  );
  return store;
};

export default configureStore;
