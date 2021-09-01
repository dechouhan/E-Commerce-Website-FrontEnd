import { RESET_LOGIN_USER, SET_LOGIN_USER, SHOW_LOG, SIGNUP_USER } from ".";

export const signupUserAction = (data) => ({
  type: SIGNUP_USER,
  payload: data,
});

export const resetLoginUser = () => ({
  type: RESET_LOGIN_USER,
});

export const setLoginUser = (payload) => {
  localStorage.setItem("token", payload.token);
  localStorage.setItem("_id", payload._id);
  localStorage.setItem("name", payload.name);
  localStorage.setItem("email", payload.email);
  localStorage.setItem("city", payload.city);
  return { type: SET_LOGIN_USER, payload };
};

export const showLogUserAction = (data) => ({
  type: SHOW_LOG,
  payload: data,
});
