import styles from "./Button.module.css";
import backIcon from "../../../assets/shared/icon-arrow-left.svg";
import { Link } from "react-router-dom";

export default function Button({ type, link = false, destination, children }) {
  const buttonType = `button--${type}`;
  const buttonStyling = `${styles.button} ${styles[buttonType]}`;

  // If link is true, create a new styled router link to the given destination.
  // If type of button is a back button, create a new "Go Back" back button with left arrow icon.
  // Else, create a regular html button.
  if (link === true) {
    return (
      <Link to={destination} className={buttonStyling}>
        {children}
      </Link>
    );
  } else if (type.includes("back")) {
    return (
      <Link to="/" className={buttonStyling}>
        <img src={backIcon} className={styles.backicon} />
        Go Back
      </Link>
    );
  } else {
    return <button className={buttonStyling}>{children}</button>;
  }
}
