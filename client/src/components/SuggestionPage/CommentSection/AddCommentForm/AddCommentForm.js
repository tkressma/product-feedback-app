import React, { useState } from "react";
import styles from "./AddCommentForm.module.css";
import { useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { commentSuggestion } from "../../../../actions/suggestions";
import Button from "../../../UI/Button/Button";
const AddCommentForm = ({ updateComments }) => {
  const [charsLeft, setCharsLeft] = useState(225);
  const [comment, setComment] = useState("");
  const isValid = charsLeft > 0; // Is the comment valid (characters still available)?
  const [isEmpty, setIsEmpty] = useState(false); // Is the comment empty?
  const user = JSON.parse(localStorage.getItem("profile"));
  const dispatch = useDispatch();
  const { id } = useParams();

  // Sends a comment to the back end, the refreshes the current suggestion's
  // comments to be immediately displayed on the front end. Then, it resets
  // the comment text area.
  const handleAddComment = async (e) => {
    e.preventDefault();

    if (charsLeft === 225) setIsEmpty(true);

    if (charsLeft !== 225 && isValid) {
      const newComments = await dispatch(commentSuggestion(comment, id));
      setComment(""); // Reset the comment
      setCharsLeft(225); // Reset the character count
      updateComments(newComments); // Refresh the comments to reflect the newly added comment
    }
  };

  const handleCommentChange = (e) => {
    setCharsLeft(225 - e.target.value.length); // Update comment field character count
    setComment(e.target.value); // Update the comment to be posted by the user.
    setIsEmpty(false); // If the comment is empty, and a user types something, update the empty state to be false.
  };

  return (
    <form id="add-comment" className={styles.comments}>
      {/* IF the user is not logged in, do not display the comment form. Instead, tell them to log in. */}
      {!user && (
        <h2 className={styles["comments_header"]}>
          <Link to="/auth">Login</Link> to add a comment
        </h2>
      )}

      {/* IF the user is logged in, allow them to comment. */}
      {user && (
        <>
          <h2 className={styles["comments_header"]}>Add a comment</h2>

          {/* If there is an error with validation, outline the text area in red. */}
          <textarea
            className={`${styles["comment_textarea"]} ${
              (isEmpty || !isValid) && styles["comment_charcount--empty-error"]
            }`}
            onChange={handleCommentChange}
            value={comment}
            aria-invalid={isEmpty || !isValid}
            aria-required="true"
            aria-errormessage="comment-error"
            placeholder="Type your comment here..."
          />

          {/* If there is no text, display a message saying the comment can't be empty. */}
          {isEmpty && (
            <p
              id="comment-error"
              className={styles["comment_charcount--empty-message"]}
            >
              Can't be empty
            </p>
          )}

          {/* If there are no characters available in the char count, display a message saying too many chars. */}
          {!isValid && (
            <p
              id="comment-error"
              className={styles["comment_charcount--empty-message"]}
            >
              Character limit exceeded
            </p>
          )}

          {/* Displays the character count (red if exceeding) and the Post Comment button (disabled if any errors) */}
          <div className={styles["comment_details"]}>
            <p
              className={`${styles["comment_charcount"]} ${
                !isValid && styles["comment_charcount--error"]
              }`}
            >
              {charsLeft} characters left
            </p>

            <Button
              btnStyle={isValid && !isEmpty ? "violet" : "disabled"}
              text="Post Comment"
              form="add-comment"
              aria-disabled={!isValid}
              onClick={handleAddComment}
            />
          </div>
        </>
      )}
    </form>
  );
};

export default AddCommentForm;
