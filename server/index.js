import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import suggestionRoutes from "./routes/suggestions.js";
import userRoutes from "./routes/users.js";

// Initialize app
const app = express();
// Initialize environment variables
dotenv.config();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// Using express middleware to connect routes to our application
app.use("/suggestions", suggestionRoutes);
app.use("/user", userRoutes);

// Connect app to MongoDB
// Temporary database access before implementing environmental variables
const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error));
