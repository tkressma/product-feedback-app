import styles from "./Main.module.css";
import SuggestionController from "./SuggestionsController/SuggestionsController";
import SuggestionsFeed from "./SuggestionsFeed/SuggestionsFeed";
export default function Main() {
  return (
    <>
      <SuggestionController />
      <SuggestionsFeed />;
    </>
  );
}
