import { FETCH_ALL, FETCH_FILTERED } from "../constants/actionTypes";
import * as api from "../api";

// Action Creators - Must use redux thunk since we are working with asynchronous data

// Returns all suggestions
export const getSuggestions = () => async (dispatch) => {
  try {
    const { data } = await api.fetchSuggestions();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

// Returns suggestions that meet filter criteria (category, type, and order)
// Category - All, UI, UX, Enhancement, Bug, Feature
// Type - Upvotes or Comments
// Order - Ascending (Least) or Descending (Most)
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

// Updates the filters currently selected by the user. This allows for
// the search to work synchronously despite being in two seperate components.
// Category component - SuggestionTag.js
// Upvotes and Comments sort component - SuggestionsBar.js
export const setFilters = (filters) => async (dispatch) => {
  dispatch({ type: "CHANGE_TYPE", payload: filters });
};
