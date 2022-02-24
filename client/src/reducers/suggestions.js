export default (suggestions = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return suggestions;
    case "SORT_BY_UPVOTE":
      if (action.payload.direction === "asc") {
        return [...sortDesc(action.payload.suggestions, "upvotes")];
      } else {
        return [...sortAsc(action.payload.suggestions, "upvotes")];
      }
    default:
      return suggestions;
  }
};

function sortAsc(arr, field) {
  return arr.sort(function (a, b) {
    if (a[field] > b[field]) return 1;

    if (b[field] > a[field]) return -1;

    return 0;
  });
}

function sortDesc(arr, field) {
  return arr.sort(function (a, b) {
    if (a[field] > b[field]) return -1;

    if (b[field] > a[field]) return 1;

    return 0;
  });
}
