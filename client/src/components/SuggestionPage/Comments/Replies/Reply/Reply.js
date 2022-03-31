import React, { useState } from "react";
import styles from "./Reply.module.css";
import ReplyForm from "../ReplyForm";
import ReplyButton from "../../../../UI/ReplyButton/ReplyButton";

const Reply = ({ user, content, replyingTo, parentCommentId }) => {
  const [replyFormActive, setReplyFormActive] = useState(false);

  const user = JSON.parse(localStorage.getItem("profile"));

  return (
    <div className={styles.reply}>
      <div className={styles["reply_header"]}>
        <div className={styles.poster}>
          <p className={styles["poster_name"]}>{user.name}</p>
          <p className={styles["poster_username"]}>@{username}</p>
        </div>
        <ReplyButton activateReplyForm={setReplyFormActive} />
      </div>
      <p className={styles["reply_content"]}>
        <span className={styles.recipient}>@{replyingTo}</span> {content}
      </p>
      {replyFormActive && <ReplyForm replyUser={replyingTo} />}
    </div>
  );
};

export default Reply;
