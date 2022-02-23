import styles from "./Suggestion.module.css";
import Tag from "../../../UI/Container/Tag/Tag";
import commentIcon from "../../../../assets/shared/icon-comments.svg";
import upvoteIcon from "../../../../assets/shared/icon-arrow-up.svg";
export default function Suggestion() {
  return (
    <article className={styles.suggestion}>
      {/* Upvote count */}
      <div className={styles["suggestion__upvote"]}>
        <img
          src={upvoteIcon}
          alt="Upvote arrow"
          className={styles["suggestion__upvote_icon"]}
        />
        <span>0</span>
      </div>

      {/* Suggestion title, description, and tag */}
      <section className={styles["suggestion__info"]}>
        <h3>Suggestion Name</h3>
        <p>Suggestion text message this is it.</p>
        <Tag>Feature</Tag>
      </section>

      {/* Comment Count */}
      <div className={styles["suggestion__comment"]}>
        <img src={commentIcon} alt="A message bubble" />
        <span>0</span>
      </div>
    </article>
  );
}
