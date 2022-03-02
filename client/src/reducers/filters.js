import { CHANGE_TYPE } from "../constants/actionTypes";

export default (
  filters = { sortCategory: "all", sortType: "upvotes", sortOrder: "desc" },
  action
) => {
  switch (action.type) {
    case CHANGE_TYPE:
      return { ...filters, ...action.payload };
    default:
      return filters;
  }
};
