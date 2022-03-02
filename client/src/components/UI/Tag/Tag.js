import styles from "./Tag.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setFilters,
  filterSuggestions,
  getSuggestions,
} from "../../../actions/suggestions";
export default function Tag({ category }) {
  const dispatch = useDispatch();
  const { sortType, sortOrder } = useSelector((state) => state.filters);

  // If the selected category is "All", return all of the suggestions. Otherwise,
  // filter the suggestions based on the category selected.
  const handleFiltering = () => {
    dispatch(setFilters({ sortCategory: category }));

    if (category === "all") {
      dispatch(getSuggestions());
    } else {
      dispatch(filterSuggestions(category, sortType, sortOrder));
    }
  };

  return (
    <button className={styles.tag} onClick={handleFiltering}>
      {/* Capitalize the first letter of the category */}
      {category.charAt(0).toUpperCase() + category.slice(1)}
    </button>
  );
}
