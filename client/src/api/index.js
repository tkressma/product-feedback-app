import axios from "axios";

const url = "http://localhost:5000/suggestions";

export const fetchSuggestions = () => axios.get(url);
export const fetchSortedSuggestions = (type, order) =>
  axios.get(`${url}/sort?type=${type}&order=${order}`);
