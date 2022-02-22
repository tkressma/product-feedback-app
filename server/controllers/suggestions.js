/* This file contains all of the handlers (logic and functionality) for our routes.
   The purpose of having this file is to keep our code organized and maintainable. */

import SuggestionModel from "../models/suggestionModel.js";

// Finding something inside of a model takes time, therefore this function is asynchronous
export const getSuggestions = async (req, res) => {
  try {
    const suggestions = await SuggestionModel.find();
    console.log(suggestions);
    res.status(200).json(suggestions); // Everything is OK
  } catch (error) {
    res.status(404).json({ message: error.message }); // Everything is BAD
  }
};

export const addSuggestion = (req, res) => {
  res.send("SUGGESTION ADDED");
};
