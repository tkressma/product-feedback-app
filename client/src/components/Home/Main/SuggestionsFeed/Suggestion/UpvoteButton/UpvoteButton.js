import styles from "./UpvoteButton.module.css";
import upvoteIcon from "../../../../../../assets/shared/icon-arrow-up.svg";
import { useDispatch } from "react-redux";
import { upvoteSuggestion } from "../../../../../../actions/suggestions";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const UpvoteButton = ({ upvotes, id }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("profile"));

  // Checks to see if the current user ID has already upvoted the post.
  // If the ID has not upvoted, add active styling to the upvote button.
  // Else, remove active styling.
  const isUpvoted = upvotes.find(
    (upvote) => upvote === (user?.result?.googleId || user?.result?._id)
  );

  const handleUpvote = () => {
    // If the user is not signed in, redirect to sign in/sign up
    if (!user) {
      navigate("/auth");
    } else {
      dispatch(upvoteSuggestion(id));
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
      <span>{upvotes.length}</span>
    </button>
  );
};

export default UpvoteButton;
