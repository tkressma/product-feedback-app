import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000",
});

// This occurs before every individual API request.
// Sends the token to the backend to verify the client is logged in.
// The middleware in the backend checks the request headers for a token.
API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

export const fetchSuggestion = (id) => API.get(`/suggestions/${id}`);

export const fetchFilteredSuggestions = (category, type, order) =>
  API.get(
    `/suggestions/filter?category=${category}&type=${type}&order=${order}`
  );

export const createSuggestion = (newSuggestion) =>
  API.post("/suggestions", newSuggestion);

export const updateSuggestion = (id, formData) =>
  API.patch(`/suggestions/${id}`, formData);

export const deleteSuggestion = (id) => API.delete(`/suggestions/${id}`);

export const upvoteSuggestion = (id) => API.patch(`/suggestions/${id}/upvote`);
export const commentSuggestion = (comment, id) =>
  API.post(`/suggestions/${id}/comment`, { comment });

export const replyToComment = (comment, id, parentCommentId) =>
  API.post(`/suggestions/${id}/comment/reply`, { comment, parentCommentId });

export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);
