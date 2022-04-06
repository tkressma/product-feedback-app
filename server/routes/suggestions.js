import express from "express";
import {
  getSuggestion,
  addSuggestion,
  updateSuggestion,
  upvoteSuggestion,
  commentSuggestion,
  replyToComment,
  deleteComment,
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
router.patch("/:id", auth, updateSuggestion);
router.patch("/:id/upvote", auth, upvoteSuggestion);
router.post("/:id/comment", auth, commentSuggestion);
router.post("/:id/comment/reply", auth, replyToComment);
router.delete("/:suggestionId/comment/:commentId", auth, deleteComment);

export default router;
