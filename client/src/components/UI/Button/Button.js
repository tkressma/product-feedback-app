import styles from "./Button.module.css";
import { Link } from "react-router-dom";

export default function Button({
  btnStyle, // Background color of the button
  text, // Inner text of the button
  form, // If the button submits the form, what form does it submit?
  onClick,
  link = false, // Is the button a router link?
  destination, // IF it is a link, where should it route to?
}) {
  const buttonStyling = `button--${btnStyle}`;
  const buttonStyles = `${styles.button} ${styles[buttonStyling]}`;

  // If link is true, create a new styled router link to the given destination.
  // Else, create a regular html button.
  if (link) {
    return (
      <Link to={destination} className={buttonStyles}>
        {text}
      </Link>
    );
  } else {
    return (
      <button
        type="submit"
        form={form}
        onClick={onClick}
        className={buttonStyles}
        aria-disabled={btnStyle === "disabled" ? "true" : "false"}
      >
        {text}
      </button>
    );
  }
}
