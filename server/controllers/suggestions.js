/* This file contains all of the handlers (logic and functionality) for our routes.
   The purpose of having this file is to keep our code organized and maintainable. */

import mongoose from "mongoose";
import SuggestionModel from "../models/suggestionModel.js";

/* Retrieve a single suggestion */
export const getSuggestion = async (req, res) => {
  const { id } = req.params;

  try {
    const suggestion = await SuggestionModel.findOne({ _id: id });
    res.status(200).json(suggestion);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

/* Create a suggestion */
export const addSuggestion = async (req, res) => {
  // Retrieve suggestion data from the user
  const suggestion = req.body;

  // Generates a username for google sign-in users
  // This is done by combining the first and last name and adding the
  // first 3 digits of their unique user ID.
  const googleUsername =
    suggestion.name.split(" ").join("").toLowerCase() +
    String(req.userId).slice(0, 3);

  // Create a new suggestion using the schema model
  const newSuggestion = new SuggestionModel({
    ...suggestion,
    username: suggestion.username || googleUsername,
    creator: req.userId,
    createdAt: new Date().toISOString(),
  });

  try {
    await newSuggestion.save();
    res.status(201).json(newSuggestion); // Success in creating suggestion
  } catch (error) {
    res.status(409).json({ message: error.message }); // Conflict
  }
};

/* Delete a suggestion */
export const deleteSuggestion = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  await SuggestionModel.findByIdAndRemove(id);

  res.json({ message: "Suggestion deleted successfully." });
};

/* Update a suggestion */
export const updateSuggestion = async (req, res) => {
  const { id } = req.params;
  const { title, category, description } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  await SuggestionModel.findOneAndUpdate(
    { _id: id },
    { title: title, category: category, description: description }
  );

  res.json({ message: "Suggestion update successfully" });
};

export const getFilteredSuggestions = async (req, res) => {
  const { category, type, order } = req.query;

  // IF the category chose is "All", then return all suggestions and apply the remaining filters.
  // ELSE return all suggestions with the given category and apply the filters on that data set.
  const query = category === "All" ? {} : { category: category };
  const suggestions = await SuggestionModel.find(query);

  // Since Mongoose Model.find() returns an instance of Mongoose's Query class,
  // 'suggestions' must first be converted to a JSON in order for me to retrieve
  // comment replies data. Without doing this, replies will return undefined
  // because _id = new ObjectID would cause the entire comment to return undefined.
  let sortedSuggestions = JSON.parse(JSON.stringify(suggestions));

  try {
    const isComment = type === "comments" ? true : false;
    if (order === "desc") {
      // Most upvotes or comments
      sortedSuggestions = sort(sortedSuggestions, "desc", type, isComment);
    } else if (order === "asc") {
      // Least upvotes or comments
      sortedSuggestions = sort(sortedSuggestions, "asc", type, isComment);
    }
    res.status(200).json(sortedSuggestions);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Sorts all suggestions based on order (most/least) or type (upvotes/comments)
// This is a custom sort designed with comments and replies in mind.
// If I were to have used Mongoose search queries to retrieve suggestions with
// the most comments first, it would return the length of the comments array,
// which DOES NOT account for reply comments.
function sort(arr, order, type, isComment) {
  return arr.sort(function (a, b) {
    let curr = a[type].length;
    let next = b[type].length;

    // If the type of data being sorted is a comment, retrieve all comment data
    // including all replies to comments on that suggestion.
    if (isComment) {
      let currReplies = addReplies(a[type]);
      let nextReplies = addReplies(b[type]);

      curr = a[type].length + currReplies;
      next = b[type].length + nextReplies;
    }

    if (order === "desc") {
      // Sorts based on most upvotes or comments
      if (curr > next) return -1;
      if (next > curr) return 1;
      return 0;
    } else {
      // Sorts based on least upvotes or comments
      if (curr > next) return 1;
      if (next > curr) return -1;
      return 0;
    }
  });
}

// Checks every comment in the suggestion for replies and returns a running total.
function addReplies(arr) {
  let totalReplies = 0;

  // If replies exist, add that to the total replies. Else, set the value to 0.
  arr.forEach((comment) => {
    totalReplies += comment?.replies?.length || 0;
  });

  return totalReplies;
}

export const upvoteSuggestion = async (req, res) => {
  const { id } = req.params;

  // User is not signed in
  if (!req.userId) return req.json({ message: "Unauthorized user" });

  // Determine if a suggestion with the given ID is in the database, else return 404
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No suggestions with id ${id} exist`);

  // Retrieve the suggestion with the ID
  const suggestion = await SuggestionModel.findById(id);

  const index = suggestion.upvotes.findIndex((id) => id === String(req.userId));

  if (index === -1) {
    // Like the suggestion
    suggestion.upvotes.push(req.userId);
  } else {
    // Remove a like
    suggestion.upvotes = suggestion.upvotes.filter(
      (id) => id !== String(req.userId)
    );
  }

  // Update suggestion, returning the "new" version of the object
  const updatedSuggestion = await SuggestionModel.findByIdAndUpdate(
    id,
    suggestion,
    {
      new: true,
    }
  );

  res.json(updatedSuggestion);
};

export const commentSuggestion = async (req, res) => {
  const { id } = req.params;
  const { comment } = req.body;

  const suggestion = await SuggestionModel.findById(id);

  suggestion.comments.push(comment);

  // Update suggestion, returning the "new" version of the object
  const updatedSuggestion = await SuggestionModel.findByIdAndUpdate(
    id,
    suggestion,
    {
      new: true,
    }
  );

  res.json(updatedSuggestion);
};

export const deleteComment = async (req, res) => {
  const { suggestionId, commentId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(commentId))
    return res.status(404).send(`No post with id: ${commentId}`);

  await SuggestionModel.findByIdAndUpdate(
    suggestionId,
    {
      $pull: { comments: { _id: mongoose.Types.ObjectId(commentId) } },
    },
    { new: true }
  );

  res.json({ message: "Comment deleted successfully." });
};

export const replyToComment = async (req, res) => {
  const { id } = req.params;
  const { comment, parentCommentId } = req.body;

  const suggestion = await SuggestionModel.findById(id);

  suggestion.comments
    .find((comment) => comment.id === parentCommentId)
    .replies.push(comment);

  const updatedSuggestion = await SuggestionModel.findByIdAndUpdate(
    id,
    suggestion,
    { new: true }
  );

  res.json(updatedSuggestion);
};
