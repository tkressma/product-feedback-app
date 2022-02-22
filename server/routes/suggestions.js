import express from "express";
import { getSuggestions, addSuggestion } from "../controllers/suggestions.js";

// Initialize express router
const router = express.Router();

// Routes starting with '/suggestions'
router.get("/", getSuggestions);
router.post("/", addSuggestion);

export default router;
