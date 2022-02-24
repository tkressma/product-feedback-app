import { useState } from "react";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import styles from "./SuggestionsController.module.css";
import Button from "../../UI/Button/Button";
import Heading from "../../UI/Heading/Heading";
import bulbIcon from "../../../assets/suggestions/icon-suggestions.svg";
import downArrowIcon from "../../../assets/shared/icon-arrow-down.svg";
import checkIcon from "../../../assets/shared/icon-check.svg";

export default function SuggestionsController() {
  const isMobile = useMediaQuery({ query: "(min-width: 767px)" });
  const [sortingOption, setSortingOption] = useState("Most Upvotes");
  // Retrieves all of the suggestions
  const suggestions = useSelector((state) => state.suggestions);
  const [menuOpen, setMenuOpen] = useState(false);
  const sortingOptions = [
    "Most Upvotes",
    "Least Upvotes",
    "Most Comments",
    "Least Comments",
  ];

  const handleDropDown = (event) => {
    setMenuOpen(!menuOpen); // Toggle the dropdown menu
    event.target.setAttribute("aria-expanded", menuOpen); // Toggle aria-expanded label for accessibility
  };

  const handleSortSelection = (event) => {
    setMenuOpen(false); // Close the dropdown menu
    const selection = event.target.innerHTML;
    setSortingOption(selection);
    console.log(selection);
  };

  // Displays how many suggestions are available on screen sizes larger than 768px
  const suggestionCount = isMobile && (
    <Heading type="h3" white={true}>
      <img src={bulbIcon} />
      {suggestions.length} Suggestions
    </Heading>
  );

  return (
    <section className={styles.controller}>
      {suggestionCount}

      <div className={styles["controller__listbox"]}>
        <div className={styles["controller__sort_options"]}>
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
          />
        </div>

        {/* Dropdown pop up */}
        <div
          className={`${styles["controller__dropdown"]} ${
            menuOpen && styles["controller__dropdown--active"]
          }`}
        >
          <ul role="listbox" aria-labelledby="sort_label">
            {sortingOptions.map((option, index) => (
              <li
                key={index}
                className={styles["controller__listitem"]}
                aria-selected={sortingOption === option ? true : false}
                role="option"
                tabIndex="0"
                onClick={handleSortSelection}
                onKeyPress={handleSortSelection}
              >
                {/* Option text */}
                {option}

                {/* If a list item is currently selected, display a checkmark */}
                {sortingOption === option && <img src={checkIcon} />}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Button type="violet" link={true}>
        + Add Feedback
      </Button>
    </section>
  );
}
