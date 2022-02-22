/* This file contains all of the handlers (logic and functionality) for our routes.
   The purpose of having this file is to keep our code organized and maintainable. */

import SuggestionModel from "../models/suggestionModel.js";

/* Retrieve all suggestions */
export const getSuggestions = async (req, res) => {
  try {
    const suggestions = await SuggestionModel.find();
    console.log(suggestions);
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
