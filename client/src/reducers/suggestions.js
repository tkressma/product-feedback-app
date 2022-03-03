import {
  FETCH_ALL,
  FETCH_FILTERED,
  CREATE_SUGGESTION,
} from "../constants/actionTypes";
export default (suggestions = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE_SUGGESTION:
      return suggestions;
    case FETCH_FILTERED:
      return action.payload;
    default:
      return suggestions;
  }
};
