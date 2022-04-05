import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterSuggestions, setFilters } from "../../../../actions/suggestions";
import { useMediaQuery } from "react-responsive";
import styles from "./SuggestionsBar.module.css";
import Button from "../../../UI/Button/Button";
import Heading from "../../../UI/Heading/Heading";
import bulbIcon from "../../../../assets/suggestions/icon-suggestions.svg";
import { DropDownMenu } from "../../../UI/DropDownMenu/DropDownMenu";

export default function SuggestionsBar() {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const sortingOptions = [
    "Most Upvotes",
    "Least Upvotes",
    "Most Comments",
    "Least Comments",
  ];
  const [option, setOption] = useState("Most Upvotes");

  // Retrieves all of the suggestions and filters that are selected
  const {
    suggestions,
    filters: { sortCategory, sortType, sortOrder },
  } = useSelector((state) => state.suggestions);

  const dispatch = useDispatch();

  // Sort by Most Upvotes on component mount
  useEffect(() => {
    dispatch(
      filterSuggestions({
        category: "All",
        type: "upvotes",
        order: "desc",
      })
    );
  }, []);

  // Listen for each time a new sorting option is selected and update state
  useEffect(() => {
    // Determine the sort order (ascending/descending) and type (upvotes/comments)
    const order = option.includes("Most") ? "desc" : "asc";
    const type = option.includes("Upvotes") ? "upvotes" : "comments";

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
  }, [option, sortCategory, sortType, sortOrder, dispatch]);

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

      <DropDownMenu listOptions={sortingOptions} setOption={setOption} />

      <Button
        btnStyle="violet"
        text="+ Add Feedback"
        link={true}
        destination="create-feedback"
      />
    </section>
  );
}
