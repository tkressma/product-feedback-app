export default (suggestions = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return suggestions;
    case "CREATE":
      return suggestions;
    default:
      return suggestions;
  }
};
