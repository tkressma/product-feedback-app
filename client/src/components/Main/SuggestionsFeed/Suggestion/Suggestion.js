import styles from "./Suggestion.module.css";
export default function Suggestion() {
  return (
    <article className={styles.suggestion}>
      <div className={styles["suggestion__upvote_count"]}>Upvote</div>
      <section className={styles["suggestion__info"]}>
        <h3>Suggestion Name</h3>
        <p>Suggestion text message this is it.</p>
        <span>Suggestion Tag</span>
      </section>
      <div className={styles["suggestion__comment_count"]}>Comments</div>
    </article>
  );
}
