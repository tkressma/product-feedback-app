import React, { useState } from "react";
import styles from "./DropDownMenu.module.css";
import downArrowIcon from "../../../assets/shared/icon-arrow-down.svg";
import checkIcon from "../../../assets/shared/icon-check.svg";

// Takes in a list of options and a state setting function, setOption.
// Once a user makes a selection, the option in the component is changed.
// If the dropdown menu is part of a form, change the styling.
export const DropDownMenu = ({ listOptions, setOption, isForm = false }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(listOptions[0]);

  const handleDropDown = (event) => {
    event.preventDefault();
    setMenuOpen(!menuOpen); // Toggle the dropdown menu
    event.target.setAttribute("aria-expanded", menuOpen); // Toggle aria-expanded label for accessibility
  };

  const handleOptionSelection = (event) => {
    setMenuOpen(false); // Close the dropdown menu
    setSelectedOption(event.target.innerText); // Set the sorting option to user selection (E.G. "Least Upvotes")
    setOption(event.target.innerText);
  };

  return (
    <div
      className={`${styles["listbox"]} ${isForm && styles["listbox--form"]} ${
        menuOpen && styles["listbox--open"]
      }`}
    >
      {/* Container for the label, the dropdown button, and the up/down arrow */}
      <div className={styles["sort_options"]}>
        {!isForm && <span id="sort_label">Sort by :</span>}
        <button
          className={`${isForm && styles["listbox--form-button"]}`}
          onClick={handleDropDown}
          aria-haspopup="listbox"
          aria-expanded="false"
          aria-labelledby="sort_label"
        >
          {selectedOption}
        </button>
        <img
          src={downArrowIcon}
          onClick={handleDropDown}
          className={`${
            !isForm ? styles.menuarrow : styles["menuarrow--form"]
          } ${menuOpen && styles["menuarrow--active"]}`}
          alt={`${menuOpen ? "Down" : "Up"} arrow`}
        />
      </div>

      {/* Dropdown pop up */}
      <div
        className={`${styles["dropdown"]} ${
          menuOpen && styles["dropdown--active"]
        } ${isForm && styles["dropdown--form"]}`}
      >
        <ul role="listbox" aria-labelledby="sort_label">
          {listOptions.map((option, index) => (
            <li
              key={index}
              className={styles["listitem"]}
              aria-selected={selectedOption === option ? true : false}
              role="option"
              tabIndex="0"
              onClick={handleOptionSelection}
              onKeyPress={handleOptionSelection}
            >
              {/* Option text */}
              {option}

              {/* If a list item is currently selected, display a checkmark */}
              {selectedOption === option && (
                <img
                  src={checkIcon}
                  alt="Checkmark"
                  className={styles["listitem_checkmark"]}
                />
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
