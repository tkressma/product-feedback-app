import React from "react";
import Replies from "../Replies/Replies";
import styles from "./Comment.module.css";

const Comment = ({ user, content, id, replies }) => {
  return (
    <div className={styles.comment}>
      <div className={styles["comment_header"]}>
        <div className={styles.poster}>
          <p className={styles["poster_name"]}>{user.name}</p>
          <p className={styles["poster_username"]}>@{user.username}</p>
        </div>

        <p>Reply</p>
      </div>
      <p className={styles["comment_content"]}>{content}</p>
      {replies && <Replies replyData={replies} />}
    </div>
  );
};

export default Comment;
