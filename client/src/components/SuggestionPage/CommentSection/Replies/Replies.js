import React from "react";
import styles from "./Replies.module.css";
import Reply from "./Reply/Reply";

const Replies = ({ replyData, parentCommentId, updateReplies }) => {
  // Replies objects: content, replyingTo, user
  const commentReplies = replyData?.map((reply, index) => (
    <Reply
      key={index}
      user={reply.user}
      content={reply.content}
      replyingTo={reply.replyingTo}
      parentCommentId={parentCommentId}
      updateReplies={updateReplies}
    />
  ));

  return <div className={styles.replies}>{commentReplies}</div>;
};

export default Replies;
