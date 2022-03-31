import React from "react";
import styles from "./DeletionNotification.module.css";
import Backdrop from "./Backdrop/Backdrop";
import Button from "../Button/Button";
import Heading from "../Heading/Heading";
import { useDispatch } from "react-redux";
import { deleteSuggestion } from "../../../actions/suggestions";
import { useNavigate } from "react-router-dom";

const DeletionNotification = ({ id, closeNotification, comment = false }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.notification}>
        <Heading type="h1">
          Delete {comment ? "Comment" : "Suggestion"}?
        </Heading>
        <div className={styles.options}>
          <Button btnStyle="blue" text="Cancel" onClick={closeNotification} />
          <Button
            btnStyle="red"
            text="Delete"
            onClick={() => {
              dispatch(deleteSuggestion(id));
              navigate("/");
            }}
          />
        </div>
      </div>
      <Backdrop onClick={closeNotification} />
    </>
  );
};

export default DeletionNotification;
