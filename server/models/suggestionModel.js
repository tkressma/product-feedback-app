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
          id: String,
          name: String,
          username: String,
        },
        replies: [
          {
            content: String,
            replyingTo: String,
            user: {
              id: String,
              name: String,
              username: String,
            },
          },
        ],
      },
    ],
  },
  { collection: "feedback" }
);

// Turns the schema into a mongoose model
const SuggestionModel = mongoose.model("SuggestionModel", suggestionSchema);

export default SuggestionModel;
