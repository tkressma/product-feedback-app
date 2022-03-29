import React, { useState } from "react";
import styles from "../Comments/Comments.module.css";
import { useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { commentSuggestion } from "../../../actions/suggestions";
import Button from "../../UI/Button/Button";
const AddCommentForm = ({ currentUser, updateComments }) => {
  const [charsLeft, setCharsLeft] = useState(225);
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();
  const isValid = charsLeft > 0;
  const { id } = useParams();

  const user = JSON.parse(localStorage.getItem("profile"));

  const handleAddComment = async (e) => {
    e.preventDefault();

    const newComments = await dispatch(
      commentSuggestion(
        {
          content: comment,
          user: {
            name: currentUser?.result?.name, // Add full name to comment data
            username: currentUser?.result?.username, // Add username to comment data
          },
        },
        id
      )
    );

    setComment(""); // Reset the comment
    updateComments(newComments); // Refresh the comments to reflect the newly added comment
  };

  // Update comment field character count and the comment to be posted by the user.
  const handleCommentChange = (e) => {
    setCharsLeft(225 - e.target.value.length);
    setComment(e.target.value);
  };

  return (
    <form id="add-comment" className={styles.comments}>
      {!user && (
        <h2 className={styles["comments_header"]}>
          <Link to="/auth">Login</Link> to add a comment
        </h2>
      )}
      {user && (
        <>
          <h2 className={styles["comments_header"]}>Add a comment</h2>
          <textarea
            className={styles["comment_textarea"]}
            onChange={handleCommentChange}
            value={comment}
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
        </>
      )}
    </form>
  );
};

export default AddCommentForm;
