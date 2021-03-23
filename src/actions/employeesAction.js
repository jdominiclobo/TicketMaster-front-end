import axios from "../config/axios";

export const getEmployees = (employees) => {
  return {
    type: "GET-EMPLOYEES",
    payload: employees,
  };
};

export const startGetEmployees = () => {
  return (dispatch) => {
    axios
      .get("/employees", {
        headers: {
          "x-auth": localStorage.getItem("authToken"),
        },
      })
      .then((response) => {
        const employees = response.data;
        dispatch(getEmployees(employees));
        console.log("get", response);
      });
  };
};

export const addEmployee = (employee) => {
  return {
    type: "ADD-EMPLOYEE",
    payload: employee,
  };
};

export const startAddEmployee = (formData, redirect) => {
  return (dispatch) => {
    axios
      .post("/employees", formData, {
        headers: {
          "x-auth": localStorage.getItem("authToken"),
        },
      })
      .then((response) => {
        const employee = response.data;
        dispatch(addEmployee(employee));
        redirect();
        console.log("post", response);
      });
  };
};

export const editEmployee = (employee) => {
  return {
    type: "EDIT-EMPLOYEE",
    payload: employee,
  };
};

export const startEditEmployee = (formData, id, redirect) => {
  return (dispatch) => {
    axios
      .put("/employees/" + id, formData, {
        headers: {
          "x-auth": localStorage.getItem("authToken"),
        },
      })
      .then((response) => {
        const employee = response.data;
        dispatch(editEmployee(employee));
        redirect();
        console.log("put", response);
      });
  };
};

export const removeEmployee = (employee) => {
  return {
    type: "REMOVE-EMPLOYEE",
    payload: employee,
  };
};

export const startRemoveEmployee = (id, redirect) => {
  return (dispatch) => {
    axios
      .delete("/employees/" + id, {
        headers: {
          "x-auth": localStorage.getItem("authToken"),
        },
      })
      .then((response) => {
        const employee = response.data;
        dispatch(removeEmployee(employee));
        redirect();
      });
  };
};
