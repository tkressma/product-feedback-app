import {
  FETCH_ALL,
  FETCH_FILTERED,
  CREATE_SUGGESTION,
  UPVOTE,
  START_LOADING,
  END_LOADING,
  CHANGE_FILTERS,
} from "../constants/actionTypes";
import * as api from "../api";

// Action Creators - Must use redux thunk since we are working with asynchronous data

// Returns all suggestions
export const getSuggestions = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchSuggestions();
    dispatch({ type: FETCH_ALL, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error.message);
  }
};

export const createSuggestion = (newSuggestion) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.createSuggestion(newSuggestion);
    dispatch({ type: CREATE_SUGGESTION, payload: data });
    dispatch({ type: END_LOADING });
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
    try {
      dispatch({ type: START_LOADING });

      const { data } = await api.fetchFilteredSuggestions(
        category,
        type,
        order
      );

      dispatch({ type: FETCH_FILTERED, payload: data });
      dispatch({ type: END_LOADING });
    } catch (error) {
      console.log(error.message);
    }
  };

// Updates the filters currently selected by the user. This allows for
// the search to work synchronously despite being in two seperate components.
// Category component - SuggestionTag.js
// Upvotes and Comments sort component - SuggestionsBar.js
export const setFilters = (filters) => async (dispatch) => {
  dispatch({ type: CHANGE_FILTERS, payload: filters });
};

export const upvoteSuggestion = (id) => async (dispatch) => {
  try {
    const { data } = await api.upvoteSuggestion(id);
    dispatch({ type: UPVOTE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
