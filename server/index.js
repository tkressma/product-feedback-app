import express from "express";
import mongoose from "mongoose";
import cors from "cors";

// Initialize app
const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// Connect app to MongoDB
// Temporary database access before implementing environmental variables
const CONNECTION_URL =
  "mongodb+srv://project:project123@cluster0.7lz57.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error));
