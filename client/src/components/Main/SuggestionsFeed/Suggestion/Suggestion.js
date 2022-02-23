import styles from "./Suggestion.module.css";
import Tag from "../../../UI/Container/Tag/Tag";
import commentIcon from "../../../../assets/shared/icon-comments.svg";
import upvoteIcon from "../../../../assets/shared/icon-arrow-up.svg";
export default function Suggestion({ suggestionData }) {
  const { title, description, category, upvotes, comments } = suggestionData;
  return (
    <article className={styles.suggestion}>
      {/* Upvote count */}
      <div className={styles["suggestion__upvote"]}>
        <img
          src={upvoteIcon}
          alt="Upvote arrow"
          className={styles["suggestion__upvote_icon"]}
        />
        <span>{upvotes}</span>
      </div>

      {/* Suggestion title, description, and tag */}
      <section className={styles["suggestion__info"]}>
        <h3>{title}</h3>
        <p>{description}</p>
        <Tag>{category.charAt(0).toUpperCase() + category.slice(1)}</Tag>
      </section>

      {/* Comment Count */}
      <div className={styles["suggestion__comment"]}>
        <img src={commentIcon} alt="A message bubble" />
        <span>{comments.length}</span>
      </div>
    </article>
  );
}
