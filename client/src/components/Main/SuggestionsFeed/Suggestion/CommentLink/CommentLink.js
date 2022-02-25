import styles from "./CommentLink.module.css";
import commentIcon from "../../../../../assets/shared/icon-comments.svg";

const CommentLink = ({ comments }) => {
  return (
    <a className={styles.comment}>
      <img
        src={commentIcon}
        alt="A message bubble"
        className={styles["comment_icon"]}
      />
      <span>{comments.length}</span>
    </a>
  );
};

export default CommentLink;
