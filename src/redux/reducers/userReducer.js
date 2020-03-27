import * as actionType from "./../constants/actionType";

let initialState = {
    userAdmin: {}
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_USER_ADMIN:
      state.userAdmin = action.data;
      return { ...state };
    default:
      return { ...state };
  }
};

export default userReducer;
