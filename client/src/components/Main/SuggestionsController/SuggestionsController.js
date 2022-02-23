import styles from "./SuggestionsController.module.css";
import Button from "../../UI/Button/Button";
export default function SuggestionsController() {
  return (
    <section>
      <h2>6 Suggestions</h2>
      <label>
        Sort by:
        <input type="button" value="Most Upvotes" />
      </label>
      <Button type="violet" link={true}>
        + Add Feedback
      </Button>
    </section>
  );
}
