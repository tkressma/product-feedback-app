import express from "express";
import {
  getSuggestions,
  addSuggestion,
  upvoteSuggestion,
  getFilteredSuggestions,
  deleteSuggestion,
} from "../controllers/suggestions.js";

import auth from "../middleware/auth.js";

// Initialize express router
const router = express.Router();

// Routes starting with '/suggestions'
router.get("/", getSuggestions);
router.post("/", auth, addSuggestion);
router.delete(`/:id`, auth, deleteSuggestion);
router.get("/filter", getFilteredSuggestions);
router.patch("/:id/upvote", auth, upvoteSuggestion);

export default router;
