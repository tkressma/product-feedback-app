import styles from "./Tag.module.css";
export default function Tag(props) {
  return (
    <a href="#Tag" className={styles.tag}>
      {props.children}
    </a>
  );
}
