import styles from "./FormTextInput.module.css";
export default function FormTextInput({
  inputId,
  type,
  labelHeading,
  labelCaption,
}) {
  return (
    <>
      <label for={inputId} className={styles["caption-bold"]}>
        {labelHeading}
      </label>
      <label for={inputId} className={styles.caption}>
        {labelCaption}
      </label>
      <input className={styles[`input--${type}`]} type="text" id={inputId} />
    </>
  );
}
