import React, { useState } from "react";
import styles from "../Comments/Comments.module.css";
import { useDispatch } from "react-redux";
import { commentSuggestion } from "../../../actions/suggestions";
import Button from "../../UI/Button/Button";
const AddComment = ({ suggestionId, currentUser }) => {
  const [charsLeft, setCharsLeft] = useState(225);
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();
  const isValid = charsLeft > 0;

  const handleAddComment = (e) => {
    e.preventDefault();
    dispatch(
      commentSuggestion(
        {
          content: comment,
          user: {
            name: currentUser?.result?.name, // Add full name to comment data
            username: currentUser?.result?.username, // Add username to comment data
          },
        },
        suggestionId
      )
    );
  };

  // Update comment field character count and the comment to be posted by the user.
  const handleCommentChange = (e) => {
    setCharsLeft(225 - e.target.value.length);
    setComment(e.target.value);
  };

  return (
    <form id="add-comment" className={styles.comments}>
      <h2 className={styles["comments_header"]}>Add a comment</h2>
      <textarea
        className={styles["comment_textarea"]}
        onChange={handleCommentChange}
        placeholder="Type your comment here..."
      />
      <div className={styles["comment_details"]}>
        <p
          className={`${styles["comment_charcount"]} ${
            !isValid && styles["comment_charcount--error"]
          }`}
        >
          {charsLeft} characters left
        </p>
        <Button
          btnStyle={isValid ? "violet" : "disabled"}
          text="Post Comment"
          form="add-comment"
          aria-disabled={!isValid}
          onClick={handleAddComment}
        />
      </div>
    </form>
  );
};

export default AddComment;
