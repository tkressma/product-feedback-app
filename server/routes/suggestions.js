import express from "express";
import {
  getSuggestions,
  addSuggestion,
  getSortedSuggestions,
  getFilteredSuggestions,
} from "../controllers/suggestions.js";

// Initialize express router
const router = express.Router();

// Routes starting with '/suggestions'
router.get("/", getSuggestions);
router.post("/", addSuggestion);
router.get("/sort", getSortedSuggestions);
router.get("/filter", getFilteredSuggestions);
export default router;
