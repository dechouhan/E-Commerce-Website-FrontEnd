import {
  RESET_LOGIN_USER,
  SET_LOGIN_USER,
  SHOW_LOG,
  SIGNUP_USER,
} from "../Actions";

const initialState = {
  users: [],
  token: localStorage.getItem("token"),
  _id: localStorage.getItem("_id"),
  username: localStorage.getItem("name"),
  email: localStorage.getItem("email"),
  city: localStorage.getItem("city"),
  loglist: [],
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
        _id: action.payload._id,
        username: action.payload.name,
        email: action.payload.email,
        city: action.payload.city,
      };
    case RESET_LOGIN_USER:
      return {
        ...state,
        token: null,
        _id: null,
        username: null,
        email: null,
        city: null,
      };
    case SHOW_LOG:
      return {
        ...state,
        loglist: action.payload,
      };
    default:
      return state;
  }
};

export default Users;
