import styles from "./Tag.module.css";
import { useDispatch } from "react-redux";
import {
  setFilters,
  filterSuggestions,
  getSuggestions,
} from "../../../actions/suggestions";
export default function Tag({ category }) {
  category = category.toLowerCase();
  const dispatch = useDispatch();

  // If the selected category is "All", return all of the suggestions. Otherwise,
  // filter the suggestions based on the category selected.
  const handleFiltering = () => {
    if (category === "all") {
      dispatch(getSuggestions());
    } else {
      dispatch(setFilters({ categoryFilter: category }));
      dispatch(filterSuggestions(category.toLowerCase()));
    }
  };

  return (
    <button className={styles.tag} onClick={handleFiltering}>
      {/* Capitalize the first letter of the category */}
      {category.charAt(0).toUpperCase() + category.slice(1)}
    </button>
  );
}
