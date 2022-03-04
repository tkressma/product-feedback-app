import {
  FETCH_ALL,
  FETCH_FILTERED,
  CREATE_SUGGESTION,
  START_LOADING,
  END_LOADING,
  CHANGE_FILTERS,
} from "../constants/actionTypes";
export default (
  state = {
    isLoading: true,
    suggestions: [],
    filters: { sortCategory: "all", sortType: "upvotes", sortOrder: "desc" },
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
    case CREATE_SUGGESTION:
      return {
        ...state,
        suggestions: [...state.suggestions, action.payload],
      };
    case CHANGE_FILTERS:
      return { ...state, filters: { ...action.payload } };
    case FETCH_FILTERED:
      return { ...state, suggestions: action.payload };
    default:
      return state;
  }
};
