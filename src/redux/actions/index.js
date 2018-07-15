import * as Type from "./ActionTypes";

export const loginUser = (email, password) => {
  return {
    type: Type.LOGIN_USER,
    email,
    password
  };
};

export const signupUser = (name, organization, country, email, password) => {
  return {
    type: Type.SIGNUP_USER,
    name,
    organization,
    country,
    email,
    password
  };
};
