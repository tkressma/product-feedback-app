import express from "express";
import { getSuggestions } from "../controllers/suggestions.js";

// Initialize express router
const router = express.Router();

// Routes starting with '/suggestions'
router.get("/", getSuggestions);

export default router;
