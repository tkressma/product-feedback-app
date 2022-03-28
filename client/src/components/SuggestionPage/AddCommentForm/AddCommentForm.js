import React, { useState } from "react";
import styles from "../Comments/Comments.module.css";
import { useDispatch } from "react-redux";
import Button from "../../UI/Button/Button";
const AddComment = () => {
  const [charsLeft, setCharsLeft] = useState(225);
  const user = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();

  return (
    <section className={styles.comments}>
      <h2 className={styles["comments_header"]}>Add a comment</h2>
      <textarea
        onChange={(e) => setCharsLeft(225 - e.target.value.length)}
        placeholder="Type your comment..."
      />
      <div className={styles["comment_details"]}>
        {charsLeft} characters left
        <Button btnStyle="violet" text="Post Comment" />
      </div>
    </section>
  );
};

export default AddComment;
