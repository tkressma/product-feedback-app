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
  const suggestions = await SuggestionModel.find({});

  try {
    const type = req.query.type;
    const order = req.query.order;
    const isComment = type === "comments" ? true : false;
    let sortedSuggestions;

    if (order === "desc") {
      sortedSuggestions = sort(suggestions, "desc", type, isComment);
    } else if (order === "asc") {
      // Least upvotes or comments
      sortedSuggestions = sort(suggestions, "asc", type, isComment);
    }

    res.status(200).json(sortedSuggestions);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

function sort(arr, order, type, isComment) {
  return arr.sort(function (a, b) {
    let curr = a[type];
    let next = b[type];

    if (isComment) {
      curr = a[type].length + (a[type]?.replies?.length || 0);
      next = b[type].length + (b[type]?.replies?.length || 0);
    }

    if (order === "asc") {
      if (curr > next) return 1;
      if (next > curr) return -1;
      return 0;
    } else {
      if (curr > next) return -1;
      if (next > curr) return 1;
      return 0;
    }
  });
}
