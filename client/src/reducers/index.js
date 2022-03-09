import { combineReducers } from "redux";
import suggestions from "./suggestions";
import auth from "./auth";

// Gathers the results from all the reducers into a single state object by calling each of them seperately.
export default combineReducers({ suggestions, auth });
