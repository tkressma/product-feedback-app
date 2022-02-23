import styles from "./SuggestionsFeed.module.css";
import Suggestion from "./Suggestion/Suggestion";
export default function SuggestionsFeed() {
  return (
    <section className={styles.suggestions}>
      <Suggestion />
      <Suggestion />
      <Suggestion />
    </section>
  );
}
