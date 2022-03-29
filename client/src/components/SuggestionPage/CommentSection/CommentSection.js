import React, { useState } from "react";
import styles from "./Comments.module.css";
import Comment from "./Comment/Comment";
import AddCommentForm from "../AddCommentForm/AddCommentForm";
const CommentSection = ({ commentData, suggestionId }) => {
  const user = JSON.parse(localStorage.getItem("profile"));

  const [updatedComments, setUpdatedComments] = useState(commentData);

  const commentTitle =
    updatedComments.length === 0 ? "0" : `${updatedComments.length}`;
  const commentCards = updatedComments.map((comment, index) => (
    <Comment
      key={index}
      user={comment.user}
      id={comment._id}
      content={comment.content}
      replies={comment.replies}
    />
  ));

  return (
    <>
      <section className={styles.comments}>
        <h1 className={styles["comments_header"]}>{commentTitle} Comments</h1>
        {commentCards}
      </section>
      <AddCommentForm currentUser={user} updateComments={setUpdatedComments} />
    </>
  );
};

export default CommentSection;
