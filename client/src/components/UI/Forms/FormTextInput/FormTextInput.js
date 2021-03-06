import styles from "../FormInput.module.css";
export default function FormTextInput({
  inputId, // The input id and label htmlFor value
  value, // The inner text value of the input being displayed
  large = false, // Whether or not the text box is multiple lines or a single line
  type = "text",
  error, // Is the input text valid?
  labelHeading,
  labelCaption,
  onChange,
}) {
  let textInput;
  if (large) {
    textInput = (
      <textarea
        id={inputId}
        aria-invalid={error}
        aria-required="true"
        aria-errormessage="validation-error"
        onChange={onChange}
        value={value}
        className={error ? styles.error : undefined}
      />
    );
  } else {
    textInput = (
      <input
        id={inputId}
        aria-invalid={error}
        aria-required="true"
        aria-errormessage="validation-error"
        type={type}
        onChange={onChange}
        value={value}
        className={error ? styles.error : undefined}
      />
    );
  }

  // If the text input is large, then use a textarea instead of a input of type text.
  return (
    <>
      <label htmlFor={inputId} className={styles["caption-bold"]}>
        {labelHeading}
      </label>
      <label htmlFor={inputId} className={styles.caption}>
        {labelCaption}
      </label>

      {textInput}

      {error && (
        <p id="validation-error" className={styles["error_message"]}>
          Can't be empty
        </p>
      )}
    </>
  );
}
