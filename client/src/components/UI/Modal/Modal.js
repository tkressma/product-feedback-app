import React from "react";
import styles from "./Modal.module.css";
import Backdrop from "./Backdrop/Backdrop";
const Modal = (props) => {
  return (
    <div className={styles.modal}>
      <Backdrop />
      {props.children}
    </div>
  );
};

export default Modal;
