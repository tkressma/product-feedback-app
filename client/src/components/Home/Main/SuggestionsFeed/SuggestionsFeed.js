import styles from "./SuggestionsFeed.module.css";
import { useSelector } from "react-redux";
import Suggestion from "./Suggestion/Suggestion";
import NoSuggestions from "./NoSuggestions.js/NoSuggestions";
export default function SuggestionsFeed() {
  // Retrieves all of the suggestions
  const { suggestions } = useSelector((state) => state.suggestions);
  console.log(suggestions);
  const suggestionsAvailable = suggestions.length !== 0;

  const suggestionCards = suggestions.map((suggestion) => (
    <Suggestion key={suggestion["_id"]} suggestionData={suggestion} />
  ));

  // As long as there are suggestions, display all of the available suggestion cards.
  // If there are no suggestions, display the no suggestions screen.
  return (
    <section
      className={
        suggestionsAvailable ? styles.suggestions : styles["suggetions--empty"]
      }
    >
      {suggestionsAvailable ? suggestionCards : <NoSuggestions />}
    </section>
  );
}
