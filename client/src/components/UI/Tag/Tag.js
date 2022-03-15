import styles from "./Tag.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setFilters, filterSuggestions } from "../../../actions/suggestions";
export default function Tag({ category, closeMobileMenu }) {
  const dispatch = useDispatch();
  const {
    filters: { sortType, sortOrder },
  } = useSelector((state) => state.suggestions);

  const handleFiltering = () => {
    // Update the sorting filter for category. This is kept in state so that when a user
    // decides to use the "Sort by: most/least upvotes/comments" filter, the current category
    // chosen will also be taken into consideration when displaying results.
    dispatch(
      setFilters({
        sortCategory: category,
      })
    );

    // Filter the suggestions based on the new category.
    dispatch(
      filterSuggestions({
        category: category,
        type: sortType,
        order: sortOrder,
      })
    );

    // If this prop is not null, then the user is using a mobile device.
    // Close the mobile menu when a category tag is selected.
    closeMobileMenu && closeMobileMenu();
  };

  return (
    <button className={styles.tag} onClick={handleFiltering}>
      {category}
    </button>
  );
}
