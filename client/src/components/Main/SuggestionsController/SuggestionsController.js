import styles from "./SuggestionsController.module.css";
import Button from "../../UI/Button/Button";
import Heading from "../../UI/Heading/Heading";
import bulbIcon from "../../../assets/suggestions/icon-suggestions.svg";
export default function SuggestionsController() {
  return (
    <section className={styles.controller}>
      <Heading type="h3" white={true}>
        <img src={bulbIcon} />0 Suggestions
      </Heading>
      <label className={styles["controller__sortby"]}>
        Sort by:
        <input type="button" value="Most Upvotes" />
      </label>
      <Button type="violet" link={true}>
        + Add Feedback
      </Button>
    </section>
  );
}
