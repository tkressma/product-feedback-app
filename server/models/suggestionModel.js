import mongoose from "mongoose";

const suggestionSchema = mongoose.Schema(
  {
    title: String,
    category: String,
    name: String, // Full name of user
    username: String, // Username of user
    creator: String, // ID of user
    createdAt: {
      type: Date,
      default: new Date(),
    },
    upvotes: { type: [String], default: [] },
    status: String,
    description: String,
    comments: [
      {
        content: String,
        user: {
          image: String,
          name: String,
          username: String,
        },
      },
    ],
  },
  { collection: "feedback" }
);

// Turns the schema into a mongoose model
const SuggestionModel = mongoose.model("SuggestionModel", suggestionSchema);

export default SuggestionModel;
