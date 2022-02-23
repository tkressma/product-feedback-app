import styles from "./SuggestionsFeed.module.css";
import { useSelector } from "react-redux";
import Suggestion from "./Suggestion/Suggestion";
export default function SuggestionsFeed() {
  const suggestions = useSelector((state) => state.suggestions);
  console.log(suggestions);
  console.log("tst");
  return (
    <section className={styles.suggestions}>
      <Suggestion />
      <Suggestion />
      <Suggestion />
    </section>
  );
}
