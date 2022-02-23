import mongoose from "mongoose";

const suggestionSchema = mongoose.Schema(
  {
    title: String,
    category: String,
    upvotes: Number,
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
