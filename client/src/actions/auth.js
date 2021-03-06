import { AUTH } from "../constants/actionTypes";
import * as api from "../api";

export const signin = (formData, navigate) => async (dispatch) => {
  try {
    // Log in the user
    const { data } = await api.signIn(formData);
    dispatch({ type: AUTH, data });
    navigate(-1);
  } catch (error) {
    console.log(error.message);
  }
};

export const signup = (formData, navigate) => async (dispatch) => {
  try {
    // Create a new user
    const { data } = await api.signUp(formData);
    dispatch({ type: AUTH, data });
    navigate(-1);
  } catch (error) {
    console.log(error.message);
  }
};
