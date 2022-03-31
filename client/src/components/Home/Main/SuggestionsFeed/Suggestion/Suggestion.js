import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DeletionNotification from "../../../../UI/DeletionNotification/DeletionNotification";
import styles from "./Suggestion.module.css";
import Tag from "../../../../UI/Tag/Tag";
import UpvoteButton from "./UpvoteButton/UpvoteButton";
import CommentLink from "./CommentLink/CommentLink";
import Heading from "../../../../UI/Heading/Heading";
import TextBody from "../../../../UI/TextBody/TextBody";
import editIcon from "../../../../../assets/shared/icon-edit-feedback-pen.svg";
import deleteIcon from "../../../../../assets/shared/icon-delete.svg";
import Moment from "react-moment";
export default function Suggestion({ suggestionData }) {
  // Destructuring props
  const {
    title,
    description,
    category,
    upvotes,
    comments,
    creator,
    username,
    createdAt,
    name,
    _id,
  } = suggestionData;

  const user = JSON.parse(localStorage.getItem("profile"));
  const [deletionNotificationActive, setDeleteNotificationActive] =
    useState(false);
  const navigate = useNavigate();

  const openDeletionNotification = (e) => {
    e.preventDefault();
    setDeleteNotificationActive(true);
  };

  return (
    <>
      {deletionNotificationActive && (
        <DeletionNotification
          id={_id}
          closeNotification={() => setDeleteNotificationActive(false)}
        />
      )}
      <article className={styles.suggestion}>
        <UpvoteButton upvotes={upvotes} id={_id} />

        {/* Suggestion title, description, and tag */}
        <section className={styles["suggestion__info"]}>
          <div className={styles["suggestion__header"]}>
            <Heading
              type="h3"
              link={true}
              destination={`/view-suggestion/${_id}`}
            >
              {title}
            </Heading>

            <TextBody type="b1">
              {name}
              <span className={styles["suggestion__username"]}>
                @{username}
              </span>
            </TextBody>

            <TextBody type="b2">
              <Moment format="MM/DD/YYYY" date={createdAt} />
            </TextBody>
          </div>

          <p className={styles["suggestion__description"]}>{description}</p>
          <Tag category={category} />
        </section>

        {/* If the user is the creator of the suggestion, display the edit and delete options */}
        {(user?.result?.googleId === creator ||
          user?.result?._id === creator) && (
          <div className={styles["suggestion__creator_settings"]}>
            <button
              className={styles["suggestion__creator_settings_btn"]}
              onClick={(e) => {
                e.preventDefault();
                navigate(`/edit-feedback/${_id}`);
              }}
              aria-label="Edit suggestion"
            >
              <img
                src={editIcon}
                className={styles["suggestion__edit_icon"]}
                alt="A pen suggesting editing"
              />
            </button>
            <button
              className={styles["suggestion__creator_settings_btn"]}
              onClick={openDeletionNotification}
              aria-label="Delete suggestion"
            >
              <img
                src={deleteIcon}
                className={styles["suggestion__delete_icon"]}
                alt="A trash can suggesting deletion."
              />
            </button>
          </div>
        )}

        <CommentLink comments={comments} id={_id} />
      </article>
    </>
  );
}
