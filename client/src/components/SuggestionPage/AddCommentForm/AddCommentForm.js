import React, { useState } from "react";
import styles from "../Comments/Comments.module.css";
import { useDispatch } from "react-redux";
import Button from "../../UI/Button/Button";
const AddComment = () => {
  const [charsLeft, setCharsLeft] = useState(225);
  const user = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();
  const isValid = charsLeft > 0;

  return (
    <section className={styles.comments}>
      <h2 className={styles["comments_header"]}>Add a comment</h2>
      <textarea
        className={styles["comment_textarea"]}
        onChange={(e) => setCharsLeft(225 - e.target.value.length)}
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
          aria-disabled={!isValid}
        />
      </div>
    </section>
  );
};

export default AddComment;
