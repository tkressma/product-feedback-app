import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ReplyButton.module.css";

const ReplyButton = ({ activateReplyForm }) => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const navigate = useNavigate();

  // If a user is signed in, activate the reply form. Else, redirect them to the login.
  return (
    <button
      className={styles.replybutton}
      onClick={() => {
        user ? activateReplyForm(true) : navigate("/auth");
      }}
    >
      Reply
    </button>
  );
};

export default ReplyButton;
