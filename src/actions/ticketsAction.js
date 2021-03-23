import axios from "../config/axios";

export const getTickets = (tickets) => {
  return {
    type: "SET-TICKETS",
    payload: tickets,
  };
};

export const startGetTickets = () => {
  return (dispatch) => {
    axios
      .get("/tickets", {
        headers: {
          "x-auth": localStorage.getItem("authToken"),
        },
      })
      .then((response) => {
        const tickets = response.data;
        dispatch(getTickets(tickets));
      });
  };
};

export const addTicket = (ticket) => {
  return {
    type: "ADD-TICKET",
    payload: ticket,
  };
};

export const startAddTicket = (formData, redirect) => {
  return (dispatch) => {
    axios
      .post("/tickets", formData, {
        headers: {
          "x-auth": localStorage.getItem("authToken"),
        },
      })
      .then((response) => {
        console.log(response);
        const ticket = response.data;
        dispatch(addTicket(ticket));
        redirect();
      });
  };
};
export const removeTicket = (ticket) => {
  return {
    type: "REMOVE-TICKET",
    payload: ticket,
  };
};

export const startRemoveTicket = (id) => {
  return (dispatch) => {
    axios
      .delete("/tickets/" + id, {
        headers: {
          "x-auth": localStorage.getItem("authToken"),
        },
      })
      .then((response) => {
        console.log("remove", response);
        const ticket = response.data;
        dispatch(removeTicket(ticket));
      });
  };
};

const editTicket = (ticket) => {
  return {
    type: "EDIT-TICKET",
    payload: ticket,
  };
};
export const startEditTicket = (formData, id) => {
  return (dispatch) => {
    axios
      .put("/tickets/" + id, formData, {
        headers: {
          "x-auth": localStorage.getItem("authToken"),
        },
      })
      .then((response) => {
        console.log("edit", response.data);
        const ticket = response.data;
        dispatch(editTicket(ticket));
      });
  };
};
