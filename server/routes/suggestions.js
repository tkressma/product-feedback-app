import express from "express";
import {
  getSuggestions,
  addSuggestion,
  getSortedSuggestions,
  getFilteredSuggestions,
  upvoteSuggestion,
} from "../controllers/suggestions.js";

// Initialize express router
const router = express.Router();

// Routes starting with '/suggestions'
router.get("/", getSuggestions);
router.post("/", addSuggestion);
router.get("/sort", getSortedSuggestions);
router.get("/filter", getFilteredSuggestions);
router.patch("/upvote", upvoteSuggestion);
export default router;
