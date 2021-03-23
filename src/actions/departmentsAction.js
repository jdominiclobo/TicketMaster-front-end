import axios from "../config/axios";

export const getDepartments = (departments) => {
  return {
    type: "SET-DEPARTMENTS",
    payload: departments,
  };
};

export const startGetDepartments = () => {
  return (dispatch) => {
    axios
      .get("/departments", {
        headers: {
          "x-auth": localStorage.getItem("authToken"),
        },
      })
      .then((response) => {
        const departments = response.data;
        dispatch(getDepartments(departments));
      });
  };
};

export const addDepartments = (department) => {
  return {
    type: "ADD-DEPARTMENT",
    payload: department,
  };
};

export const startAddDepartment = (formData, redirect) => {
  return (dispatch) => {
    axios
      .post("/departments", formData, {
        headers: {
          "x-auth": localStorage.getItem("authToken"),
        },
      })
      .then((response) => {
        const department = response.data;
        dispatch(addDepartments(department));
        redirect();
      });
  };
};

export const removeDepartment = (department) => {
  return {
    type: "REMOVE-DEPARTMENT",
    payload: department,
  };
};

export const startRemoveDepartment = (id) => {
  return (dispatch) => {
    axios
      .delete("/departments/" + id, {
        headers: {
          "x-auth": localStorage.getItem("authToken"),
        },
      })
      .then((response) => {
        const department = response.data;
        dispatch(removeDepartment(department));
      });
  };
};

export const editDepartment = (department) => {
  return {
    type: "EDIT-DEPARTMENT",
    payload: department,
  };
};

export const startEditDepartment = (id, formData, redirect) => {
  return (dispatch) => {
    axios
      .put("/departments/" + id, formData, {
        headers: {
          "x-auth": localStorage.getItem("authToken"),
        },
      })
      .then((response) => {
        const department = response.data;
        dispatch(editDepartment(department));
        redirect();
      });
  };
};
