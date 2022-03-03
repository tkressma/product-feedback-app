import styles from "./SuggestionsFeed.module.css";
import { useSelector } from "react-redux";
import Suggestion from "./Suggestion/Suggestion";
import NoSuggestions from "./NoSuggestions.js/NoSuggestions";
export default function SuggestionsFeed() {
  // Retrieves all of the suggestions
  const suggestions = useSelector((state) => state.suggestions);

  return suggestions.length !== 0 ? (
    <section className={styles.suggestions}>
      {suggestions.map((suggestion) => (
        <Suggestion key={suggestion["_id"]} suggestionData={suggestion} />
      ))}
    </section>
  ) : (
    <section className={styles["suggestions--empty"]}>
      <NoSuggestions />
    </section>
  );
}
