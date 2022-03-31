import React, { useState } from "react";
import styles from "./Reply.module.css";
import ReplyForm from "../ReplyForm/ReplyForm";
import ReplyButton from "../../../../../UI/ReplyButton/ReplyButton";
import DeletionNotification from "../../../../../UI/DeletionNotification/DeletionNotification";
import deleteIcon from "../../../../../../assets/shared/icon-delete.svg";
const Reply = ({
  user,
  content,
  replyingTo,
  id,
  parentCommentId,
  updateReplies,
}) => {
  const [replyFormActive, setReplyFormActive] = useState(false);
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
      <div className={styles.reply}>
        <div className={styles["reply_header"]}>
          <div className={styles.poster}>
            <p className={styles["poster_name"]}>{user.name}</p>
            <p className={styles["poster_username"]}>@{user.username}</p>
          </div>

          <div className={styles["reply_settings"]}>
            {/* If the user is the creator of the comment, display the deletion option */}
            {(currentUser?.result?.googleId === user.id ||
              currentUser?.result?._id === id) && (
              <button
                className={styles["reply__settings_btn"]}
                aria-label="Delete comment"
                onClick={openDeletionNotification}
              >
                <img
                  src={deleteIcon}
                  className={styles["reply__delete_icon"]}
                  alt="A trash can suggesting deletion."
                />
              </button>
            )}
            <ReplyButton activateReplyForm={setReplyFormActive} />
          </div>
        </div>
        <p className={styles["reply_content"]}>
          <span className={styles.recipient}>@{replyingTo}</span> {content}
        </p>
        {replyFormActive && (
          <ReplyForm
            replyUser={user.username}
            parentCommentId={parentCommentId}
            closeForm={() => setReplyFormActive(false)}
            updateReplies={updateReplies}
          />
        )}
      </div>
    </>
  );
};

export default Reply;
