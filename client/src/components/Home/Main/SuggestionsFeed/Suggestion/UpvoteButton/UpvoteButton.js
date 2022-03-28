import { useState } from "react";
import styles from "./UpvoteButton.module.css";
import upvoteIcon from "../../../../../../assets/shared/icon-arrow-up.svg";
import { useDispatch } from "react-redux";
import { upvoteSuggestion } from "../../../../../../actions/suggestions";
import { useNavigate } from "react-router-dom";

const UpvoteButton = ({ upvotes, id }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("profile"));

  // Using state to instantly modify the upvote for a qucker feedback to improve user experience.
  const [upvoteCount, setUpvoteCount] = useState(upvotes);

  // Checks to see if the current user ID has already upvoted the post.
  // If the ID has not upvoted, add active styling to the upvote button.
  // Else, remove active styling.
  const userId = user?.result.googleId || user?.result?._id;
  const isUpvoted = upvoteCount.find((upvote) => upvote === userId);

  const handleUpvote = async () => {
    // If the user is not signed in, redirect to sign in/sign up
    if (!user) {
      navigate("/auth");
    } else {
      dispatch(upvoteSuggestion(id));

      if (isUpvoted) {
        setUpvoteCount(upvotes.filter((upvoteId) => upvoteId !== userId));
      } else {
        setUpvoteCount([...upvotes, userId]);
      }
    }
  };

  return (
    <button
      className={`${styles.upvote} ${isUpvoted && styles["upvote--active"]}`}
      onClick={handleUpvote}
    >
      <img
        src={upvoteIcon}
        alt="Upvote arrow"
        className={`${styles["upvote__icon"]} ${
          isUpvoted && styles["upvote__icon--active"]
        }`}
      />
      <span>{upvoteCount.length}</span>
    </button>
  );
};

export default UpvoteButton;
