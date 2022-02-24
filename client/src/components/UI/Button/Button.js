import styles from "./Button.module.css";

export default function Button({ type, link, children }) {
  const buttonType = `button--${type}`;
  const buttonStyling = `${styles.button} ${styles[buttonType]}`;

  return <button className={buttonStyling}>{children}</button>;
}
