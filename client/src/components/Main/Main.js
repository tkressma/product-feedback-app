import styles from "./Main.module.css";
import SuggestionController from "./SuggestionsController/SuggestionsController";
import SuggestionsFeed from "./SuggestionsFeed/SuggestionsFeed";
export default function Main() {
  return (
    <main className={styles.main}>
      <SuggestionController />
      <SuggestionsFeed />;
    </main>
  );
}
