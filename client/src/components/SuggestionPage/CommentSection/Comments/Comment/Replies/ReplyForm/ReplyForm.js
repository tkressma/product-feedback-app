import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./ReplyForm.module.css";
import Button from "../../../../../../UI/Button/Button";
import { replyToComment } from "../../../../../../../actions/suggestions";

const ReplyForm = ({
  replyUser,
  parentCommentId,
  closeForm,
  updateReplies,
}) => {
  const [reply, setReply] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);
  const dispatch = useDispatch();
  const { id } = useParams();

  // If a reply is valid, this sends a reply to the back end, the refreshes the current suggestion's
  // replys to be immediately displayed on the front end. Then, it closes reply text box.
  const handleReplyComment = async (e) => {
    e.preventDefault();

    if (reply.length === 0) setIsEmpty(true);

    if (reply.length !== 0) {
      const newReplies = await dispatch(
        replyToComment(reply, replyUser, id, parentCommentId)
      );
      updateReplies(newReplies); // Refresh the replies to reflect the newly added reply
      closeForm(); // Close the reply form
    }
  };

  const handleReplyChange = (e) => {
    setReply(e.target.value);
    setIsEmpty(false); // If the comment is empty, and a user types something, update the empty state to be false.
  };

  return (
    <form id="add-reply" className={styles.replyform}>
      <textarea
        className={`${styles.replytext} ${
          isEmpty && styles["replytext--error"]
        }`}
        placeholder={`Replying to @${replyUser}`}
        onChange={handleReplyChange}
      />
      {isEmpty && (
        <p className={styles["replytext--error-message"]}>Can't be empty</p>
      )}
      <Button
        btnStyle={!isEmpty ? "violet" : "disabled"}
        form="add-reply"
        onClick={handleReplyComment}
        text="Post Reply"
      />
    </form>
  );
};

export default ReplyForm;
