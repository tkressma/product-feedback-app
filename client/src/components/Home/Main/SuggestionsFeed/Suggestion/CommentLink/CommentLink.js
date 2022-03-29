import styles from "./CommentLink.module.css";
import commentIcon from "../../../../../../assets/shared/icon-comments.svg";
import { Link } from "react-router-dom";

const CommentLink = ({ comments, id }) => {
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
    <Link to={`/view-suggestion/${id}`} className={styles.comment}>
      <img
        src={commentIcon}
        alt="A message bubble"
        className={styles["comment_icon"]}
      />
      <span>{totalComments}</span>
    </Link>
  );
};

export default CommentLink;
