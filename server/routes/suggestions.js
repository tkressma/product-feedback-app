import express from "express";
import {
  getSuggestions,
  addSuggestion,
  getSortedSuggestions,
} from "../controllers/suggestions.js";

// Initialize express router
const router = express.Router();

// Routes starting with '/suggestions'
router.get("/", getSuggestions);
router.post("/", addSuggestion);
router.get("/sort", getSortedSuggestions);
export default router;
