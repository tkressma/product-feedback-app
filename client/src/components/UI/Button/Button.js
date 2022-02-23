import styles from "./Button.module.css";

export default function Button({ type, link, children }) {
  const buttonType = `button--${type}`;
  const buttonStyling = `${styles.button} ${styles[buttonType]}`;

  // Sometimes our "buttons" should really be links. This solves those edge cases
  const button = link ? (
    <a className={buttonStyling} href="#">
      {children}
    </a>
  ) : (
    <button className={buttonStyling}>{children}</button>
  );

  return button;
}
