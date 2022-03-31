import React, { useState } from "react";
import styles from "./CommentSection.module.css";
import Comment from "./Comments/Comment/Comment";
import AddCommentForm from "./AddCommentForm/AddCommentForm";
const CommentSection = ({ commentData }) => {
  const [updatedComments, setUpdatedComments] = useState(commentData);

  let totalComments = updatedComments.length + addReplies(updatedComments);
  // Checks every comment in the suggestion for replies and returns a running total.
  function addReplies(arr) {
    let totalReplies = 0;

    // If replies exist, add that to the total replies. Else, set the value to 0.
    arr.forEach((comment) => {
      totalReplies += comment?.replies?.length || 0;
    });

    return totalReplies;
  }

  const commentTitle =
    updatedComments.length === 1 ? "1 Comment" : `${totalComments} Comments`;
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
        <h1 className={styles["comments_header"]}>{commentTitle} </h1>
        {commentCards}
      </section>
      <AddCommentForm updateComments={setUpdatedComments} />
    </>
  );
};

export default CommentSection;
