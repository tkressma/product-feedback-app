import styles from "./Suggestion.module.css";
import Tag from "../../../UI/Container/Tag/Tag";
export default function Suggestion() {
  return (
    <article className={styles.suggestion}>
      <div className={styles["suggestion__upvote_count"]}>Upvote</div>
      <section className={styles["suggestion__info"]}>
        <h3>Suggestion Name</h3>
        <p>Suggestion text message this is it.</p>
        <Tag>Feature</Tag>
      </section>
      <div className={styles["suggestion__comment_count"]}>Comments</div>
    </article>
  );
}
