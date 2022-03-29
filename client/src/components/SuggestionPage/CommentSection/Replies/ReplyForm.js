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
  const user = JSON.parse(localStorage.getItem("profile"));
  const { id } = useParams();

  const handleReplyComment = async (e) => {
    e.preventDefault();

    console.log(id);

    const newReplies = await dispatch(
      replyToComment(
        {
          content: reply,
          user: {
            name: user?.result?.name,
            username: user?.result?.username,
          },
          replyingTo: replyUser,
        },
        id,
        parentCommentId
      )
    );

    console.log(newReplies);

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
