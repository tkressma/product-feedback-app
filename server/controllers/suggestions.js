/* This file contains all of the handlers (logic and functionality) for our routes.
   The purpose of having this file is to keep our code organized and maintainable. */

import SuggestionModel from "../models/suggestionModel.js";

/* Retrieve all suggestions */
export const getSuggestions = async (req, res) => {
  const suggestions = await SuggestionModel.find({});

  try {
    res.status(200).json(suggestions); // OK
  } catch (error) {
    res.status(404).json({ message: error.message }); // Not found
  }
};

/* Create a suggestion */
export const addSuggestion = async (req, res) => {
  // Retrieve suggestion data from the user
  const suggestion = req.body;

  // Create a new suggestion using the schema model
  const newSuggestion = new SuggestionModel(suggestion);

  try {
    await newSuggestion.save();
    res.status(201).json(newSuggestion); // Success in creating suggestion
  } catch (error) {
    res.status(409).json({ message: error.message }); // Conflict
  }
};

export const getSortedSuggestions = async (req, res) => {
  // Since mongoose Model.find() returns an instance of Mongoose's Query class,
  // 'suggestions' must first be converted to a JSON in order for me to retrieve
  // comment replies data. Without doing this, replies will return undefined
  // because _id = new ObjectID would cause the entire comment to return undefined.
  const suggestions = await SuggestionModel.find({});
  let sortedSuggestions = JSON.parse(JSON.stringify(suggestions));

  try {
    const type = req.query.type;
    const order = req.query.order;
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
function sort(arr, order, type, isComment) {
  return arr.sort(function (a, b) {
    let curr = a[type];
    let next = b[type];

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

  arr.forEach((comment) => {
    totalReplies += comment?.replies?.length || 0;
  });

  return totalReplies;
}

export const getFilteredSuggestions = async (req, res) => {
  const suggestions = await SuggestionModel.find({});

  try {
    const category = req.query.category;
    const filteredSuggestions = suggestions.filter(
      (suggestion) => suggestion.category === category
    );
    res.status(200).json(filteredSuggestions);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
