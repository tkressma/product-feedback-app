import {
  FETCH_FILTERED,
  FETCH_SUGGESTION,
  CREATE_SUGGESTION,
  UPDATE_SUGGESTION,
  DELETE_SUGGESTION,
  UPVOTE,
  COMMENT,
  REPLY,
  START_LOADING,
  END_LOADING,
  CHANGE_FILTERS,
} from "../constants/actionTypes";
import * as api from "../api";

// The following code is used to generate a username for users signed in with GoogleOAuth.
const generateGoogleUsername = (user) => {
  return (
    user?.result.name.split(" ").join("").toLowerCase() +
    String(user?.result.googleId).slice(0, 3)
  );
};

// Action Creators - Must use redux thunk since we are working with asynchronous data

export const getSuggestion = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchSuggestion(id);

    dispatch({ type: FETCH_SUGGESTION, payload: { suggestion: data } });
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

export const updateSuggestion = (id, formData) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.updateSuggestion(id, formData);
    dispatch({ type: UPDATE_SUGGESTION, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteSuggestion = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    await api.deleteSuggestion(id);
    dispatch({ type: DELETE_SUGGESTION, payload: id });
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

      // Retrieve the filtered suggestions based on status for the roadmap
      const planned = data.filter(
        (suggestion) => suggestion.status === "planned"
      );
      const inProgress = data.filter(
        (suggestion) => suggestion.status === "in-progress"
      );
      const live = data.filter((suggestion) => suggestion.status === "live");

      const roadmap = {
        planned: planned,
        "in-progress": inProgress,
        live: live,
      };

      // Payload containing all sorted suggestions as well as suggestions
      // that are in the roadmap
      let suggestionData = { data, roadmap };

      dispatch({ type: FETCH_FILTERED, payload: suggestionData });
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

export const commentSuggestion = (comment, id) => async (dispatch) => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const username = user?.result.username || generateGoogleUsername(user);
  const userId = user?.result.id || user?.result.googleId;

  const commentData = {
    content: comment,
    user: {
      id: userId,
      name: user?.result?.name, // Add full name to comment data
      username: username, // Add username to comment data
    },
  };

  try {
    const { data } = await api.commentSuggestion(commentData, id);
    dispatch({ type: COMMENT, payload: data });
    return data.comments; // Return all the comments on the suggestion to reflect comment changes on the front end
  } catch (error) {
    console.log(error.message);
  }
};

export const replyToComment =
  (comment, replyUser, id, parentCommentId) => async (dispatch) => {
    const user = JSON.parse(localStorage.getItem("profile"));
    const username = user?.result.username || generateGoogleUsername(user);
    const userId = user?.result.id || user?.result.googleId;
    const replyData = {
      content: comment,
      replyingTo: replyUser,
      user: {
        id: userId,
        name: user?.result?.name, // Add full name to comment data
        username: username, // Add username to comment data
      },
    };
    try {
      const { data } = await api.replyToComment(replyData, id, parentCommentId);
      dispatch({ type: REPLY, payload: data });
      return data.comments.find((comment) => comment._id === parentCommentId)
        .replies;
    } catch (error) {
      console.log(error.message);
    }
  };
