import React from "react";
import styles from "./ReplyButton.module.css";

const ReplyButton = ({ activateReplyForm }) => {
  return (
    <button
      className={styles.replybutton}
      onClick={() => activateReplyForm(true)}
    >
      Reply
    </button>
  );
};

export default ReplyButton;
