export default (suggestions = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload; // Initially return all data sorted by most upvotes
    case "CREATE":
      return suggestions;
    case "SORT_BY_UPVOTE":
      let sortByFn = action.payload.sortBy === "Most" ? sortDesc : sortAsc;
      if (action.dataType === "upvotes") {
        return [...sortByFn(action.payload.suggestions, "upvotes")];
      } else {
        return [...sortByFn(action.payload.suggestions, "comments")];
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
