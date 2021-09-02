import { RESET_LOGIN_USER, SET_LOGIN_USER, SIGNUP_USER } from "../Actions";

const initialState = {
  users: [],
  token: localStorage.getItem("token"),
};

const Users = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_USER:
      return {
        ...state,
        users: action.payload,
      };
    case SET_LOGIN_USER:
      return {
        ...state,
        token: action.payload.token,
      };
    case RESET_LOGIN_USER:
      return {
        ...state,
        token: null,
      };
    default:
      return state;
  }
};

export default Users;
