import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const fetchSuggestions = () => API.get("/suggestions");

export const fetchFilteredSuggestions = (category, type, order) =>
  API.get(
    `/suggestions/filter?category=${category}&type=${type}&order=${order}`
  );

export const createSuggestion = (newSuggestion) =>
  API.post("/suggestions", newSuggestion);

export const upvoteSuggestion = (id) => API.patch(`/suggestions/${id}/upvote`);

export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);
