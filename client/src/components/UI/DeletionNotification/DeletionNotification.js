import React from "react";
import styles from "./DeletionNotification.module.css";
import Backdrop from "./Backdrop/Backdrop";
import Button from "../Button/Button";
import Heading from "../Heading/Heading";
import { useDispatch } from "react-redux";
import { deleteSuggestion } from "../../../actions/suggestions";

// dispatch(deleteSuggestion(_id));

const DeletionNotification = ({ id, closeNotification }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className={styles.notification}>
        <Heading type="h1">Delete Suggestion?</Heading>
        <div className={styles.options}>
          <Button btnStyle="blue" text="Cancel" onClick={closeNotification} />
          <Button
            btnStyle="red"
            text="Delete"
            onClick={() => dispatch(deleteSuggestion(id))}
          />
        </div>
      </div>
      <Backdrop onClick={closeNotification} />
    </>
  );
};

export default DeletionNotification;
