import styles from "../FormInput.module.css";
export default function FormTextInput({
  inputId, // The input id and label htmlFor value
  value, // The inner text value of the input being displayed
  large = false, // Whether or not the text box is multiple lines or a single line
  labelHeading,
  labelCaption,
  onChange,
}) {
  // If the text input is large, then use a textarea instead of a input of type text.
  return (
    <>
      <label htmlFor={inputId} className={styles["caption-bold"]}>
        {labelHeading}
      </label>
      <label htmlFor={inputId} className={styles.caption}>
        {labelCaption}
      </label>
      {large ? (
        <textarea id={inputId} onChange={onChange} />
      ) : (
        <input id={inputId} type="text" onChange={onChange} value={value} />
      )}
    </>
  );
}
