import { bindActionCreators } from "redux";
import {
  FETCH_ALL,
  FETCH_SORTED,
  FETCH_FILTERED,
} from "../constants/actionTypes";
export default (suggestions = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case "CREATE":
      return suggestions;
    case FETCH_SORTED:
      return action.payload;
    case FETCH_FILTERED:
      return action.payload;
    default:
      return suggestions;
  }
};
