import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./ReplyForm.module.css";
import Button from "../../../UI/Button/Button";
import { replyToComment } from "../../../../actions/suggestions";

const ReplyForm = ({
  replyUser,
  parentCommentId,
  closeForm,
  updateReplies,
}) => {
  const [reply, setReply] = useState("");
  const dispatch = useDispatch();
  const { id } = useParams();

  // Sends a reply to the back end, the refreshes the current suggestion's
  // replys to be immediately displayed on the front end. Then, it closes
  // reply text box.
  const handleReplyComment = async (e) => {
    e.preventDefault();
    const newReplies = await dispatch(
      replyToComment(reply, replyUser, id, parentCommentId)
    );

    updateReplies(newReplies);
    closeForm();
  };

  const handleReplyChange = (e) => {
    setReply(e.target.value);
  };
  return (
    <form id="add-reply" className={styles.replyform}>
      <textarea
        className={styles.replytext}
        placeholder={`Replying to @${replyUser}`}
        onChange={handleReplyChange}
      ></textarea>
      <Button
        btnStyle="violet"
        form="add-reply"
        onClick={handleReplyComment}
        text="Post Reply"
      />
    </form>
  );
};

export default ReplyForm;
