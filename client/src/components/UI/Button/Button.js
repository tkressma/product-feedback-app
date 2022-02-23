import styles from "./Button.module.css";
export default function Button(props) {
  const buttonStyling = `${styles.button} ${props.type}`;
  return <button className={buttonStyling}>{props.children}</button>;
}
