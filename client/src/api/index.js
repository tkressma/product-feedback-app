import axios from "axios";

const url = "http://localhost:5000/suggestions";

export const fetchSuggestions = () => axios.get(url);
