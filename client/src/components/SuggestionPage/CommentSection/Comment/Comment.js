import React, { useState } from "react";
import styles from "./Comment.module.css";
import Replies from "../Replies/Replies";
import ReplyForm from "../Replies/ReplyForm";
import ReplyButton from "../../../UI/ReplyButton/ReplyButton";

const Comment = ({ user, content, id, suggestionId, replies }) => {
  const [replyFormActive, setReplyFormActive] = useState(false);

  return (
    <div className={styles.comment}>
      <div className={styles["comment_header"]}>
        <div className={styles.poster}>
          <p className={styles["poster_name"]}>{user.name}</p>
          <p className={styles["poster_username"]}>@{user.username}</p>
        </div>

        <ReplyButton activateReplyForm={setReplyFormActive} />
      </div>
      <p className={styles["comment_content"]}>{content}</p>
      {replyFormActive && (
        <ReplyForm replyUser={user.username} parentCommentId={id} />
      )}
      {replies && <Replies replyData={replies} parentCommentId={id} />}
    </div>
  );
};

export default Comment;
