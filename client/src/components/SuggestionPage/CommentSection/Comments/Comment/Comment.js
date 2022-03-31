import React, { useState } from "react";
import styles from "./Comment.module.css";
import Replies from "../Replies/Replies";
import ReplyForm from "../Replies/ReplyForm/ReplyForm";
import ReplyButton from "../../../../UI/ReplyButton/ReplyButton";
import deleteIcon from "../../../../../assets/shared/icon-delete.svg";
import DeletionNotification from "../../../../UI/DeletionNotification/DeletionNotification";

const Comment = ({ user, content, id, replies }) => {
  const [replyFormActive, setReplyFormActive] = useState(false);
  const [replyData, setReplyData] = useState(replies);
  const [deletionNotificationActive, setDeleteNotificationActive] =
    useState(false);
  const currentUser = JSON.parse(localStorage.getItem("profile"));

  const openDeletionNotification = (e) => {
    e.preventDefault();
    setDeleteNotificationActive(true);
  };

  return (
    <>
      {deletionNotificationActive && (
        <DeletionNotification
          id={id}
          comment={true}
          closeNotification={() => setDeleteNotificationActive(false)}
        />
      )}
      <div className={styles.comment}>
        <div className={styles["comment_header"]}>
          <div className={styles.poster}>
            <p className={styles["poster_name"]}>{user.name}</p>
            <p className={styles["poster_username"]}>@{user.username}</p>
          </div>

          <div className={styles["comment_settings"]}>
            {/* If the user is the creator of the comment, display the deletion option */}
            {(currentUser?.result?.googleId === user.id ||
              currentUser?.result?._id === id) && (
              <button
                className={styles["comment__settings_btn"]}
                aria-label="Delete comment"
                onClick={openDeletionNotification}
              >
                <img
                  src={deleteIcon}
                  className={styles["comment__delete_icon"]}
                  alt="A trash can suggesting deletion."
                />
              </button>
            )}
            <ReplyButton activateReplyForm={setReplyFormActive} />
          </div>
        </div>
        <p className={styles["comment_content"]}>{content}</p>
        {replyFormActive && (
          <ReplyForm
            replyUser={user.username}
            parentCommentId={id}
            closeForm={() => setReplyFormActive(false)}
            updateReplies={setReplyData}
          />
        )}
        {replyData && (
          <Replies
            replyData={replyData}
            parentCommentId={id}
            updateReplies={setReplyData}
          />
        )}
      </div>
    </>
  );
};

export default Comment;
