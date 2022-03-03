import styles from "./Button.module.css";
import { Link } from "react-router-dom";

export default function Button({ type, link = false, destination, children }) {
  const ElementTag = link ? "a" : "button";
  const buttonType = `button--${type}`;
  const buttonStyling = `${styles.button} ${styles[buttonType]}`;

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
