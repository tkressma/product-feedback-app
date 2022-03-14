import express from "express";
import {
  getSuggestion,
  addSuggestion,
  upvoteSuggestion,
  getFilteredSuggestions,
  deleteSuggestion,
} from "../controllers/suggestions.js";

import auth from "../middleware/auth.js";

// Initialize express router
const router = express.Router();

// Routes starting with '/suggestions'
router.get("/filter", getFilteredSuggestions);
router.get("/:id", getSuggestion);
router.post("/", auth, addSuggestion);
router.delete(`/:id`, auth, deleteSuggestion);
router.patch("/:id/upvote", auth, upvoteSuggestion);

export default router;
