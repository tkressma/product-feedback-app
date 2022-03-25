import React from "react";
import styles from "./Reply.module.css";

const Reply = ({ user, content, replyingTo }) => {
  return (
    <div className={styles.reply}>
      <div className={styles["reply_header"]}>
        <div className={styles.poster}>
          <p className={styles["poster_name"]}>{user.name}</p>
          <p className={styles["poster_username"]}>@{user.username}</p>
        </div>

        <p>Reply</p>
      </div>
      <p className={styles["reply_content"]}>
        <span className={styles.recipient}>@{replyingTo}</span> {content}
      </p>
    </div>
  );
};

export default Reply;
