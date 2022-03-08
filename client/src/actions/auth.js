import { AUTH } from "../constants/actionTypes";
import * as api from "../api";

export const signin = (formData, navigate) => async (dispatch) => {
  try {
    // Log in the user
    navigate("/");
  } catch (error) {
    console.log(error.message);
  }
};

export const signup = (formData, navigate) => async (dispatch) => {
  try {
    // Sign in the user
    navigate("/");
  } catch (error) {
    console.log(error.message);
  }
};
