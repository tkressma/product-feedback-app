import React from "react";
import styles from "./ReplyForm.module.css";
import Button from "../../../UI/Button/Button";

const ReplyForm = ({ replyUser, parentCommentId }) => {
  return (
    <div className={styles.replyform}>
      <textarea
        className={styles.replytext}
        placeholder={`Replying to @${replyUser}`}
      ></textarea>
      <Button btnStyle="violet" text="Post Reply" />
    </div>
  );
};

export default ReplyForm;
