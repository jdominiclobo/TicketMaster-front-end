import axios from "../config/axios";

export const setCustomers = (customers) => {
  return {
    type: "SET-CUSTOMERS",
    payload: customers,
  };
};

export const startGetCustomers = () => {
  return (dispatch) => {
    axios
      .get("/customers", {
        headers: {
          "x-auth": localStorage.getItem("authToken"),
        },
      })
      .then((response) => {
        dispatch(setCustomers(response.data));
      });
  };
};

export const addCustomer = (customer) => {
  return {
    type: "ADD-CUSTOMER",
    payload: customer,
  };
};

export const startAddCustomer = (formData, redirect) => {
  return (dispatch) => {
    axios
      .post("/customers", formData, {
        headers: {
          "x-auth": localStorage.getItem("authToken"),
        },
      })
      .then((response) => {
        if (response.data.hasOwnProperty("createdAt"))
          dispatch(addCustomer(response.data));
        redirect();
      });
  };
};

export const removeCustomer = (customer) => {
  return {
    type: "REMOVE-CUSTOMER",
    payload: customer,
  };
};

export const startRemoveCustomer = (id) => {
  return (dispatch) => {
    axios
      .delete("/customers/" + id, {
        headers: {
          "x-auth": localStorage.getItem("authToken"),
        },
      })
      .then((response) => {
        const customer = response.data;
        dispatch(removeCustomer(customer));
      });
  };
};

export const editCustomer = (customer) => {
  return {
    type: "EDIT-CUSTOMER",
    payload: customer,
  };
};

export const startEditCustomer = (id, formData, redirect) => {
  return (dispatch) => {
    axios
      .put("/customers/" + id, formData, {
        headers: {
          "x-auth": localStorage.getItem("authToken"),
        },
      })
      .then((response) => {
        if (!response.data.hasOwnProperty("errors"))
          dispatch(editCustomer(response.data));
        redirect();
      });
  };
};
