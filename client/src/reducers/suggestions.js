export default (suggestions = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return suggestions;
    default:
      return suggestions;
  }
};
