import React from "react";
import styles from "./Comments.module.css";
import Comment from "./Comment/Comment";
const Comments = ({ commentData }) => {
  const commentTitle = commentData.length === 0 ? "0" : `${commentData.length}`;
  const commentCards = commentData.map((comment, index) => (
    <Comment
      key={index}
      user={comment.user}
      id={comment._id}
      content={comment.content}
      replies={comment.replies}
    />
  ));

  return (
    <section className={styles.comments}>
      <h1 className={styles["comments_header"]}>{commentTitle} Comments</h1>
      {commentCards}
    </section>
  );
};

export default Comments;
