import styles from "./SuggestionsFeed.module.css";
import { useSelector } from "react-redux";
import Suggestion from "./Suggestion/Suggestion";
import NoSuggestions from "./NoSuggestions.js/NoSuggestions";
import { RotatingLines } from "react-loader-spinner/";
import { useEffect } from "react";

export default function SuggestionsFeed() {
  // Retrieves all of the suggestions
  const { suggestions, isLoading } = useSelector((state) => state.suggestions);

  // If there is one or more suggestions in the state array and the api
  // request has finished loading, then there are suggestions available to display
  const suggestionsAvailable = suggestions.length !== 0;

  // If there are no suggestions, apply different styling to the section
  const suggestionFeedStyling = suggestionsAvailable
    ? styles.suggestions
    : styles["suggetions--empty"];

  // Dynamically create all suggestion components to be rendered on the page
  const suggestionCards = suggestions.map((suggestion) => (
    <Suggestion key={suggestion["_id"]} suggestionData={suggestion} />
  ));

  // As long as there are suggestions, display all of the available suggestion components.
  // If isLoading is true, display a loading symbol.
  // If suggestionsAvailable is false, display the no suggestions component.
  return (
    <section className={suggestionFeedStyling}>
      {isLoading && (
        <RotatingLines
          width="100"
          strokeColor="hsl(230, 76%, 59%)"
          strokeWidth="1"
          animationDuration="1"
          ariaLabel="loading"
        />
      )}

      {suggestionsAvailable
        ? !isLoading && suggestionCards
        : !isLoading && <NoSuggestions />}
    </section>
  );
}
