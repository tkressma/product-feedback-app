import { useState } from "react";
import styles from "./SuggestionsController.module.css";
import Button from "../../UI/Button/Button";
import Heading from "../../UI/Heading/Heading";
import bulbIcon from "../../../assets/suggestions/icon-suggestions.svg";
import upArrowIcon from "../../../assets/shared/icon-arrow-up.svg";
import downArrowIcon from "../../../assets/shared/icon-arrow-down.svg";
import { useMediaQuery } from "react-responsive";

export default function SuggestionsController() {
  const isMobile = useMediaQuery({ query: "(min-width: 767px)" });
  const sortingOptions = [
    "Most Upvotes",
    "Least Upvotes",
    "Most Comments",
    "Least Comments",
  ];

  const [sortingOption, setSortingOption] = useState("Most Upvotes");
  const [menuOpen, setMenuOpen] = useState(false);

  const dropDownArrow = menuOpen ? upArrowIcon : downArrowIcon;

  const handleDropDown = (event) => {
    event.preventDefault();
    setMenuOpen(!menuOpen);
    event.target.setAttribute("aria-expanded", menuOpen);
  };

  const suggestionCount = isMobile && (
    <Heading type="h3" white={true}>
      <img src={bulbIcon} />0 Suggestions
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
          <img src={dropDownArrow} />
        </div>

        {/* Dropdown pop up */}
        <div className={styles["controller__dropdown"]}>
          <ul role="listbox" tabIndex="-1" aria-labelledby="sort_label">
            {sortingOptions.map((option, index) => (
              <li
                key={index}
                className={styles["controller__listitem"]}
                role="option"
                aria-selected="false"
              >
                {option}
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
