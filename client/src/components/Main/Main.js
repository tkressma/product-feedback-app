import styles from "./Main.module.css";
import SuggestionsBar from "./SuggestionsBar/SuggestionsBar";
import SuggestionsFeed from "./SuggestionsFeed/SuggestionsFeed";
export default function Main() {
  return (
    <main className={styles.main}>
      <SuggestionsBar />
      <SuggestionsFeed />
    </main>
  );
}
