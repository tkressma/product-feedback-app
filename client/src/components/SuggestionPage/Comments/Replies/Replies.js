import React from "react";
import styles from "./Replies.module.css";
import Reply from "./Reply/Reply";

const Replies = ({ replyData, parentCommentId }) => {
  // Replies objects: content, replyingTo, user
  const commentReplies = replyData?.map((reply, index) => (
    <Reply
      key={index}
      user={reply.user}
      content={reply.content}
      replyingTo={reply.replyingTo}
      parentCommentId={parentCommentId}
    />
  ));

  return <div className={styles.replies}>{commentReplies}</div>;
};

export default Replies;
