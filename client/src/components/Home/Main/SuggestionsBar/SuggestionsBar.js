import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterSuggestions, setFilters } from "../../../../actions/suggestions";
import { useMediaQuery } from "react-responsive";
import styles from "./SuggestionsBar.module.css";
import Button from "../../../UI/Button/Button";
import Heading from "../../../UI/Heading/Heading";
import bulbIcon from "../../../../assets/suggestions/icon-suggestions.svg";
import downArrowIcon from "../../../../assets/shared/icon-arrow-down.svg";
import checkIcon from "../../../../assets/shared/icon-check.svg";

export default function SuggestionsBar() {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const sortingOptions = [
    "Most Upvotes",
    "Least Upvotes",
    "Most Comments",
    "Least Comments",
  ];
  const [sortingOption, setSortingOption] = useState("Most Upvotes");

  // Retrieves all of the suggestions
  const suggestions = useSelector((state) => state.suggestions);
  // Retrieves all of the filters that are selected
  const { sortCategory, sortType, sortOrder } = useSelector(
    (state) => state.filters
  );

  const [menuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch();

  // Sort by Most Upvotes on component mount
  useEffect(() => {
    dispatch(
      filterSuggestions({
        category: "all",
        type: "upvotes",
        order: "desc",
      })
    );
  }, []);

  // Listen for each time a new sorting option is selected and update state
  useEffect(() => {
    // Determine the sort order (ascending/descending) and type (upvotes/comments)
    const order = sortingOption.includes("Most") ? "desc" : "asc";
    const type = sortingOption.includes("Upvotes") ? "upvotes" : "comments";

    // Update the sorting filters
    dispatch(
      setFilters({
        sortCategory: sortCategory,
        sortType: type,
        sortOrder: order,
      })
    );

    // Sort data depending on order (most/least) and type(upvotes/comments)
    dispatch(
      filterSuggestions({
        category: sortCategory,
        type: sortType,
        order: sortOrder,
      })
    );
  }, [sortingOption, sortCategory, sortType, sortOrder, dispatch]);

  const handleDropDown = (event) => {
    setMenuOpen(!menuOpen); // Toggle the dropdown menu
    event.target.setAttribute("aria-expanded", menuOpen); // Toggle aria-expanded label for accessibility
  };

  const handleSortSelection = (event) => {
    setMenuOpen(false); // Close the dropdown menu
    setSortingOption(event.target.innerText); // Set the sorting option to user selection (E.G. "Least Upvotes")
  };

  // Displays how many suggestions are available on screen sizes larger than 768px
  const suggestionCount = !isMobile && (
    <Heading type="h3" white={true}>
      <img src={bulbIcon} alt="Light bulb signifying an idea" />
      {suggestions.length} Suggestions
    </Heading>
  );

  return (
    <section className={`${styles.bar} ${isMobile && styles["bar--sticky"]}`}>
      {suggestionCount}

      <div className={styles["bar__listbox"]}>
        {/* Container for the label, the dropdown button, and the up/down arrow */}
        <div className={styles["bar__sort_options"]}>
          <span id="sort_label">Sort by :</span>
          <button
            onClick={handleDropDown}
            aria-haspopup="listbox"
            aria-expanded="false"
            aria-labelledby="sort_label"
          >
            {sortingOption}
          </button>
          <img
            src={downArrowIcon}
            className={`${styles.menuarrow} ${
              menuOpen && styles["menuarrow--active"]
            }`}
            alt={`${menuOpen ? "Down" : "Up"} arrow`}
          />
        </div>

        {/* Dropdown pop up */}
        <div
          className={`${styles["bar__dropdown"]} ${
            menuOpen && styles["bar__dropdown--active"]
          }`}
        >
          <ul role="listbox" aria-labelledby="sort_label">
            {sortingOptions.map((option, index) => (
              <li
                key={index}
                className={styles["bar__listitem"]}
                aria-selected={sortingOption === option ? true : false}
                role="option"
                tabIndex="0"
                onClick={handleSortSelection}
                onKeyPress={handleSortSelection}
              >
                {/* Option text */}
                {option}

                {/* If a list item is currently selected, display a checkmark */}
                {sortingOption === option && (
                  <img
                    src={checkIcon}
                    alt="Checkmark"
                    className={styles["bar__listitem_checkmark"]}
                  />
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Button type="violet">+ Add Feedback</Button>
    </section>
  );
}