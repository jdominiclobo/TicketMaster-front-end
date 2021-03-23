import axios from "../config/axios";

export const startRegister = (formData, redirect) => {
  return () => {
    axios.post("/users/register", formData).then((response) => {
      if (response.data.hasOwnProperty("errors")) {
        alert(response.data.message);
      } else {
        redirect();
      }
    });
  };
};

export const setUser = (user) => {
  return {
    type: "SET-USER",
    payload: user,
  };
};

export const startSetUser = () => {
  return (dispatch) => {
    axios
      .get("/users/account", {
        headers: {
          "x-auth": localStorage.getItem("authToken"),
        },
      })
      .then((response) => {
        const user = response.data;
        dispatch(setUser(user));
      });
  };
};

export const startLogin = (formData, redirect) => {
  return (dispatch) => {
    axios.post("/users/login", formData).then((response) => {
      if (response.data.hasOwnProperty("error")) {
        alert(response.data.error);
      } else {
        localStorage.setItem("authToken", response.data.token);
        axios
          .get("/users/account", {
            headers: {
              "x-auth": localStorage.getItem("authToken"),
            },
          })
          .then((response) => {
            const user = response.data;
            dispatch(setUser(user));
            redirect();
          });
      }
    });
  };
};

export const removeUser = () => {
  return {
    type: "REMOVE-USER",
  };
};

export const startLogout = () => {
  return (dispatch) => {
    axios
      .delete("/users/logout", {
        headers: {
          "x-auth": localStorage.getItem("authToken"),
        },
      })
      .then((response) => {
        if (response.data.notice) {
          localStorage.removeItem("authToken");
          dispatch(removeUser());
        }
      });
  };
};
