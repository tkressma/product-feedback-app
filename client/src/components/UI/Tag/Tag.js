import styles from "./Tag.module.css";
export default function Tag(props) {
  return <button className={styles.tag}>{props.children}</button>;
}
