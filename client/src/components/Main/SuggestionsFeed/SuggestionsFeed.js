import styles from "./SuggestionsFeed.module.css";
import { useSelector } from "react-redux";
import Suggestion from "./Suggestion/Suggestion";
export default function SuggestionsFeed() {
  // Retrieves all of the suggestions
  const suggestions = useSelector((state) => state.suggestions);

  return (
    <section className={styles.suggestions}>
      {suggestions.map((suggestion) => (
        <Suggestion key={suggestion["_id"]} suggestionData={suggestion} />
      ))}
    </section>
  );
}
