import React from "react";
import styles from "./DeletionNotification.module.css";
import Backdrop from "./Backdrop/Backdrop";
import Button from "../Button/Button";
import Heading from "../Heading/Heading";
import { useDispatch } from "react-redux";
import { deleteComment, deleteSuggestion } from "../../../actions/suggestions";
import { useNavigate } from "react-router-dom";

const DeletionNotification = ({
  id,
  closeNotification,
  comment = false,
  suggestionId,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (event) => {
    event.preventDefault();
    if (comment) {
      dispatch(deleteComment(suggestionId, id));
      closeNotification();
    } else {
      dispatch(deleteSuggestion(id));
      navigate("/");
    }
  };

  return (
    <>
      <div className={styles.notification}>
        <Heading type="h1">
          Delete {comment ? "Comment" : "Suggestion"}?
        </Heading>
        <div className={styles.options}>
          <Button btnStyle="blue" text="Cancel" onClick={closeNotification} />
          <Button btnStyle="red" text="Delete" onClick={handleDelete} />
        </div>
      </div>
      <Backdrop onClick={closeNotification} />
    </>
  );
};

export default DeletionNotification;
