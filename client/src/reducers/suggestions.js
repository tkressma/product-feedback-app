export default (suggestions = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return suggestions;
    case "FETCH_SORTED":
      let sortedSuggestions = [...suggestions];
      action.payload.forEach((suggestion, index) => {
        sortedSuggestions[index] = suggestion;
      });
      return sortedSuggestions;
    default:
      return suggestions;
  }
};
