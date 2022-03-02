import { FETCH_ALL, FETCH_FILTERED } from "../constants/actionTypes";
import * as api from "../api";

// Action Creators
// Must use redux thunk since we are working with asynchronous data
export const getSuggestions = () => async (dispatch) => {
  try {
    const { data } = await api.fetchSuggestions();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const filterSuggestions =
  ({ category, type, order }) =>
  async (dispatch) => {
    console.log(category, type, order);
    try {
      const { data } = await api.fetchFilteredSuggestions(
        category,
        type,
        order
      );
      dispatch({ type: FETCH_FILTERED, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };

export const setFilters = (filters) => async (dispatch) => {
  dispatch({ type: "CHANGE_TYPE", payload: filters });
};
