import styles from "./TextBody.module.css";

export default function TextBody({ type, children }) {
  const bodyType = `body--${type}`; // Body types: b1, b2, b3
  const bodyStyling = `${styles.body} ${styles[bodyType]}`;
  return <p className={bodyStyling}>{children}</p>;
}
