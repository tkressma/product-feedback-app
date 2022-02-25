import styles from "./UpvoteButton.module.css";
import upvoteIcon from "../../../../../assets/shared/icon-arrow-up.svg";

const UpvoteButton = ({ upvotes }) => {
  return (
    <button className={styles.upvote}>
      <img
        src={upvoteIcon}
        alt="Upvote arrow"
        className={styles["upvote_icon"]}
      />
      <span>{upvotes}</span>
    </button>
  );
};

export default UpvoteButton;
