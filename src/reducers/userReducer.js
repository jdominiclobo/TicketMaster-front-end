const userInitialValue = {};

const userReducer = (state = userInitialValue, action) => {
  switch (action.type) {
    case "SET-USER": {
      return { ...action.payload };
    }
    case "REMOVE-USER": {
      return userInitialValue;
    }
    default: {
      return { ...state };
    }
  }
};

export default userReducer;
