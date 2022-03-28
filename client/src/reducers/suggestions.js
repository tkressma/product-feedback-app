import {
  FETCH_ALL,
  FETCH_FILTERED,
  CREATE_SUGGESTION,
  DELETE_SUGGESTION,
  START_LOADING,
  END_LOADING,
  CHANGE_FILTERS,
  UPVOTE,
  FETCH_SUGGESTION,
  UPDATE_SUGGESTION,
  ADD_COMMENT,
} from "../constants/actionTypes";
export default (
  state = {
    isLoading: true,
    suggestions: [],
    filters: { sortCategory: "All", sortType: "upvotes", sortOrder: "desc" },
  },
  action
) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    case FETCH_ALL:
      return { ...state, suggestions: action.payload };
    case FETCH_SUGGESTION:
      return { ...state, suggestion: action.payload.suggestion };
    case CREATE_SUGGESTION:
      return {
        ...state,
        suggestions: [...state.suggestions, action.payload],
      };
    case UPDATE_SUGGESTION:
      return {
        ...state,
        suggestions: state.suggestions.map((suggestion) =>
          suggestion._id === action.payload._id ? action.payload : suggestion
        ),
      };
    case DELETE_SUGGESTION:
      return {
        ...state,
        suggestions: state.suggestions.filter(
          (suggestion) => suggestion._id !== action.payload
        ),
      };
    case UPVOTE:
      return {
        ...state,
        suggestions: state.suggestions.map((suggestion) =>
          suggestion._id === action.payload._id ? action.payload : suggestion
        ),
      };
    case CHANGE_FILTERS:
      return { ...state, filters: { ...action.payload } };
    case FETCH_FILTERED:
      return { ...state, suggestions: action.payload };
    default:
      return state;
  }
};
