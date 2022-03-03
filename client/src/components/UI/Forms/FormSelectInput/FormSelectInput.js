import styles from "../FormInput.module.css";
export default function FormSelectInput({
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
      <input type="text" list="categories" />
      <datalist id="categories">
        <option>Feature</option>
        <option>UI</option>
        <option>UX</option>
      </datalist>
    </>
  );
}
