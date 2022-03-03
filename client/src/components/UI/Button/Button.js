import styles from "./Button.module.css";
import { Link } from "react-router-dom";

export default function Button({ type, link = false, destination, children }) {
  const buttonType = `button--${type}`;
  const buttonStyling = `${styles.button} ${styles[buttonType]}`;

  // If link is true, create a new styled router link to the given destination.
  // Else, create a regular html button.
  if (link === true) {
    return (
      <Link to={destination} className={buttonStyling}>
        {children}
      </Link>
    );
  } else {
    return <button className={buttonStyling}>{children}</button>;
  }
}
