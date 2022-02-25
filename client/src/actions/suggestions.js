import * as api from "../api";

// Action Creators
// Must use redux thunk since we are working with asynchronous data
export const getSuggestions = () => async (dispatch) => {
  try {
    const { data } = await api.fetchSuggestions();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const sortByUpvotesAPI =
  ({ dataType, order }) =>
  async (dispatch) => {
    try {
      const { data } = await api.fetchSortedSuggestions(dataType, order);
      dispatch({ type: "FETCH_SORTED", payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
