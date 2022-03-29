import styles from "./CommentLink.module.css";
import commentIcon from "../../../../../../assets/shared/icon-comments.svg";

const CommentLink = ({ comments }) => {
  let totalComments = comments.length + addReplies(comments);
  // Checks every comment in the suggestion for replies and returns a running total.
  function addReplies(arr) {
    let totalReplies = 0;

    // If replies exist, add that to the total replies. Else, set the value to 0.
    arr.forEach((comment) => {
      totalReplies += comment?.replies?.length || 0;
    });

    return totalReplies;
  }

  return (
    <a href="#" className={styles.comment}>
      <img
        src={commentIcon}
        alt="A message bubble"
        className={styles["comment_icon"]}
      />
      <span>{totalComments}</span>
    </a>
  );
};

export default CommentLink;
